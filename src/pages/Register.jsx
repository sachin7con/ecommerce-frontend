import {useState} from "react";

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

    // save in localStorage (temporary)
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registered Successfully!");
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