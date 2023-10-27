import "../style/auth.css"


export default function Signup(){ 
    return(
        <div className="sub_heading">
  <div className="mainHeading">
    <h2>Signup</h2>
  </div>
  <div id="container">
    <div id="main">
      <form action="">
        <div className="signup">
          <h5>Sign Up</h5>
        </div>
        <div className="form_styling">
          <p>Username</p>
          <p>
            <input
              type="text"
              name=""
              id="user-name"
              className="input"
              required=""
              placeholder="Enter your name"
            />
          </p>
        </div>
        <div className="form_styling">
          <p>Email</p>
          <input
            type="email"
            name=""
            id="email"
            className="input"
            required=""
            placeholder="Email"
          />
          <p id="email-error" className="error" />
        </div>
        <div className="form_styling">
          <p>Password</p>
          <input
            type="password"
            name=""
            id="password"
            className="input"
            placeholder="Password"
          />
          <p id="password-error" className="error" />
        </div>
        {/* <button onclick="signup()">Sign Up</button> */}
      </form>
      <div className="button_styling">
        <button
          className="btn btn-primary signup_btn"
          id="signupBtn"
          type="submit"
        >
          SignUp
        </button>
        <p className="para">
          Already have an account?
          <a className="link" href="login.html">
            Login
          </a>
        </p>
      </div>
      {/* <div class="button_styling"> */}
      {/* <div className="d-grid gap-3 col-9 mx-auto">
        <button
          className="btn facebookSignup signup_btn"
          id="facebookSignup"
          type="button"
          onclick="verify()"
        >
          <i className="bi bi-facebook" />
          Login with Facebook
        </button>
        <button
          className="btn googleSignup signup_btn"
          id="googleSignup"
          type="button"
        >
         
          <i className="bi bi-google" />
          Login with Google
        </button>
      </div> */}
    
    </div>
  </div>
</div>
    )
}