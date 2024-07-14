import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import ProjectRoute from './auth/ProjectRoute';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

const user = true;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProjectRoute user={user} redirect="/login"><Home /></ProjectRoute>} />
          <Route path="/chat/:chatId" element={<ProjectRoute user={user} redirect="/login"><Chat /></ProjectRoute>} />
          <Route path="/groups" element={<ProjectRoute user={user} redirect="/login"><Groups /></ProjectRoute>} />
          <Route path="/login" element={<ProjectRoute user={!user} redirect="/"><Login /></ProjectRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
