import React, {useState} from "react"


export default function SignIn(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handleSubmit = (e) => {
        email.preventDefault();
        console.log(email);
   
    }


    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
           
           <div>
             <input type="text" placeholder="Name" className="Name"/>
           </div>
           <div className="second-input">
             <input type="text" placeholder="youremail@email.com" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
               
            </form>
        </div>
        //<button>no have an account?</button> !not registering users in MVP


    )
}

