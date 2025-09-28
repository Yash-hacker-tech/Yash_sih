import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Batches from './pages/Batches';
import Faculty from './pages/Faculty';
import Subjects from './pages/Subjects';
import Classrooms from './pages/Classrooms';
import Constraints from './pages/Constraints';
import SpecialClasses from './pages/SpecialClasses';
import Timetable from './pages/Timetable';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div className="App">
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-cosmic-light dark:bg-cosmic-dark">
                  <LoadingSpinner size="large" />
                </div>
              }>
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<FrontPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Protected routes */}
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Layout>
                        <Dashboard />
                      </Layout>
                    </ProtectedRoute>
                  } />
                  <Route path="/batches" element={
                    <ProtectedRoute>
                      <Layout>
                        <Batches />
                      </Layout>
                    </ProtectedRoute>
                  } />
                  <Route path="/faculty" element={
                    <ProtectedRoute>
                      <Layout>
                        <Faculty />
                      </Layout>
                    </ProtectedRoute>
                  } />
                  <Route path="/subjects" element={
                    <ProtectedRoute>
                      <Layout>
                        <Subjects />
                      </Layout>
                    </ProtectedRoute>
                  } />
                  <Route path="/classrooms" element={
                    <ProtectedRoute>
                      <Layout>
                        <Classrooms />
                      </Layout>
                    </ProtectedRoute>
                  } />
                  <Route path="/constraints" element={
                    <ProtectedRoute>
                      <Layout>
                        <Constraints />
                      </Layout>
                    </ProtectedRoute>
                  } />
                  <Route path="/special-classes" element={
                    <ProtectedRoute>
                      <Layout>
                        <SpecialClasses />
                      </Layout>
                    </ProtectedRoute>
                  } />
                  <Route path="/timetable" element={
                    <ProtectedRoute>
                      <Layout>
                        <Timetable />
                      </Layout>
                    </ProtectedRoute>
                  } />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
