import React from 'react'
import fetchJsonp from 'fetch-jsonp'

        const Event = ({event}) =>
            <li className={"single-event " + (event.status == 'past' ? 'past-event' : 'upcoming-event')}>
                <a href={event.link}>{event.name}</a>
                <p className="venue">{event.venue.name}</p>
                <p className="date_time">{new Date(event.local_date).toLocaleDateString('de-DE', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) + ', ' + event.local_time + ' Uhr'}</p>
            </li>

        export default Event