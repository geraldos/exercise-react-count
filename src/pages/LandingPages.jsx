import React, { Component } from 'react'
import Button from '../components/button/Button'

import './LandingPages.css'

class LandingPages extends Component {
    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        if (this.state.count < 1) {
            alert('Maaf,Angka tidak boleh negatif')
        } else {
            this.setState({ count: this.state.count - 1})
        }
    }

    resetCount = () => {
        this.setState({
            count: this.state.count = 0
        })
    }

    render() {
        let {count} = this.state

        return(
            <div>
                <div className='count'>
                    <h1>Count:</h1>
                    <h2>{count}</h2>
                </div>

                <div className='buttons'>
                    <Button title={'+'} action={this.incrementCount} />
                    <Button title={'-'} action={this.decrementCount} />
                    <Button title={'reset'} action={this.resetCount} />
                </div>
            </div>
        )
    }
}

export default LandingPages
