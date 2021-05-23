
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter : 0 ,
      color :'black'
    }
  }
  increase =() =>{
    this.setState({counter : this.state.counter + 1 })
    if(this.state.counter > 0){
      this.setState({color:'green'})
    }
  }
  reset = () =>{
    this.setState({counter : 0 , color:'black'})
  }
  decrease = () =>{
    this.setState({counter:this.state.counter - 1 })
    if(this.state.counter < 0){
      this.setState({color:'red'})
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Counter</h1>
        
        <button onClick = {this.increase}>Increase</button>
        <button onClick = {this.reset}>Reset</button>
        <button onClick = {this.decrease}>Decrease</button>

        <DisplayCounter values = {this.state}/>
      </div>
    );
  }
}
const DisplayCounter = (props) => {
  return(
    <h1 style = {{color : props.values.color}}>{props.values.counter}</h1>
  )
}
export default App;
