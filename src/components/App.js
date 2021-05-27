import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

// const App = () => {
//     const [hours, setHours] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [seconds, setSeconds] = useState(0);
//     const [day, setDay] = useState("");
//     const [timerID, settimerID] = useState(null);

//     useEffect(() => {
//         let date = new Date();
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let day = hours >= 12 ? "PM" : "AM";
//         settimerID(
//             setInterval(() => {
//                 seconds++;
//                 if (seconds === 60) {
//                     minutes++;
//                     seconds = 0;
//                 }
//                 if (minutes === 60) {
//                     hours++;
//                     minutes = 0;
//                 }
//                 if (hours > 12) {
//                     hours = 12 - (24 - hours);
//                 }
//                 minutes = minutes < 10 ? "0" + Number(minutes) : Number(minutes);
//                 seconds = seconds < 10 ? "0" + Number(seconds) : Number(seconds);
//                 // console.log(typeof hours, typeof minutes, typeof seconds);
//                 setHours(hours);
//                 setMinutes(minutes);
//                 setSeconds(seconds);
//                 setDay(day);
//             }, 1000)
//         );
//         return () => {
//             clearInterval(timerID);
//         };
//     }, []);

//     return (
//         <div className="Clock">
//             <h3 id="time">{`${hours}:${minutes}:${seconds} ${day}`}</h3>
//         </div>
//     );
// };

class App extends Component {
    constructor() {
        super();
        this.h = undefined;
        this.m = undefined;
        this.s = undefined;
        this.interval = undefined;
        this.state = {
            time: undefined,
        };
    }
    componentDidMount() {
        let d = new Date();
        this.h = d.getHours();
        this.m = d.getMinutes();
        this.s = d.getSeconds();
        let str = `${this.h > 12 ? this.h - 12 : this.h}:${this.m < 10 ? "0" + this.m : this.m}:${this.s < 10 ? "0" + this.s : this.s} ${this.h < 12 ? "AM" : "PM"}`;
        this.setState({ time: str }, () => this.timer());
    }
    timer() {
        this.interval = setInterval(() => {
            this.s++;
            if (this.s === 60) {
                this.s = 0;
                this.m++;
            }
            if (this.m === 60) {
                this.m = 0;
                this.h++;
            }
            if (this.h === 24) {
                this.h = 0;
            }
            let str = `${this.h > 12 ? this.h - 12 : this.h}:${this.m < 10 ? "0" + this.m : this.m}:${this.s < 10 ? "0" + this.s : this.s}${this.h < 12 ? " AM" : " PM"}`;
            this.setState({ time: str });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="Clock">
                <h3 id="time">{this.state.time}</h3>
            </div>
        );
    }
}

export default App;
