import React, { Component } from 'react';
import { Form, FormControl, Button, Panel } from 'react-bootstrap';

import Clock from './Clock';
import Stopwatch from './Stopwatch';

import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deadLine: 'October 30, 2019',
            time: '10:00',
            newDeadLine: '',
            newtime: '',
        }
    }

    changedDeadLine () {
        this.setState ( {deadLine: this.state.newDeadLine} );
    }

    setStopwatch () {
        this.setState( {time: this.state.newtime} );
    }

    render () { 
        return (
            <div>
                <Panel>
                    <Panel.Heading>Countdown Champ</Panel.Heading>
                    <Panel.Body>
                        <div className="App">
                            <div className="App-title">Countdown to {new Date(this.state.deadLine).toDateString()}</div>
                            <Clock deadLine={this.state.deadLine} />
                            <Form
                                inline
                                className="Deadline-input">
                                <FormControl
                                    type="date"
                                    placeholder="new date"
                                    onChange={event => this.setState({ newDeadLine: event.target.value })} />
                                <Button onClick={() => this.changedDeadLine()}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>
                        Stopwatch
                    </Panel.Heading>
                    <Panel.Body>
                        <div className="App">
                            <div className="App-title">Time set: {this.state.time}</div>
                            <div>
                                Time left
                                <Stopwatch time={this.state.time} />
                            </div>
                            <Form
                                inline
                                className="Deadline-input">
                                <FormControl
                                    type="time"
                                    placeholder="new date"
                                    onChange={event => this.setState({ newTime: event.target.value })} />
                                <Button onClick={() => this.setStopwatch()}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default App
