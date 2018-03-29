import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import Event from './Event.jsx'

class Events extends React.Component {

    constructor(props) {
        super(props)
        this.state = {events: [],
            exception: false}
    }

    componentDidMount() {
        fetchJsonp(this.props.uri + this.props.callback,
                {jsonpCallbackFunction: this.props.callback})
                .then(response => response.json())
                .then((data) => this.setState({events: data.data, exception: false}))
                .catch(this.setState({exception: true}))

    }

    render() {
        const exceptionExists = this.state.exception
        const eventList =
                exceptionExists === false ?
                <ul className="event-list">
                    {this.state.events.filter((event) => event.visibility === 'public')
                                .map((event) => <Event key={event.id} event={event}></Event>)}
                </ul>
                :
                <div>
                    <ul className="event-list">
                        <li>⚡️ Verbindung zu <a href="https://www.meetup.com/JUG-Mainz/">Meetup</a> konnte nicht aufgebaut werden ⚡️</li>
                    </ul>
                </div>
        return eventList
    }
}

export default Events