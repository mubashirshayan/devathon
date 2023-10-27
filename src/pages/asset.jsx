import "../style/auth.css"
export default function Log(){
    return(
<div className="sub_heading">
  {/* <div className="mainHeading">
    <h2>Login</h2>
  </div> */}
  <div id="container">
    <div id="login_main">
      <form action="">
        <div className="signup">
          <h4>Log In</h4>
        </div>
        <div className="form_styling">
          <p>Email</p>
          <input
            type="email"
            name=""
            id="email"
            className="input"
            placeholder="Enter your Email"
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
            placeholder="Enter your password"
          />
          <p id="password-error" className="error" />
        </div>
      </form>
      <div className="button_styling">
        <button
          className="btn btn-primary signup_btn"
          id="login-btn"
          type="button"
        >
          Log In
        </button>
        <p className="para">
          Don't have an account?
          <a className="link" href="signup.html">
            Signup
          </a>
        </p>
      </div>
      {/* <div className="d-grid gap-3 col-9 mx-auto">
        <button
          className="btn facebookSignup signup_btn"
          id="facebookSignup"
          type="button"
          onclick="verify()"
        >
          <i className="bi bi-facebook" /> Login with Facebook
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