import React from 'react'
import {render} from 'react-dom'
import TwitterTimeline from './TwitterTimeline.jsx'
import Events from './Events.jsx'
import UpcomingEvents from './UpcomingEvents.jsx'
import './css/main.scss'

const App = (props) =>
    <div className="app">
        <header>
            <img id="logo" src="./duke.png"></img>
            <div id="header-bar">
                <h1>JUG Mainz</h1>
                <h2>Eine Community für Java Entwickler in Mainz</h2>
            </div>
        </header>
        <div className="columns">
            <div className="column left"> 
    
                <div className="segment">
                    <h2>Kommende Events</h2>
                    <UpcomingEvents callback="upcoming" uri="https://api.meetup.com/JUG-Mainz/events?sig_id=229485075&status=upcoming&sig=fcd1fd3693426c1e87a34f2f07a195e21dd119a9&callback="/>
                </div>
    
                <div className="segment">
                    <h2>Über uns</h2>
                    Die JUG Mainz möchte eine Plattform für Java Entwickler im Raum Mainz sein um sich über aktuelle Themen auszutauschen. Seit unserer Gründung im Jahr 2017 organisiert unsere Community Vorträge zum Thema Java und Softwareentwickung an sich. An diesen Terminen steht nicht nur der fachliche Austausch im Vordergrund, auch auf das soziale Miteinander legen wir großen Wert.
                </div>
    
                <div className="segment">
                    <h2>Vergangene Events</h2>
                    <Events callback="past" uri="https://api.meetup.com/JUG-Mainz/events?desc=true&sig_id=229485075&status=past&sig=1df1b014b58e469fa4f046dcc20dff291aeb05c7&callback="/>
                </div>
    
            </div>
            <div className="column right">
                <div className="twitter-container">
                    <TwitterTimeline />
                </div>
            </div>
        </div>
        <footer>
        </footer>
    </div>

render(<App/>, document.getElementById('app'));