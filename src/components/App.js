import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            time: '0:00:00 AM'
        }
        
        this.dateFunction = this.dateFunction.bind(this)
    }

    dateFunction() {
        let date = new Date()
        let updateHour = date.getHours()
        let updateMinute = date.getMinutes()
        let updateSecond = date.getSeconds()

        let updateAMPM = updateHour < 13 ? 'AM' : 'PM'
        if(updateMinute < 10) updateMinute = `0${updateMinute}`
        if(updateSecond < 10) updateSecond = `0${updateSecond}`
        let updateTime = `${updateHour}:${updateMinute}:${updateSecond} ${updateAMPM}`

        this.setState({time: updateTime})
    }

    componentDidMount() {
        this.loadInterval = setInterval(this.dateFunction, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.loadInterval)
    }

    render() {

        return(
            <>
               <div className="Clock">
                    <h3 id="time">{this.state.time}</h3>
                </div>
            </>
        )
    }
}


export default App;
