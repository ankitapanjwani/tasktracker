import React, {useState} from 'react'

const AddTask = ({onAdd}) => {

    // const[text, setText] = useState('');
    // const[day, setDay] = useState('');
    // const[reminder, setReminder] = useState(false);

    const initialValues = {
        tasks: "",
        day: "",
        check: false,
      };
    const [values, setValues] = useState(initialValues);
    const handlechange = (e) =>{
        // console.log('In handle change');
        const { name, value} = e.target;
        setValues({
          ...values,
          [name]: value,
          [e.target.name]: e.target.checked
        //   check:!check
        });
        // setReminder(e.currentTarget.checked)
    }


    // const onSubmit = (e) =>{
    //         e.preventDefault();
    //         if(!values)
    //         {
    //             alert('Please add tasks!');
    //             return
    //         }

    //         onAdd({values,reminder})

    //         setValues('')
    //         setReminder(false)

         
    // }
    return (
        <div>
            <form className="add-form" >
                    <div className="form-control">
                        <label>Tasks</label> 
                        <input type="text" name="tasks" placeholder="Add tasks" value={values.text} onChange={handlechange}/>  
                    </div>
                    <div className="form-control">
                        <label>Day and Time</label> 
                        <input type="text" name="day" placeholder="Add Day and Time"  value={values.day} onChange={handlechange}/>  
                    </div>
                    <div className="form-control form-control-check">
                        <label>Set Reminder</label> 
                        <input type="checkbox" checked={values.check} name="check" onChange={handlechange}/>  
                    </div>

                    <input type="submit"className="btn btn-block" value="Save Task"/>
            </form>
        </div>
    )
}

export default AddTask
