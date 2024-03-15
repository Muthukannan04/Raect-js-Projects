import './App.css';
import  {Route,Routes} from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/User';
import Admin from './Components/Admin';
import { Signup } from './Components/Signup';

import { Auth } from './Components/Auth';
import NoMatch from './Components/NoMatch';

function App() {
  return (
    <div className="App">
    <Auth>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<User/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}>

      </Route>
      <Route path='*' element={<NoMatch/>}/> 
      </Routes>

      </Auth>
      
    </div>
  );
}

export default App;
