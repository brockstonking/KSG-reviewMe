import React, { Component } from 'react';
import './graph.css';
import { LineChart } from 'react-chartkick';
import 'chart.js';

class Graph extends Component {
    constructor(props){
        super(props);

        this.state = {
            pastTwelveMonths: []
        }
    }

    componentWillMount(){
        const monthNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const newDate = new Date();
        const currentMonth = newDate.getMonth() + 1;
        let thisYear = monthNums.splice(0,currentMonth)
        const currentMonthNumbers = [...monthNums, ...thisYear]
    
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
        this.setState({
            pastTwelveMonths: lastTwelveMonths
        })
    }

    render(){
        const { pastTwelveMonths } = this.state;
        const data = [
            {'name': 'data1','color': 'lightGreen', 'data': {[pastTwelveMonths[0].month]: 2, [pastTwelveMonths[1].month]: 5, [pastTwelveMonths[2].month]: 3, [pastTwelveMonths[3].month]: 0, [pastTwelveMonths[4].month]: 0, [pastTwelveMonths[5].month]: 0, [pastTwelveMonths[6].month]: 0, [pastTwelveMonths[7].month]: 0, [pastTwelveMonths[8].month]: 0, [pastTwelveMonths[9].month]: 0, [pastTwelveMonths[10].month]: 0, [pastTwelveMonths[11].month]: 0 }},
            {'name': 'data2', 'color': 'blue', 'data': {[pastTwelveMonths[0].month]: 4, [pastTwelveMonths[1].month]: 6, [pastTwelveMonths[2].month]: 1, [pastTwelveMonths[3].month]: 0, [pastTwelveMonths[4].month]: 0, [pastTwelveMonths[5].month]: 0, [pastTwelveMonths[6].month]: 0, [pastTwelveMonths[7].month]: 0, [pastTwelveMonths[8].month]: 0, [pastTwelveMonths[9].month]: 0, [pastTwelveMonths[10].month]: 0, [pastTwelveMonths[11].month]: 0 }}
        ]
        return(
            <div className='graphComponentParent'>
                <LineChart data={ data } />
            </div>
        )
    }
}

export default Graph;