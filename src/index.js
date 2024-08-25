// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// )

import React from 'react'
import ReactDOM from 'react-dom/client' // Note the change here
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')) // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
