// import React from 'react';
// import { useLocation, useHistory } from 'react-router-dom';


// // leave the go back button but we will recreate our own footer
// // things to add: name of app, fake social media icons??

// const Footer = () => {
//   const location = useLocation();
//   const history = useHistory();
//   return (
//     <footer className="w-100 mt-auto text-dark p-4">
//       <div className="container text-center mb-5">
//         {location.pathname !== '/' && (
//           <button
//             className="btn btn-dark mb-3"
//             onClick={() => history.goBack()}
//           >
//             &larr; Go Back
//           </button>
//         )}
//         <h4>&copy; {new Date().getFullYear()} - Tech Friends</h4>
//       </div>
//     </footer>
//   );
// };

// export default Footer;