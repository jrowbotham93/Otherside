import React from 'react';
import './App.css';
import axios from 'axios'


// import ContentBox from './Components/ContentBox.js' //call these in the render below (these are modules) to render on html
// import RandomiseButton from './Components/RandomiseButton.js'


class App extends React.Component {

      state = { 
      articles: [],
      name: '',
      description: '',
      url: '' 
    }
  
    handleButtonClick = () => {
      axios.get(`https://newsapi.org/v2/sources?language=en&apiKey=c4690b746a5746028a1830ccf185fcce`
        ).then((res) => {
        this.setState({ articles: res.data.sources})
          console.log(res.data)
      }
      )}     

    handleGetSources = () => {
      axios.get('/api/getSource').then((res) => {
        console.log(res.data)
      })
    }
    handleNameUpdate = (evt) => {
      this.setState({
        name: evt.target.value
      })
    }
    handleDescriptionUpdate = (evt) => {
      this.setState({
        description: evt.target.value
      })
    }
    handleUrlUpdate = (evt) => {
      this.setState({
        url: evt.target.value
      })
    }
    handlePostSource = (evt) => {
      evt.preventDefault()
      axios.post('/api/addSource', {
        name: this.state.name,
        description: this.state.description,
        url: this.state.url
      }).then((res) => {
        console.log(res)
      })}

             
  render(){
    const display = this.state.articles.map((prop, index)=>{
       return <p key={index}>{prop.name}<br></br>{prop.description} <br></br>{prop.url}</p>      
     }) 
    return(
      <div className='App'>
        <section className="grid-container">
          <div className="header-container"></div>

          <div className="left-container-a">
            <button className="button-leftWing" onClick={this.handleButtonClick}>Get Sources</button>
            <div className="content-leftWing">
              <ul>{this.state.articles ? display: "nothing"}</ul>

            </div> 
          </div>
          <div className="right-container-a">  
              <form onSubmit={(e) => this.handlePostSource(e)}>
                <input
                  type='text'
                  placeholder='name'
                  value={this.state.name}
                  onChange={(e) => this.handleNameUpdate(e)}
                />
                <input
                  type='text'
                  placeholder='source'
                  value={this.state.description}
                  onChange={(e) => this.handleDescriptionUpdate(e)}
                />
                <input
                  type='text'
                  placeholder='url'
                  value={this.state.url}
                  onChange={(e) => this.handleUrlUpdate(e)}
                />
              <button>Add Source</button>
            </form>
          </div>   
            <div className="footer-container"></div>
        </section>
      </div>
    )}
  }
  

export default App




//  CREATE COMPONENT FOR THE NEWS. LIKE BRYANS FRIENDS LIST I TIHNK