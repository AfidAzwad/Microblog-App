import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')){
            history.push("/blog")
        }
    },[history])
    async function login()
    {
        console.warn(username,password)
        let item ={username,password};
        let result = await fetch("http://localhost:8000/api/blog/login/",{
            method : 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept": 'application/json',
            },
            body: JSON.stringify(item)
        } );
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/blog")
    }

    return (
        <div id="login" className='flex justify-center items-center mt-36'>
            <form className="max-w-sm">
            <div className="md:flex md:items-center justify-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Username
                    </label>
                </div>
                <div className="md:w-2/3">
                     <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Password
                </label>
                </div>
                <div className="md:w-2/3">
                     <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3"></div>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                </label>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button onClick={login} className=" ml-32 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Login
                </button>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Login;