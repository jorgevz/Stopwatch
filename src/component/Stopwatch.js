import React, { Component } from "react"

class Stopwatch extends Component {
    //in this line i have my state with all of my properties 
    //that i will be using. As you may see i have timerOn declare as a boolean so that the timer start 
    //only when i want to once buttons are clicked. I have everything set at 0 to start because that is
    // how i want my time to start on my timer.
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
    
     //For this function i have my current time being substracted from the timerTime to determine what to display
     //once the START button is clicked.

     startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };
    
    
     // Here is the functionality of my STOP  which i will later on implement on my
     //buttons.

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    
    
    // Here is the functionality of my RESET which i will later on implement on my
     //button.
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };
    render() {
// Here i have what i will be rendering on my website together with assignment of my minutes 
//and seconds, very similar to vanilla javascript. I also used the mathfloor method to assure that
// i would only received round numbers that the user can understand once clicked.

const { timerTime } = this.state;
const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
return (
    <div className="timer">
    
    <h3 id='style'>My Stopwatch</h3>      
      {minutes} : {seconds} : 
 {this.state.timerOn === false && this.state.timerTime === 0 && (
 
 
 <button className='f1' onClick={this.startTimer}>Start</button> )}
 {this.state.timerOn === true && (

 <button id='f2' onClick={this.stopTimer}>Pause</button>)}
  {this.state.timerOn === false && this.state.timerTime > 0 && (

     <button className='f1' onClick={this.startTimer}>Resume</button>)}
{this.state.timerOn === false && this.state.timerTime > 0 && (
      
    <button id='f3' onClick={this.resetTimer}>Reset</button>)}
    </div>


           
        );
    }
}
export default Stopwatch;
