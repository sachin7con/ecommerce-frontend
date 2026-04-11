import {useState} from "react";
import axios from "axios";

function Register(){
        const [user, setUser] = useState({
            email: "",
            password: "",
        },)

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();

    // // save in localStorage (temporary)
    // localStorage.setItem("user", JSON.stringify(user));
    // alert("Registered Successfully!");
    axios.post("http://localhost:5000/api/auth/register", user)
    .then((res) =>{
        alert("Registered Successfully");
    }).catch((err) =>{alert("Error while Registering user");})
          

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            
            <input type="email" name="email" placeholder="Enter email id" onChange={handleChange}></input>
            <input type="password" name="password" placeholder="Enter Password" onChange={handleChange}></input>

            <button type="submit">Register</button>
            </form>
        
        
        </div>
    )
}

export default Register;