import './App.css';

//----added

import React, {useState, useEffect} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle]       = useState([{}])
  const [desc, setDesc]         = useState([{}])


  return (

    <div className='App list-group-item justify-content-center align-items-center mx-auto' 
      style={{"width":"400px", "backgroundColor":"white","marginTop":"15px"}}>


      <h1 className='card text-white bg-primary mb-1' styleName="max-width: 20rem;">Task Manager</h1>
      <h6 className='card text-white bg-primary mb-3'>FAST API - React - MongoDb</h6>

      <div className='card-body'>
        <h5 className='card text-white bg-dark mb-3'>Add your Tasks</h5>
        <span className='card-text'>
          <input className='mb-2 form-control titleIn'
          placeholder='title'/>
          <input className='mb-2 form-control desIn'
          placeholder='Description'/>
          <button className='btn btn-outline-primary mx-2 mb-2' style={{'borderRadius':'50px', 'font-weight':'bold'}}>Add Task</button>
        </span>


        <h6 className='card text-white bg-dark mb-3'>Your Tasks</h6>

        <div>
          {/* TODO ITEMS - external component */}
        </div>
        
        <h6 className='card text-dark bg-warning py-1 mb-0'> CopyWright 2021, All Rights reserved &copy;</h6>




      </div>

      







    </div>
  );
}

export default App;
