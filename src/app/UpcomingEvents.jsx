import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import Event from './Event.jsx'

        class UpcomingEvents extends React.Component {
            constructor(props) {
                super(props)
                this.state = {events: [],
                              collapsed: true}
            }

            componentDidMount() {
                fetchJsonp(this.props.uri + this.props.callback,
                        {jsonpCallbackFunction: this.props.callback})
                        .then(response => response.json())
                        .then((data) => this.setState({events: data.data}))
                
                this.toggle = this.toggle.bind(this);
            }
            
            toggle() {
                let collapsed = this.state.collapsed
                this.setState({collapsed: !collapsed})
            }

            render() {
                let entriesExist = this.state.events.length > 0;
                const eventList = entriesExist ?
                        <div>
                            <a href="#" onClick={this.toggle}>{this.state.collapsed ? 'Mehr sehen' : 'Weniger sehen'}</a>
                            <ul className="event-list">
                                <Event key={this.state.events[0].id} event={this.state.events[0]}/>
                                {
                                this.state.events.filter(() => !this.state.collapsed)
                                                 .slice(1, 5)
                                                 .map((event) => <Event key={event.id} event={event}/>)}
                            </ul>
                        </div>
                        :
                        <div>
                            <ul className="event-list">
                                <li>Keine ausstehenden Events - wir sind dabei, das zu ändern 🙂</li>
                            </ul>
                        </div>

                return eventList
            }
        }

        export default UpcomingEvents