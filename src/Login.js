import React, {Component} from 'react';
import './Style.css';

class Login extends Component{
render(){
    return(
        <div className="main">
            <div className="main-first">
                <form>
                   <div className="firstWrapper">
                       <h1>Welcome back.</h1>
                   </div>
                    <div className="secondWrapper">
                        <div className="inputs">
                            <input type="text" placeholder="Your Email"/>
                            <br/>
                            <br/>
                            <input type="text" placeholder="Password"/>
                        </div>
                        <div className="check">
                                <input type="checkbox" />
                                <p>Keep me logged in</p>
                        
                            <a href="url">Forgot password?</a>
                        
                        <button>Sign in</button>
                        </div>
                        </div>
                </form>
            </div>
             
            <div className="main-second">
              <img src={require("./Bitmap.jpg")}/>
            </div>
        </div>
    );
}
}

export default Login;