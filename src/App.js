import React from 'react';
import './App.css';  // linking CSS style sheet
// you can put styled components in here
import ContentBox from './Components/ContentBox.js' //call these in the render below (these are modules) to render on html
import RandomiseButton from './Components/RandomiseButton.js'





class App extends React.Component {
  render() {
    return (
      <div className='App'>
         <section className="grid-container">
            <div className="header-container"></div>
               <div className="left-container-a">
                  <div className="content-box">
               <RandomiseButton />  
            </div>
         </div> 
      <div className="right-container-a">
          <div className="content-box">
             <RandomiseButton/>  
          </div>
      </div>
    <div className="footer-container"></div>
  </section>
      </div>
    )}
  }
    


export default App;
