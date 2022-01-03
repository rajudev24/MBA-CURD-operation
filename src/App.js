
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Pages/Contexts/AuthProvider';
import Home from './Pages/Home/Home';
import AddPost from './Pages/AddPost/AddPost';
import Update from './Pages/Update/Update';
import UpdatePost from './Pages/UpdatePost/UpdatePost';

function App() {
  return (
    < >
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/addpost' element={<AddPost/>}></Route>
            <Route path='/update' element={<Update></Update>}></Route>
            <Route path='/updatepost/:id' element={<UpdatePost/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
