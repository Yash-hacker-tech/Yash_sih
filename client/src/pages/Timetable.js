import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Play, Download, Clock, Users, BookOpen, Building, GraduationCap } from 'lucide-react';
import { batchAPI, timetableAPI } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Timetable = () => {
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [timetable, setTimetable] = useState(null);
  const [loading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [allBatchesMode, setAllBatchesMode] = useState(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const periods = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'Period 6'];

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await batchAPI.getAll();
      setBatches(response.data || []);
    } catch (error) {
      console.error('Error fetching batches:', error);
    }
  };

  const generateTimetable = async () => {
    if (!selectedBatch && !allBatchesMode) {
      alert('Please select a batch or enable all batches mode');
      return;
    }

    setGenerating(true);
    try {
      const response = await timetableAPI.generate(selectedBatch, allBatchesMode);
      console.log('Full timetable response:', response);
      console.log('Timetable response data:', response.data);
      
      if (response.data.timetable) {
        // Single batch mode
        console.log('Single batch mode - timetable data:', response.data.timetable);
        setTimetable(response.data.timetable);
      } else if (response.data.batchTimetables) {
        // All batches mode - flatten the data
        console.log('All batches mode - batchTimetables:', response.data.batchTimetables);
        const allTimetables = [];
        Object.values(response.data.batchTimetables).forEach(batchTimetable => {
          allTimetables.push(...batchTimetable);
        });
        console.log('Flattened timetable data:', allTimetables);
        setTimetable(allTimetables);
      } else {
        console.log('Direct data mode:', response.data);
        setTimetable(response.data);
      }
    } catch (error) {
      console.error('Error generating timetable:', error);
      console.error('Error details:', error.response?.data);
      alert('Failed to generate timetable: ' + (error.response?.data?.error || error.message));
    } finally {
      setGenerating(false);
    }
  };

  const exportTimetable = () => {
    if (!timetable) return;

    const csvContent = generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `timetable-${selectedBatch || 'all'}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const generateCSV = () => {
    if (!timetable) return '';

    const headers = ['Batch', 'Day', 'Period', 'Subject', 'Faculty', 'Classroom', 'Department', 'Shift'];
    const rows = [headers.join(',')];

    timetable.forEach(entry => {
      const row = [
        entry.batch,
        entry.day,
        entry.period,
        entry.subject,
        entry.faculty,
        entry.classroom,
        entry.department,
        entry.shift
      ].map(field => `"${field}"`).join(',');
      rows.push(row);
    });

    return rows.join('\n');
  };

  const renderTimetableGrid = () => {
    if (!timetable || timetable.length === 0) {
      return (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400">No timetable generated yet</p>
        </div>
      );
    }

    console.log('Rendering timetable with data:', timetable);

    // Group timetable by batch
    const batchTimetables = {};
    timetable.forEach(entry => {
      if (!entry || !entry.batch || !entry.day || !entry.period) {
        console.warn('Invalid timetable entry:', entry);
        return;
      }
      
      if (!batchTimetables[entry.batch]) {
        batchTimetables[entry.batch] = {};
      }
      if (!batchTimetables[entry.batch][entry.day]) {
        batchTimetables[entry.batch][entry.day] = {};
      }
      batchTimetables[entry.batch][entry.day][entry.period] = entry;
    });

    return Object.entries(batchTimetables).map(([batchName, batchData]) => (
      <motion.div
        key={batchName}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
          <GraduationCap className="h-5 w-5 mr-2 text-primary-600" />
          {batchName}
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Period
                </th>
                {days.map(day => (
                  <th key={day} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {periods.map(period => (
                <tr key={period} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">
                    {period}
                  </td>
                  {days.map(day => {
                    const entry = batchData[day]?.[period];
                    return (
                      <td key={day} className="px-4 py-3 text-sm">
                        {entry ? (
                          <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                            <div className="font-medium text-primary-900">{entry.subject}</div>
                            <div className="text-xs text-primary-700 mt-1 flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {entry.faculty}
                            </div>
                            <div className="text-xs text-primary-600 mt-1 flex items-center">
                              <Building className="h-3 w-3 mr-1" />
                              {entry.classroom}
                            </div>
                          </div>
                        ) : (
                          <div className="text-gray-400 text-center py-2">-</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-3"
      >
        <div className="p-3 bg-primary-100 rounded-lg">
          <Calendar className="h-6 w-6 text-primary-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Timetable Generator</h1>
          <p className="text-slate-600 dark:text-slate-400">Generate optimized class schedules using AI algorithms</p>
        </div>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="allBatches"
                checked={allBatchesMode}
                onChange={(e) => {
                  setAllBatchesMode(e.target.checked);
                  if (e.target.checked) setSelectedBatch('');
                }}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="allBatches" className="ml-2 text-sm text-slate-700 dark:text-slate-300">
                Generate for all batches
              </label>
            </div>

            {!allBatchesMode && (
              <div className="min-w-0 flex-1 sm:max-w-xs">
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="input-field"
                >
                  <option value="">Select a batch</option>
                  {batches.map(batch => (
                    <option key={batch._id} value={batch._id}>
                      {batch.name} - {batch.department}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="flex space-x-3">
            <button
              onClick={generateTimetable}
              disabled={generating || (!selectedBatch && !allBatchesMode)}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {generating ? (
                <LoadingSpinner size="small" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              <span>{generating ? 'Generating...' : 'Generate Timetable'}</span>
            </button>

            {timetable && (
              <button
                onClick={exportTimetable}
                className="btn-secondary flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Timetable Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Generated Timetable</h2>
          {timetable && (
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <Clock className="h-4 w-4 mr-1" />
              Generated on {new Date().toLocaleString()}
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size="large" />
          </div>
        ) : (
          renderTimetableGrid()
        )}
      </motion.div>

      {/* Statistics */}
      {timetable && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Classes</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{timetable.length}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Unique Faculty</p>
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(timetable.map(t => t.faculty)).size}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Building className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Classrooms Used</p>
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(timetable.map(t => t.classroom)).size}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Timetable;
