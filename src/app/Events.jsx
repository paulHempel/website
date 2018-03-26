import React from 'react'
import fetchJsonp from 'fetch-jsonp'

        var foo = function ( {data}) {
            console.log(data);
        };

        const Event = ({event}) =>
            <li className={"single-event " + (event.status == 'past' ? 'past-event' : 'upcoming-event')}>
                <a href={event.link}>{event.name}</a>
                <p className="venue">{event.venue.name}</p>
                <p className="date_time">{new Date(event.local_date).toLocaleDateString('de-DE', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) + ', ' + event.local_time + ' Uhr'}</p>
            </li>



        class Events extends React.Component {
            constructor(props) {
                super(props)
                this.state = {events: []}
            }

            componentDidMount() {
                fetchJsonp(this.props.uri + this.props.callback,
                        {jsonpCallbackFunction: this.props.callback})
                        .then(response => response.json())
                        .then(data => this.setState({events: data.data}))
            }

            render() {
                let entriesExist = this.state.events.length > 0;
                const eventList = entriesExist ? 
                        <ul className="event-list">
                            {this.state.events.filter((event) => event.visibility == 'public')
                                              .slice(0, 5)
                                              .map((event) => <Event key={event.id} event={event}></Event>)}
                        </ul>
                        :
                        <ul className="event-list">
                            <li>Keine ausstehenden Events - noch ein wenig Geduld</li>
                        </ul>       
                        
                return eventList
            }
        }

        export default Events