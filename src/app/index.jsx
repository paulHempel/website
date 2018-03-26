import React from 'react'
import {render} from 'react-dom'
import TwitterTimeline from './TwitterTimeline.jsx'
import Events from './Events.jsx'
import './css/main.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {mode: 'bright'}
    }

    componentDidMount() {

    }

    toggleMode() {
        // Not yet working
        if(this.getState().mode == 'dark') {
            this.setState({mode: 'bright'})
            console.log('Setting Body to Bright');
        } else {
            this.setState({mode: 'bright'})
            console.log('Setting Body to Dark');
        }
        
    }

    render() {
        return (
                <div className="app">
                    <header>
                        <h1>JUG Mainz</h1>
                    </header>
                    <div className="columns">
                        <div className="column left"> 
                
                            <div className="segment">
                                <h2>Kommende Events</h2>
                                <Events callback="upcoming" uri="https://api.meetup.com/JUG-Mainz/events?sig_id=229485075&status=upcoming&sig=fcd1fd3693426c1e87a34f2f07a195e21dd119a9&callback="/>
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
                </div>);
    }

}

render(<App/>, document.getElementById('app'));