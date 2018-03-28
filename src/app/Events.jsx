import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import Event from './Event.jsx'

        class Events extends React.Component {
            constructor(props) {
                super(props)
                this.state = {events: []}
            }

            componentDidMount() {
                fetchJsonp(this.props.uri + this.props.callback,
                        {jsonpCallbackFunction: this.props.callback})
                        .then(response => response.json())
                        .then((data) => this.setState({events: data.data}))

            }

            render() {
                const eventList = 
                        <ul className="event-list">
                            {this.state.events.filter((event) => event.visibility === 'public')
                                              .map((event) => <Event key={event.id} event={event}></Event>)}
                        </ul>
                return eventList
            }
        }
        
        export default Events