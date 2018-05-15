import React, {Component} from 'react';
import './App.css';

class Stopwatch extends Component{
    constructor (props) {
        super(props);
        this.state = {
            hours:'',
            minutes: '',
            seconds: '',
        }
    }

    componentWillMount () {
        this.getTimeUtil(this.props.time);
    }
    
    componentDidMount () {

    }


    leading0(num) {
        return (num < 10 ? '0' + num : num);
    }

    timeOut(time){
        return ( time === 0 ? true : false);
    }

    getTimeUtil (timeLeft) {
        const time = new Date(timeLeft).getTime() - new Date().getTime();
        console.log(time);
    
        if( this.timeOut(time) ) {
            alert('Time out.');
        }
    }

    render () {
        return (
            <div>
                <div className="Clock-hours">{this.leading0(this.state.hours)} Hours</div>
                <div className="Clock-minutes">{this.leading0(this.state.minutes)} Minutes</div>
                <div className="Clock-seconds">{this.leading0(this.state.seconds)} Seconds</div>
            </div>
        )
    }
}

export default Stopwatch;