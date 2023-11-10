import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Space section/Home';
import Main from './components/LearnDuke/Main';
import UserLoginData from  './components/LearnDuke/UserLoginData'

function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/"  element={< Home />} />
      <Route path="/main/:id" element={< Main />} />   
      <Route path="/user" element={<UserLoginData />} />
  </Routes>
  </Router>
  );
}

export default App;
