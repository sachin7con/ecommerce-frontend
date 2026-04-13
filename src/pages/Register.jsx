import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



function Register(){
        const navigate = useNavigate(); 
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
        navigate("/login");
    }).catch((err) =>{
        console.log(err.messege);
        alert("Error while Registering user");
    })
          

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            
            <input type="email" name="email" placeholder="Enter email id" value={user.email} onChange={handleChange}></input>
            <input type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleChange}></input>

            <button type="submit">Register</button>
            </form>
        
        
        </div>
    )
}

export default Register;