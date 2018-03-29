import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import Event from './Event.jsx'

        class UpcomingEvents extends React.Component {
            constructor(props) {
                super(props)
                this.state = {events: [],
                              exception: false,
                              collapsed: true}
            }

            componentDidMount() {
                fetchJsonp(this.props.uri + this.props.callback,
                        {jsonpCallbackFunction: this.props.callback})
                        .then(response => response.json())
                        .then((data) => this.setState({events: data.data, exception: false}))
                        .catch(this.setState({exception: true}))
                
                this.toggle = this.toggle.bind(this);
            }
            
            toggle() {
                let collapsed = this.state.collapsed
                this.setState({collapsed: !collapsed})
            }

            render() {
                let exceptionExists = this.state.exception
                let entriesExist = this.state.events.length > 0
                const eventList = entriesExist ?
                        <div>
                            <ul className="event-list">
                                <Event key={this.state.events[0].id} event={this.state.events[0]}/>
                                {
                                this.state.events.filter(() => !this.state.collapsed)
                                                 .slice(1, 5)
                                                 .map((event) => <Event key={event.id} event={event}/>)}
                            </ul>
                            <a href="#/" onClick={this.toggle}>{this.state.collapsed ? 'Mehr sehen' : 'Weniger sehen'}</a>
                        </div>
                        :
                        (exceptionExists === true ?
                        <div>
                            <ul className="event-list">
                            <li>⚡️ Verbindung zu <a href="https://www.meetup.com/JUG-Mainz/">Meetup</a> konnte nicht aufgebaut werden ⚡️</li>
                            </ul>
                        </div>
                        :
                        <div>
                            <ul className="event-list">
                                <li>Keine ausstehenden Events - wir sind dabei, das zu ändern 🙂</li>
                            </ul>
                        </div>)

                return eventList
            }
        }

        export default UpcomingEvents