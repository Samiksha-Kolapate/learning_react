/* import Input from '../common/Input';
import Button from '../common/Button'

function Login() {
    var componentName = "Login";

    return (
        <div style={{backgroundColor: "blue", color: "white"}}>
            <h1>{componentName}</h1>

            <div>
                <Input />
            </div>
            <div>
                <Input />
            </div>

            <div>
                <Button />
            </div>
        </div>

    )
}

export default Login;
 */

// 03_June

import Input from '../common/Input';
import Button from '../common/Button'
import { useState } from 'react';


function Login() {
    var componentName = "Login";
   // var [value, function] = useState("");
    var [username, setUsername] = useState("abc");
   var [password, setPassword] = useState("******");

   function handleUserChange(event){
    console.log(event.target.value);
    var value = event.target.value;
    setUsername(value);
   }

   function handlePasswordChange(event){
    console.log(event.target.value);
    var value = event.target.value;
    setPassword(value);
   }

    return (
        <>
        <div style={{textAlign: "center"}}>
            <h1>{componentName}</h1>

            <div style={{padding: "20px"}}>
                <input
                 onChange={ function(event) { handleUserChange(event) } }
                 type='text'
                 placeholder='enter username' />
            </div>

            <div style={{padding: "10px"}}>
            <input
            onChange={ function(event) { handlePasswordChange(event)} } 
             type='password' 
             placeholder='enter password' />
                
            </div>

            <div style={{padding: "20px"}}>
                <button>Submit</button>
            </div>
        </div>
        <div>
            <h1> Username : { username } </h1>
            <h1> Password : { password } </h1>
        </div>
        </>
    )
}

export default Login;


/* 
// display after Submit => todo
import Input from '../common/Input';
import Button from '../common/Button'
import { useState } from 'react';


function Login() {
    var componentName = "Login";
   // var [value, function] = useState("");
    var [username, setUsername] = useState("");
   var [password, setPassword] = useState("");

   function handleUserChange(event){
    console.log(event.target.value);
    var value = event.target.value;
    setUsername(value);
   }

   function handlePasswordChange(event){
    console.log(event.target.value);
    var value = event.target.value;
    setPassword(value);
   }

   function handleSubmit(event){

   }

    return (
        <>
        <div style={{textAlign: "center"}}>
            <form onSubmit = {handleSubmit}>
            <h1>{componentName}</h1>

            <div style={{padding: "20px"}}>
                <input
                value={username}
                 onChange={ function(event) { setUsername(event.target.value) } }
                 type='text'
                 placeholder='enter username' />
            </div>

            <div style={{padding: "10px"}}>
            <input
            value={password}
            onChange={ function(event) { setPassword(event.target.value)} } 
             type='password' 
             placeholder='enter password' />
                
            </div>

            <div style={{padding: "20px"}}>
                <button>Submit</button>
            </div>
            <div>
            <h1> Username : { username } </h1>
            <h1> Password : { password } </h1>
            </div>
            </form>
        </div>
        </>
    )
}

export default Login;
 */