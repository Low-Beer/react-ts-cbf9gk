import React from 'react';

// app or component wide state
const AuthContext = React.createContext(
    // object that also contains components
    {isLoggedIn: false}
); 



export default AuthContext;





