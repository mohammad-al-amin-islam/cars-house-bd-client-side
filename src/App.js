import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import InventoryItem from './Pages/InventoryItem/InventoryItem';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories/ManageInventories';
import AddItems from './Pages/AddItems/AddItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryItem></InventoryItem>
          </RequireAuth>
        }
        ></Route>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/add-items' element={<AddItems></AddItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
