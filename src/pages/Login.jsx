import {useState} from "react";


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

        const storedUser = JSON.parse(localStorage.getItem("user"));
        
        if(storedUser && 
            storedUser.email === loginData.email &&
            storedUser.password === loginData.password
        ){
            alert("Login Successfull");
        }else {
            alert("Invalid credentials")
        }
    
    
    
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