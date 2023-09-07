
import { Route, Routes } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Questionniare from "./components/Questionniare"
import Create from "./components/Create"


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/questionnaire" element={<Questionniare/>}/>
      <Route path="/create" element={<Create/>}/>
   </Routes >
  )
}

export default App;
