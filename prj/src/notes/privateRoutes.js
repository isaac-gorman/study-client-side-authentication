// Follow Along Objective:
// - Learn how 2 layerd route protection works

// Overview:
// - Using React Router Components I will build a custom <ReactRouter/> component to protect the route

// Step 1) I will add couple public routes and links

function FakeComponent() {
  return (
    <div>
      <ul>
        <li>
          {/* Step 1 */}
          <Link to="/public">Public Page</Link>
        </li>

        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      {/* Step 2 */}
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  );
}

// Q: What is significant about the links above?
// - The protected page is proteced, and will route someone to the login page if they are not Authenticated yet

// Step 2) Add a <PrivateRoute/> route:
// Q: What are the requiremnts for a private route component?
// - 1 Has the same API as the <Route/>
// - Renders a <Route/> and passes all the props through it
// - Checks if the user is authenticated, and if they are, the route renders the component prop. If the user is not authenticated it send the user to "/login"

// Requierment 1: Has the same API as <Route/>
const PrivateRoute = ({ component: Component, ...rest }) => (
  // Requierment 2: It renders <Route/> and passes all the props through it
  <Route
    {...rest}
    // Requierment 3: Check if the user is authenticated and if they are the route renders the component prop. If the user is not authenticated it sends the user to the "/login" path
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
  // Here we are passing all the props passed into <PrivateRoute/> in the "FakeComponent" component
);

// This syntax enables the code to have a component that accepts a component Prop, just like <Route/> does and take any other prop that gets passed into it by spreading it in

// Q: What pattern is this code utalizing?
//  - Above I am using the "render props" pattern

// Q: What is significant about the <Redirect/> component?
// - The <Redirect/> component is from the react-router-dom library and does exactly what the name implies... it redirects the user to the "/login" path if they are not athenticated

// Q: At this point in development, what would occur if the user where to click on PrivateRoute component?
// - I would be taken (Redirected) to the login page if I where to try to access the private route

// Q: Now what?
// - Time to think through the login page now
// - The login page will contain a form that takes in the user's credentials
// - Then takes those credientials to call to the server with those endpoints using a POST request
// - Then if the credentials check out the server will send back a JWT to authentict the user, this sending them to the ProtecedComponent they wanted to access earlier

// Authentication will be written simillar to this:

import React, { useState } from "react";
import { axiosWithAuth } from "./path/axiosWithAuth.js";

const Login = (props) => {
  const [credentials, setCredentials] = useState({});

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("login/endpoint", credentials)
      .then((res) => {
        localStorage.setItem("token", res, data.token);
        this.props.history.push("/");
      });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={this.login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={this.handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
