import { useEffect, useState } from "react"
import "../assets/settings.css"
import axios from "axios"


function Settings(){

    const [user , setUser] = useState({email : "" , phoneNO : "" ,password  : "", confirmPassword: "" })
    useEffect(() =>{
        axios
            .get("http://localhost:3001/api/users/676661a08c1d5741ed40946f")
            .then((res)=>{
                // setUser(res.data)
                console.log(res.data)
                setUser(res.data)
            })
            .catch(error =>{
                console.log(error.msg)
            })
    }, [])

    function handleInput(e){
        const newUser = {...user, [e.target.name]:e.target.value }
        setUser(newUser)
    }

    return(
        <div className="content_area">

            <div className="profileUpdateForm">
                <label>
                    Email Id 
                    <input type="text" value={user && user.email} onChange={(e)=> handleInput(e)} name="email"/>
                </label>
                <label>
                    Phone NO
                    <input type="text" value={user && user.phoneNO} onChange={(e)=> handleInput(e)} name="phoneNO"/>
                </label>
                <label>
                    Password
                    <input type="text" value={user && user.password} onChange={(e)=> handleInput(e)} name="password"/>
                </label>
                <label>
                    Re-enter
                    <input type="text" value={user && user.confirmPassword} onChange={(e)=> handleInput(e)} name="confirmPassword"/>
                </label>

                <button>Update</button>
            </div>
        </div>
    )
}

export default Settings