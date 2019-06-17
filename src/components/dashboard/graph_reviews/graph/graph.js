import React, { Component } from 'react';
import './graph.css';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import axios from 'axios';

class Graph extends Component {
    constructor(props){
        super(props);

        this.state = {
            pastTwelveMonths: [],
            twoYearHistory: [],
            all0: [],
            all1: [],
            all2: [],
            all3: [],
            all4: [],
            all5: [],
            all6: [],
            all7: [],
            all8: [],
            all9: [],
            all10: [],
            all11: [],
            interacted0: [],
            interacted1: [],
            interacted2: [],
            interacted3: [],
            interacted4: [],
            interacted5: [],
            interacted6: [],
            interacted7: [],
            interacted8: [],
            interacted9: [],
            interacted10: [],
            interacted11: [],
            up0: [],
            up1: [],
            up2: [],
            up3: [],
            up4: [],
            up5: [],
            up6: [],
            up7: [],
            up8: [],
            up9: [],
            up10: [],
            up11: [],
            down0: [],
            down1: [],
            down2: [],
            down3: [],
            down4: [],
            down5: [],
            down6: [],
            down7: [],
            down8: [],
            down9: [],
            down10: [],
            down11: [],
            opened0: [],
            opened1: [],
            opened2: [],
            opened3: [],
            opened4: [],
            opened5: [],
            opened6: [],
            opened7: [],
            opened8: [],
            opened9: [],
            opened10: [],
            opened11: []
        }
    }

    async componentWillMount(){
        const monthNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const newDate = new Date();
        const currentMonth = newDate.getMonth() + 1;
        let thisYear = monthNums.splice(0,currentMonth)
        const currentMonthNumbers = [...monthNums, ...thisYear]
        console.log(currentMonthNumbers)
    
        const lastTwelveMonths = currentMonthNumbers.map( (e, i) => {
            switch(e){
                case 1:
                    return 'January'
                case 2:
                    return 'February'
                case 3: 
                    return 'March'
                case 4:
                    return 'April'
                case 5:
                    return 'May'
                case 6:
                    return 'June'
                case 7:
                    return 'July'
                case 8:
                    return 'August'
                case 9:
                    return 'September'
                case 10:
                    return 'October'
                case 11:
                    return 'November'
                case 12:
                    return 'December'
                default:
                    return e
            }
        }).map( (e, i) => {
            if (i < 12 - currentMonth) {
                return {
                    month: e,
                    year: newDate.getFullYear() - 1
                }
            } else {
                return {
                    month: e,
                    year: newDate.getFullYear()
                }
            }
        })
        await this.setState({
            pastTwelveMonths: lastTwelveMonths
        })
        
        await axios.post('/api/sentmessages/getall', { currentYear: this.state.pastTwelveMonths[11].year })
        .then( results => {
            this.setState({
                twoYearHistory: results.data
            })
        })
        const yearOrder = this.state.pastTwelveMonths.map( (e, i) => {
            return e.year
        })

        for (let i = 0; i < 12; i++) {
            this.state.twoYearHistory.map( e => {
                if (e.month === currentMonthNumbers[i] && e.year === yearOrder[i] && e.interaction_status === 'Unopened') {
                    const toPushAll = `all${i}`
                    this.setState({
                        [toPushAll]: [...this.state[toPushAll], e]
                    })
                } else if (e.month === currentMonthNumbers[i] && e.year === yearOrder[i] && e.interaction_status === 'Opened') {
                    const toPushInteraction = `interacted${i}`
                    const toPush = `opened${i}`
                    const toPushAll = `all${i}`
                    this.setState({
                        [toPushInteraction]: [...this.state[toPushInteraction], e],
                        [toPush]: [...this.state[toPush], e],
                        [toPushAll]: [...this.state[toPushAll], e]
                    })
                } else if (e.month === currentMonthNumbers[i] && e.year === yearOrder[i] && e.interaction_status === 'Thumbs up') {
                    const toPush = `up${i}`
                    const toPushAll = `all${i}`
                    this.setState({
                        [toPush]: [...this.state[toPush], e],
                        [toPushAll]: [...this.state[toPushAll], e]
                    })
                } else if (e.month === currentMonthNumbers[i] && e.year === yearOrder[i] && e.interaction_status === 'Thumbs down') {
                    const toPush = `down${i}`
                    const toPushAll = `all${i}`
                    this.setState({
                        [toPush]: [...this.state[toPush], e],
                        [toPushAll]: [...this.state[toPushAll], e]
                    })
                }
            })
        }


        
    }

    render(){
        const { pastTwelveMonths } = this.state;
        const data = [
            {'name': 'All Messages Sent','color': 'lightblue', 'data': {
                [`${pastTwelveMonths[0].month}`]: this.state.all0.length,
                [`${pastTwelveMonths[1].month}`]: this.state.all1.length,
                [`${pastTwelveMonths[2].month}`]: this.state.all2.length,
                [`${pastTwelveMonths[3].month}`]: this.state.all3.length,
                [`${pastTwelveMonths[4].month}`]: this.state.all4.length,
                [`${pastTwelveMonths[5].month}`]: this.state.all5.length,
                [`${pastTwelveMonths[6].month}`]: this.state.all6.length,
                [`${pastTwelveMonths[7].month}`]: this.state.all7.length,
                [`${pastTwelveMonths[8].month}`]: this.state.all8.length,
                [`${pastTwelveMonths[9].month}`]: this.state.all9.length,
                [`${pastTwelveMonths[10].month}`]: this.state.all10.length,
                [`${pastTwelveMonths[11].month}`]: this.state.all11.length
            }},
            {'name': 'All Links Clicked','color': 'orange', 'data': {
                [`${pastTwelveMonths[0].month}`]: this.state.interacted0.length,
                [`${pastTwelveMonths[1].month}`]: this.state.interacted1.length,
                [`${pastTwelveMonths[2].month}`]: this.state.interacted2.length,
                [`${pastTwelveMonths[3].month}`]: this.state.interacted3.length,
                [`${pastTwelveMonths[4].month}`]: this.state.interacted4.length,
                [`${pastTwelveMonths[5].month}`]: this.state.interacted5.length,
                [`${pastTwelveMonths[6].month}`]: this.state.interacted6.length,
                [`${pastTwelveMonths[7].month}`]: this.state.interacted7.length,
                [`${pastTwelveMonths[8].month}`]: this.state.interacted8.length,
                [`${pastTwelveMonths[9].month}`]: this.state.interacted9.length,
                [`${pastTwelveMonths[10].month}`]: this.state.interacted10.length,
                [`${pastTwelveMonths[11].month}`]: this.state.interacted11.length
            }},
            {'name': 'Thumbs Up','color': 'lightGreen', 'data': {
                [`${pastTwelveMonths[0].month}`]: this.state.up0.length,
                [`${pastTwelveMonths[1].month}`]: this.state.up1.length,
                [`${pastTwelveMonths[2].month}`]: this.state.up2.length,
                [`${pastTwelveMonths[3].month}`]: this.state.up3.length,
                [`${pastTwelveMonths[4].month}`]: this.state.up4.length,
                [`${pastTwelveMonths[5].month}`]: this.state.up5.length,
                [`${pastTwelveMonths[6].month}`]: this.state.up6.length,
                [`${pastTwelveMonths[7].month}`]: this.state.up7.length,
                [`${pastTwelveMonths[8].month}`]: this.state.up8.length,
                [`${pastTwelveMonths[9].month}`]: this.state.up9.length,
                [`${pastTwelveMonths[10].month}`]: this.state.up10.length,
                [`${pastTwelveMonths[11].month}`]: this.state.up11.length
            }},
            {'name': 'Thumbs Down','color': 'red', 'data': {
                [`${pastTwelveMonths[0].month}`]: this.state.down0.length,
                [`${pastTwelveMonths[1].month}`]: this.state.down1.length,
                [`${pastTwelveMonths[2].month}`]: this.state.down2.length,
                [`${pastTwelveMonths[3].month}`]: this.state.down3.length,
                [`${pastTwelveMonths[4].month}`]: this.state.down4.length,
                [`${pastTwelveMonths[5].month}`]: this.state.down5.length,
                [`${pastTwelveMonths[6].month}`]: this.state.down6.length,
                [`${pastTwelveMonths[7].month}`]: this.state.down7.length,
                [`${pastTwelveMonths[8].month}`]: this.state.down8.length,
                [`${pastTwelveMonths[9].month}`]: this.state.down9.length,
                [`${pastTwelveMonths[10].month}`]: this.state.down10.length,
                [`${pastTwelveMonths[11].month}`]: this.state.down11.length
            }},
            {'name': 'Link Opened, No Feedback','color': 'gray', 'data': {
                [`${pastTwelveMonths[0].month}`]: this.state.opened0.length,
                [`${pastTwelveMonths[1].month}`]: this.state.opened1.length,
                [`${pastTwelveMonths[2].month}`]: this.state.opened2.length,
                [`${pastTwelveMonths[3].month}`]: this.state.opened3.length,
                [`${pastTwelveMonths[4].month}`]: this.state.opened4.length,
                [`${pastTwelveMonths[5].month}`]: this.state.opened5.length,
                [`${pastTwelveMonths[6].month}`]: this.state.opened6.length,
                [`${pastTwelveMonths[7].month}`]: this.state.opened7.length,
                [`${pastTwelveMonths[8].month}`]: this.state.opened8.length,
                [`${pastTwelveMonths[9].month}`]: this.state.opened9.length,
                [`${pastTwelveMonths[10].month}`]: this.state.opened10.length,
                [`${pastTwelveMonths[11].month}`]: this.state.opened11.length
            }}
        ]
        return(
            <div className='graphComponentParent'>
                <h3>Last 12 Months Message Interaction Rates</h3>
                <LineChart data={ data } />
            </div>
        )
    }
}

export default Graph;