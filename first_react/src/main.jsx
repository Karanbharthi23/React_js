
import { createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const createRoots = React.createElement(
          'a',
          {href: "https://mail.google.com/mail/u/0/#inbox",target : "blank"},
          'click here'
)
const anotherElem = (
  <a href = "https://mail.google.com/mail/u/0/#inbox" target="blank">
  click now !!!!! </a>
)
createRoot(document.getElementById('root')).render(

  
 anotherElem 
)
