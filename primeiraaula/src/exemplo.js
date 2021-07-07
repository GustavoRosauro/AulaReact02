import { Component } from "react";

class Exemplo extends Component{
    constructor(props){
        super(props)
        this.state = {            
            numeroClicks:0
        }        
    }
    render(){
        const incrementValueClick = () =>{
            let numberClick = this.state.numeroClicks;
            numberClick++;            
            this.setState({['numeroClicks']:numberClick});
        }
        const resetClickValue = ()=>{
            this.setState({['numeroClicks']:0})
        }
        return(
            <div>
                <h1>{this.state.numeroClicks}</h1>
                <button onClick={() => incrementValueClick()}>Increment</button>
                {
                    (()=>{
                        if(this.state.numeroClicks >= 5)
                            return resetClickValue();
                        else
                            return <h1>Valor atingido</h1>
                    })()
                }
            </div>
        )
    }
}
export default Exemplo;