// Learning objective:
// - Learn how to handle authentication with tokens in a react app

// Q: Out in the wild what do a lot of apps require?
// - In the real world, a lot of services require the client like React apps for example are authenticated to use them.
// - The server running these services can usually issue a JSON Web Token (JWT) as the authenticated token, in exhcanged for correct login credientials.
// - But this surfaces another question. How do we handle this JWT from then on out with our App?

// Q: What is significant about the memory of servers in terms of our interaction with them?
// - Servers forget about us after we finsh our interaction with them.
// - Usually clients tack (add) a reminder to every request, and this commonly done automatically with cookies.
// - Cookies are just small pieces of data generated by the browser to store state info.

// Q: What do modern web servers use when dealing with JSON use?
// - Instead of cookies, most modern servers will just use JWT's.
// - These JWT's issued by the server are strings of cryptic text which can be stored on the client side by using local storage of session storage.
// - But the server can easily tell the server that it issued a token, in fact it can also read the token and make certian decisions for data transfer based on the client's permission

// Q: What is usually the payload of a common login endpoint?
// - Usually there is a login endpoint that exist on the server, which takes a payload of username, and password
// - If the credntails are known then the server resonds with a new JWT
// _ After the server responds with this new JWT, its up to the app to add an " Authorazation: <token/> "
