import './App.css';
import User from './components/user/User.js'
import React from "react";
import useFetch from './custom-hooks/useFetch';

function App() {
  const {data:users, isLoading, error, handleDelete, handleEdit, handleCreate} = useFetch('http://localhost:5500');
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>{isLoading}</div>}
      {users && <User users = {users} handleDelete = {handleDelete} handleCreate={handleCreate} handleEdit ={handleEdit}/>}
    </div>
    
  );
}

export default App;
