import React from 'react'

class DisplayNames extends React.Component{
    constructor(){
        super()    // need to use - allows you to take things from previous class and bring them down into this one 
        this.state={  // state doesnt work without 'super'
            names: [],
            name: ''

        }
    }

    handleInputUpdate = (e) => {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    handleButtonClick = (e) => {
        const namesArr = this.state.names.slice()
        namesArr.push(this.state.name)
        this.setState({
            names: namesArr,
            name: ''
        })
    }

    render(){
    const displayName = this.state.names.map((name, index) =>{
      return <h1 key={index}>{name}</h1>
    })
      console.log(this.state)

        return(
            <div>
                <input onChange={this.handleInputUpdate} type ="text" value={this.state.name}/> 
                <button onClick={this.handleButtonClick}> Add Name </button>
                {displayName}
            </div>
        )
    }
}

export default DisplayNames