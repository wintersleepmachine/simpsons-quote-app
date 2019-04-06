import React from 'react'
import axios from 'axios'
import style from './../styles/style.css'

import SimpsonsComponent from './SimpsonsComponent'
import logo from './../simpsons-logo.gif'

class App extends React.Component {
    state = {
        simpsonsObj: {},
        loaded: false
    }

    componentDidMount(){
        setTimeout(() => {
            axios.get('https://thesimpsonsquoteapi.glitch.me/quotes').then((res) => {
            this.setState({
                simpsonsObj: res.data[0],
                loaded: true
            })

            console.log(res.data[0])
            })
        }, 1000)
        
    }

    handleClick = async () => {
        const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')  
        this.setState({
            simpsonsObj: response.data[0]
        })
        
    }

    render(){
        const {image, quote, character} = this.state.simpsonsObj
        return (
            <div className = 'ui container'>
                <img src={logo} alt="simpsons-logo" />
                {this.state.loaded ? (
                    <div>
                        <SimpsonsComponent 
                            image = {image} 
                            quote={quote}
                            character = {character}
                        />
                        <button className = 'ui primary button' onClick = {this.handleClick}>New quote</button>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
                
            </div>
        )
    }
}

export default App