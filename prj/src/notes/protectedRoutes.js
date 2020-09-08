// Learning Objective:
// - Understand how to build a protected route using an authenticated token and Redirect

// Q: What will most web apps contain?
// - Most of the web apps I interact with will contain some sort of "authentication system"
// - When building your app you want to prevent anyone from accessing private routes unsless they are authenticated with a token from our server

// Q: What are "protected routes"?
// - Protected routes are routes that will only render upon authentication of a token, no token no route.

// Q: How does a user usally obatian a token from the server?
// - 1) Normally the client will make a login request, send the server a user's username and password.
// - 2) Then the server will take that data and check it against its exsiting database for a match. If the credentials match, then the server will send the user a token.
// - 3) Once the user has this token we can add 2 layers of protection to our app
// - - a. One layer will use protected routes
// - - b. The other layer will send an authentication header with the API calls (just like I learned in the last portion)
