import React, {  useState } from "react";



const Signup=()=>{
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const[valid,setValid]=useState(true);
    const[pvalid,setPvalid]=useState(true);
    let[email,setEmail]=useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
 
function handleSignup(e){
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            setPvalid(false);
            return;
          }
          else{
            setPvalid(true);
          }
          if (emailRegex.test(email)) {
           setValid(true);
            console.log("Email format is correct:", email);
         
          } else {
            setValid(false);
            console.log("Email format is incorrect:", email);
            
           
            
          }





}

return(

    <div id="main">
      
        <form onSubmit={handleSignup}>
            <input  id="mail"type="text" placeholder="enter email"  onChange={(e) => setEmail(e.target.value)}  style={{ borderColor: valid ? 'green' : 'red' }} />
            {!valid&&<p id="emailcheck">Invalid Email </p>}
            <input type="password" placeholder="Enter Password"     onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm Password"  onChange={(e) => setConfirmPassword(e.target.value)  }  style={{ borderColor: pvalid ? 'green' : 'red' }}/>
            {!pvalid&&<p id="emailcheck">Password Does not Match!!! </p>}
            <button type="submit" >Submit</button>
            
            </form>
        
    
    </div>
)


}

export default Signup