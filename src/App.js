import React ,{useState} from 'react'
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserLists from './Components/Users/UserList';



function App() {
 const [usersList,setUsersList]  =useState([]);


 const addUserHandler = (uName ,uAge) => {
  setUsersList((prevUsersList) => {
    return [...prevUsersList , {name : uName , age :uAge, id :Math.random().toString()}]
  })
 }

  return (
    <div >

        <AddUser onAddUser = {addUserHandler} />
        <UserLists users = {usersList}/>
    
        
       
   
    </div>
  );
}

export default App;
