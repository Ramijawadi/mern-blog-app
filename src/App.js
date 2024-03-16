import { Routes , Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Layout from './components/Layout';
import Posts from './Pages/Posts';
import { UserContextProvider } from './components/UserContext';

function App() {
  return (
    <UserContextProvider>
<Routes>
   <Route path='/' element={<Layout />}>
     <Route  index element={<Posts/>}  />
     <Route path='/login'  element={<LoginPage/>} />
    <Route path='/register'  element={<RegisterPage/>} />
    </Route>
   </Routes>
</UserContextProvider>

  );
}

export default App;
