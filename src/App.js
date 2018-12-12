import React from 'react';
import './App.css';
import axios from 'axios'

import ContentBox from './Components/ContentBox.js' //call these in the render below (these are modules) to render on html
import RandomiseButton from './Components/RandomiseButton.js'




class App extends React.Component {

    state = { 
      leftWing: []
		}
  
    handleButtonClick = () => {
      // this.setState({ loading: true })
        axios.get('/api/leftWing').then((res) => {
          this.setState({ leftWing: res.data })
          // console.log(this.state.leftWing)
                })

            }
    
  render(){
    //"pancakes" is the name of each individual object, 
    //inside the "leftWing" array (which is an array of objects)



    // (math.floor)math.random -1 (in order to call a random topix)


  const display = this.state.leftWing.map((pancakes, index)=>{
    console.log(`this got called`)
    return <p key={index}>{pancakes.Source} <br /> {pancakes.URL}</p>   //
  }) 
    return(
      <div className='App'>
        <section className="grid-container">
          <div className="header-container"></div>
            <div className="left-container-a">
              

                {/* <RandomiseButton
                classes={`RandomiseButton`}
                method={this.handleButtonClick}
                text={`Get new news`}
                />  */}
                <div>
                  <button onClick={this.handleButtonClick}>this is another button</button>
                  {this.state.leftWing ? display : "something"}
                </div> 
              
              </div>
          
              <div className="right-container-a">
              <ContentBox/>
              <RandomiseButton/>  
              </div>
            <div className="footer-container">
          </div>
        </section>
      </div>
    )}
  }
  

export default App




//  CREATE COMPONENT FOR THE NEWS. LIKE BRYANS FRIENDS LIST I TIHNK