import React , {useState , useRef} from 'react'
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';


function AddUser(props) {
   const  nameInputRef =  useRef();
   const ageInputRef = useRef();

   
   const [error, setError] =useState();

   const  addSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName  = nameInputRef.current.value
    const enterdAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enterdAge.trim().length === 0 ){
        setError({
            title : "Invaild input",
            message : "please enter a vaildd name and age (non-empty values)."
        });
        return;
    }

    if (+enterdAge < 1) {
        setError({
            title : "Invaild input",
            message : "please enter a vaildd  age (> 0 )."
        });
        return

    }
    props.onAddUser(enteredName, enterdAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
   


   }
   const errorHandler = () =>{
    setError(null)
   }
  

   
  return (
   
    <Wrapper>
    
    {error && <ErrorModal title = {error.title} message ={error.message} onConfirm ={errorHandler} />}

   
   
    <Card className = {classes.input}>

      <form onSubmit ={addSubmitHandler}>


        <label  htmlFor='Username'>Username </label>

        <br/>

        <input type ="text" id ="Username"   ref = {nameInputRef}/>

        <br/>

       

        <label  htmlFor='age'>Age (Years)</label>

        <br/>

        <input type ="number" id ="age" ref= {ageInputRef} />

        <br/>
        <Button type= "submit"> Add User</Button>
       
      </form>
      
      
      </Card>
      </Wrapper>
  )
}

export default AddUser
