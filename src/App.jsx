import './App.css'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Routes, Route, HashRouter } from "react-router-dom";
import { Sidebar } from './components/Sidebar';

function App(){
  return (
    <div className="h-screen text-white">
    <div>
      <HashRouter>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={ <TaskList /> } />
          <Route exact path="/add" element={ <TaskForm /> } />
          <Route exact path="/edit/:id" element={ <TaskForm /> } />
          <Route exact path="*" element={<TaskList />} />
        </Routes>
      </HashRouter>
    </div>
    </div>
  )
}

export default App