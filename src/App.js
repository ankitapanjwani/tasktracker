import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';
import AddTask from './components/AddTask';

function App() {
  const  [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Office Meeting',
        day: 'March 8th at 5:30 pm',
        reminder: false
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'March 5th at 10:00 am',
        reminder: true
    },
    {
        id: 4,
        text: 'College Reunion',
        day: 'Aug 6th at 6:00 pm',
        reminder: false
    },
]);


//ADD task
const addTask = (task)=>{
console.log(task);
}


//delete a task
const deleteTask = (id) =>{
    // console.log('delete', id);
    setTasks(tasks.filter((task)=> task.id !== id))
}


//toggle reminder
const toggleReminder = (id)=>{
  // console.log("In toggle reminder",id);
  setTasks(tasks.map((task)=>(
    task.id === id 
    ?
    {...task, reminder: !task.reminder}
     : 
     task
   )))
}
  return (
    <div className="container">
      <Header
     
       title="Task tracker" 
       /* title={1}    this will give a warning in console*/
       />

      <AddTask onAdd ={addTask}/>

        {tasks.length >0
        ?

        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
         :
          <h5>Yayy!! You have no task to Track!!</h5>}
      
    </div>
  );
}

export default App;
