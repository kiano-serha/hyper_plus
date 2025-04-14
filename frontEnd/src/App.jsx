import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './Pages/Chat'
import Development from './Pages/Development'
import Index from './Pages/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat pageName={"chat"}/>} />
        <Route path="/dev" element={<Development pageName={"dev"}/>}/>
        <Route path="/" element={<Index pageName={"home"}/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App