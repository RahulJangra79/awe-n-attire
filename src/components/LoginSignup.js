// import React, { useState, useEffect } from "react";
// import "./LoginSignup.css";
// import Home from "./Home";

// const LoginSignup = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setIsAuthenticated(true);
//     }
//   }, []);
  
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);
//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [signupErrors, setSignupErrors] = useState({});
//   const [signinData, setSigninData] = useState({ email: "", password: "" });
//   const [signinErrors, setSigninErrors] = useState({});

//   useEffect(() => {
//     document
//       .getElementById("container")
//       .classList.toggle("right-panel-active", isRightPanelActive);
//   }, [isRightPanelActive]);

//   const validateSignup = () => {
//     const errors = {};
//     if (!signupData.name.trim()) {
//       errors.name = "Name is required";
//     } else if (signupData.name.length < 3) {
//       errors.name = "Name must be at least 3 characters";
//     }
//     if (!signupData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
//       errors.email = "Invalid email format";
//     }
//     if (!signupData.password.trim()) {
//       errors.password = "Password is required";
//     } else if (signupData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters";
//     }
//     setSignupErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const validateSignin = () => {
//     const errors = {};
//     if (!signinData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(signinData.email)) {
//       errors.email = "Invalid email format";
//     }
//     if (!signinData.password.trim()) {
//       errors.password = "Password is required";
//     } else if (signinData.password.length < 8) {
//       errors.password = "Password must be at least 8 characters";
//     }
//     setSigninErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSignUpSubmit = (event) => {
//     event.preventDefault();
//     if (validateSignup()) {
//       localStorage.setItem("user", JSON.stringify(signupData));
//       alert("Signup successful! You can now log in.");
//       setSignupData({ name: "", email: "", password: "" });
//     }
//   };

//   const handleSignInSubmit = (event) => {
//     event.preventDefault();
//     if (validateSignin()) {
//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       if (
//         storedUser &&
//         storedUser.email === signinData.email &&
//         storedUser.password === signinData.password
//       ) {
//         alert("Login successful! Redirecting...");
//         window.location.href = "/";
//         setIsAuthenticated(true);
//       } else {
//         alert("Invalid credentials. Please try again.");
//       }
//     }
//   };

//   const handleForgotPassword = () => {
//     const email = prompt("Enter your registered email:");
//     if (email) {
//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       if (storedUser && storedUser.email === email) {
//         const newPassword = prompt("Enter your new password:");
//         if (newPassword) {
//           storedUser.password = newPassword;
//           localStorage.setItem("user", JSON.stringify(storedUser));
//           alert(
//             "Password reset successful! You can now log in with your new password."
//           );
//         }
//       } else {
//         alert("Email not found. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="login-signup-main">
//       <div className="container" id="container">
//         {/* Sign Up Form */}
//         <div className="form-container sign-up-container">
//           <form className="login-signup-form" onSubmit={handleSignUpSubmit}>
//             <h1 className="login-signup-heading">Create Account</h1>
//             <div className="social-container">
//               <a href="#" className="social login-signup-anchor">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="social login-signup-anchor">
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a href="#" className="social login-signup-anchor">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span className="login-signup-span">or use your email for registration</span>

//             <input
//               className="login-signup-input"
//               type="text"
//               name="signupName"
//               placeholder="Name"
//               value={signupData.name}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, name: e.target.value })
//               }
//             />
//             {signupErrors.name && (
//               <p className="error-text">{signupErrors.name}</p>
//             )}
//             <input
//               className="login-signup-input"
//               type="email"
//               name="signupEmail"
//               placeholder="Email"
//               value={signupData.email}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, email: e.target.value })
//               }
//             />
//             {signupErrors.email && (
//               <p className="error-text">{signupErrors.email}</p>
//             )}
//             <input
//               className="login-signup-input"
//               type="password"
//               name="signupPassword"
//               placeholder="Password"
//               value={signupData.password}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, password: e.target.value })
//               }
//             />
//             {signupErrors.password && (
//               <p className="error-text">{signupErrors.password}</p>
//             )}
//             <button className="login-signup-button" type="submit">
//               Sign Up
//             </button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div className="form-container sign-in-container">
//           <form className="login-signup-form" onSubmit={handleSignInSubmit}>
//             <h1 className="login-signup-heading">Sign in</h1>
//             <div className="social-container">
//               <a href="#" className="social login-signup-anchor">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="social login-signup-anchor">
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a href="#" className="social login-signup-anchor">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span className="login-signup-span">or use your account</span>

//             <input
//               className="login-signup-input"
//               type="email"
//               name="loginEmail"
//               placeholder="Email"
//               value={signinData.email}
//               onChange={(e) =>
//                 setSigninData({ ...signinData, email: e.target.value })
//               }
//             />
//             {signinErrors.email && (
//               <p className="error-text">{signinErrors.email}</p>
//             )}
//             <input
//               className="login-signup-input"
//               type="password"
//               name="loginPassword"
//               placeholder="Password"
//               value={signinData.password}
//               onChange={(e) =>
//                 setSigninData({ ...signinData, password: e.target.value })
//               }
//             />
//             {signinErrors.password && (
//               <p className="error-text">{signinErrors.password}</p>
//             )}
//             <a
//               className="login-signup-anchor"
//               href="#"
//               onClick={handleForgotPassword}
//             >
//               Forgot your password?
//             </a>
//             <button className="login-signup-button" type="submit">
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Overlay Panel */}
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1 className="login-signup-heading">Welcome Back!</h1>
//               <p className="login-signup-paragraph">
//                 To keep connected with us, please log in with your personal info
//               </p>
//               <button
//                 className="ghost login-signup-button"
//                 onClick={() => setIsRightPanelActive(false)}
//               >
//                 Sign In
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1 className="login-signup-heading">Hello, Friend!</h1>
//               <p className="login-signup-paragraph">
//                 Enter your personal details and start your journey with us
//               </p>
//               <button
//                 className="ghost login-signup-button"
//                 onClick={() => setIsRightPanelActive(true)}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
































import React, { useState, useEffect } from "react";
import "./LoginSignup.css";
import Home from "./Home";
import Swal from "sweetalert2";

const LoginSignup = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [signupErrors, setSignupErrors] = useState({});
  const [signinData, setSigninData] = useState({ email: "", password: "" });
  const [signinErrors, setSigninErrors] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    document.getElementById("container").classList.toggle("right-panel-active", isRightPanelActive);
  }, [isRightPanelActive]);

  const validateSignup = () => {
    const errors = {};
    if (!signupData.name.trim()) errors.name = "Name is required";
    if (!signupData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(signupData.email)) errors.email = "Invalid email format";
    if (!signupData.password.trim()) errors.password = "Password is required";
    if (signupData.password.length < 8) errors.password = "Password must be at least 8 characters";
    setSignupErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateSignin = () => {
    const errors = {};
    if (!signinData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(signinData.email)) errors.email = "Invalid email format";
    if (!signinData.password.trim()) errors.password = "Password is required";
    if (signinData.password.length < 8) errors.password = "Password must be at least 8 characters";
    setSigninErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    if (validateSignup()) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupData),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Signup successful! Please log in.");
          setSignupData({ name: "", email: "", password: "" });
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Error signing up. Try again.");
      }
    }
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    if (validateSignin()) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signinData),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user)); // Store user info
  
          // Dispatch event to update Header component
          window.dispatchEvent(new Event("storage"));
  
          // alert(`Welcome, ${data.user.name}!`);
          Swal.fire({
                icon: "success",
                title: "Welcome , " + data.user.name + "!",
              });
          setIsAuthenticated(true);
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Error logging in. Try again.");
      }
    }
  };
  
  
  
  const handleForgotPassword = async () => {
    const email = prompt("Enter your registered email:");
    if (email) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/reset-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Error processing request. Try again.");
      }
    }
  };

  return isAuthenticated ? (
    <Home/>
  ) : (
    <div className="login-signup-main">
      <div className="container" id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form className="login-signup-form" onSubmit={handleSignUpSubmit}>
            <h1 className="login-signup-heading">Create Account</h1>
            <input
              className="login-signup-input"
              type="text"
              placeholder="Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />
            {signupErrors.name && <p className="error-text">{signupErrors.name}</p>}
            <input
              className="login-signup-input"
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            {signupErrors.email && <p className="error-text">{signupErrors.email}</p>}
            <input
              className="login-signup-input"
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            {signupErrors.password && <p className="error-text">{signupErrors.password}</p>}
            <button className="login-signup-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form className="login-signup-form" onSubmit={handleSignInSubmit}>
            <h1 className="login-signup-heading">Sign in</h1>
            <input
              className="login-signup-input"
              type="email"
              placeholder="Email"
              value={signinData.email}
              onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
            />
            {signinErrors.email && <p className="error-text">{signinErrors.email}</p>}
            <input
              className="login-signup-input"
              type="password"
              placeholder="Password"
              value={signinData.password}
              onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
            />
            {signinErrors.password && <p className="error-text">{signinErrors.password}</p>}
            <a className="login-signup-anchor" href="#" onClick={handleForgotPassword}>
              Forgot your password?
            </a>
            <button className="login-signup-button" type="submit">
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay Panel */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login-signup-heading">Welcome Back!</h1>
              <button className="ghost login-signup-button" onClick={() => setIsRightPanelActive(false)}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login-signup-heading">Hello, Friend!</h1>
              <button className="ghost login-signup-button" onClick={() => setIsRightPanelActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
