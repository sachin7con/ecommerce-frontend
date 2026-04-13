import {useState} from "react";
import axios from "axios";

function Login(){
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    function handleChange(e){
        setLoginData({...loginData, 
            [e.target.name]: e.target.value },
        )}


    function handleSubmit(e){
        e.preventDefault();

        ////Local storage 
        // const storedUser = JSON.parse(localStorage.getItem("user"));
        // if(storedUser && 
        //     storedUser.email === loginData.email &&
        //     storedUser.password === loginData.password
        // ){
        //     alert("Login Successfull");
        // }else {
        //     alert("Invalid credentials")
        // }

        axios.post("http://localhost:5000/api/auth/login", loginData)
        .then((res)=>{
            localStorage.setItem("token", res.data.token) // token stored
            alert("Login Successfull");
        }).catch((err) =>{
            alert("invalid credentials")
        });
    }



    return(
        <>
        <div>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Enter email" value={loginData.email} onChange={handleChange}></input>
        <input type="password" name="password" placeholder="password" value={loginData.password} onChange={handleChange}></input>

        <button type="submit">Login</button>
        </form>


        </div>
        
        </>
    )
}

export default Login;