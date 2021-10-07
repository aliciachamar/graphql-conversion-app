import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import ApolloProvider from "./ApolloProvider";


// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  ApolloProvider,
  document.getElementById('root')
);


