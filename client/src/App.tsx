import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import { lazy } from 'react'
const Home = lazy(
  () => import('./pages/Home')

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

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
