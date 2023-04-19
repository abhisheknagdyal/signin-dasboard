import './App.css';
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import SignIn from './routes/sign-in/sign-in.component';
import Main from './routes/main/main.component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='dashboard' element={<Main/>}/>
      </Routes>
      
    </Router>
        
  );
}

export default App;
