import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy } from 'react'
import ProjectRoute from './auth/ProjectRoute'
const Home = lazy(
  () => import('./pages/Home')

)
const NotFound = lazy(
  () => import('./pages/NotFound')

)
const Login = lazy(
  () => import('./pages/Login')

)
const Chat = lazy(
  () => import('./pages/Chat')

)
const Groups = lazy(
  () => import('./pages/Groups')

)
let user = false;

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectRoute user={user} redirect={undefined}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </ProjectRoute>} />

        <Route path="/" element={<ProjectRoute user={!user} redirect={"/"}>

          <Route path="/login" element={<Login />} />
        </ProjectRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
