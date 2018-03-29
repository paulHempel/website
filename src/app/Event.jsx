import React from 'react'
import fetchJsonp from 'fetch-jsonp'

    class Event extends React.Component {

    constructor(props) {
        super(props)
        this.state = {collapsed: true, event: props.event}
        this.toggle = this.toggle.bind(this)
    }
    
    toggle() {
        console.log('Toggle')
        let oldState = this.state.collapsed
        this.setState({collapsed: !oldState})
    }

    render() {
        const collapsed = this.state.collapsed
        const event = this.state.event
        const markup =
                <li className={"single-event " + (event.status == 'past' ? 'past-event' : 'upcoming-event')}>
                    <h3><a href={event.link}>{event.name}</a></h3>
                    <p className="venue">{event.venue.name}</p>
                    <p className="date_time">{new Date(event.local_date).toLocaleDateString('de-DE', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) + ', ' + event.local_time + ' Uhr'}</p>
                    <a href="#/" onClick={this.toggle}>{collapsed ? 'Details' : 'Weniger'}</a>
                    {collapsed ? '' : <p dangerouslySetInnerHTML={{ __html: event.description}}/>}
                </li>

        return markup
    }
}

export default Event