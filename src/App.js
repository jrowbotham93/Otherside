import React from 'react';
import './App.css';
import axios from 'axios'

import ContentBox from './Components/ContentBox.js' //call these in the render below (these are modules) to render on html
import RandomiseButton from './Components/RandomiseButton.js'




class App extends React.Component {
  constructor(){
    super()

    this.state = { 
			Source: [],
			URL: []
		}}
  
    handleButtonClick = () => {
      this.setState({ loading: true })
        axios.get('/api/leftWing').then((res) => {
          // this.setState({
          //   Source: res.data,
          //   URL: res.data
        // })
        console.log(res)
   
      })
    }
    

  render(){
    return(
      <div className='App'>
         <section className="grid-container">
            <div className="header-container"></div>
               <div className="left-container-a">
                  <ContentBox/>

                  <RandomiseButton
                    classes={`RandomiseButton`}
                  	method={this.handleButtonClick}
                    text={`Get new news`}
                  />  
              </div>
          <div className="right-container-a">
              <ContentBox/>
              <RandomiseButton/>  
            </div>
          <div className="footer-container"></div>
      </section>
  </div>
    )}
  }
  
    


export default App
