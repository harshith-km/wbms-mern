import Navbar from "../components/Navbar";
import "../assets/callback.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Callback(){
    const [form , setForm] = useState({user_id :"676661a08c1d5741ed40946f", userName:"" , phoneNO:"", address:"", problem:"", problemDescription:"" })
    const [callbacks, setCallbacks] = useState(null)
    const [applicationId , setApplicationId] = useState(null)

    useEffect(() =>{
        axios   
            .get("http://localhost:3001/api/callbacks/676661a08c1d5741ed40946f")
            .then((res) =>{
                setCallbacks(res.data)
                console.log(callbacks)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [])

    function handleInput(e){
        const newForm = {...form, [e.target.name]:e.target.value}
        setForm(newForm)
    }

    function submitForm(){
        axios 
            .post("http://localhost:3001/api/callbacks/",form)
            .then((res)=>{
                console.log(res)
                setCallbacks(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    const cellStyles = {
        pending: { backgroundColor: 'yellow' , color: "black" },
        processing: { backgroundColor: 'lightblue' },
        resolved: { backgroundColor: 'green' },
      };
    return(
            <div className="content_area">
                <div className="callbackForm">
                    <div className="input_div">
                        <label>Name : </label>
                        <input 
                            type="text"
                            name="userName"
                            onChange={(e) => handleInput(e)}/>
                    </div>
                    <div className="input_div">
                        <label >Phone No : </label>
                        <input 
                            type="tel"
                            name="phoneNO"
                            onChange={(e) => handleInput(e)}/>
                    </div>
                    <div className="input_div">
                        <label>Address : </label>
                        <input 
                            type="text"
                            name="address"
                            onChange={(e) => handleInput(e)}/>
                    </div>
                    <div className="input_div">
                        <label>Select the Problem : </label>
                        <select name="problem" onChange={(e) => handleInput(e)}>
                            <option value="water issue">Water issue</option>
                            <option value="water leakage">Water leakage</option>
                            <option value="billing issue">Billing issue</option>
                            <option value="payment issue">Payment issue</option>
                            <option value="pipe problem">Pipe problem</option>
                            <option value="other issue">Other issue</option>
                        </select>
                    </div>
                    <label>Problem description :</label>
                    <textarea name="problemDescription" onChange={(e) => handleInput(e)} rows="4"></textarea>

                    <button onClick={submitForm}>Request callback</button>
                </div>

                <div className="callbacks">
                    {applicationId && applicationId !== null ? (
                        <div className="applicationId">
                            <h3>{applicationId}</h3>
                            <button onClick={()=>setApplicationId(null)}>Close</button>
                        </div>
                    ) : (
                        callbacks && callbacks.length > 0 ? (
                            <table border={2}>
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Phone No</th>
                                    <th>Address</th>
                                    <th>Problem</th>
                                    <th>Problem Description</th>
                                    <th>Status</th>
                                    <th>Operations</th>
                                </tr>
                             </thead>
                            <tbody>
                                {callbacks.map((callback, index) => (
                                <tr key={index}>
                                    <td>{callback.userName}</td>
                                    <td>{callback.phoneNO}</td>
                                    <td>{callback.address}</td>
                                    <td>{callback.problem}</td>
                                    <td>{callback.problemDescription.slice(0,20)}{callback.problemDescription.length >10 && "..."}</td>
                                    <td style={cellStyles[callback.state] || {}}>{callback.state}</td>
                                    <td><button onClick={()=>setApplicationId(callback._id)}>View Application ID</button></td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        ) : (
                            <h3>No callbacks found</h3>
                        )
                    )}
                    
                    </div>
            </div>
    );
}

export default Callback;