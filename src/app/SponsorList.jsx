import React from 'react';

const SponsorPanel = ({sponsor}) =>
    <li className="sponsor-panel">
        <a href={sponsor.web}><img alt={sponsor.name} src={"img/" + sponsor.img} width="167"/></a>
    </li>


class SponsorList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {companies: []}
    }

    componentDidMount() {
        let companyList = []
        companyList.push({
            id: 'ilume',
            img: 'ilume.jpg',
            name: 'ilum:e informatik ag',
            web: 'http://www.ilume.de'
        })

        companyList.push({
            id: 'triona',
            img: 'triona.png',
            name: 'Triona GmbH',
            web: 'http://www.triona.de'
        })

        companyList.push({
            id: 'qaware',
            img: 'qaware.svg',
            name: 'QAWare',
            web: 'http://www.qaware.de'
        })

        this.shuffleArray(companyList)
        this.setState({companies: companyList})
    }

    // We want the sort order of the sponsors to be random
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    render() {
        const markup =
                <div class="sponsors">
                    <ul className="sponsor-list">
                        {this.state.companies.map((sponsor) => <SponsorPanel key={sponsor.id} sponsor={sponsor} />)}
                    </ul>
                    <div>
                        Wir bedanken uns bei unseren Sponsoren für die Hilfe bei der Organisation, die Bereitstellung von Räumen und die Verpflegung bei unseren Treffen!
                    </div>
                </div>

        return markup
    }
}

export default SponsorList
