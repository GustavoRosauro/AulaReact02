import { Component } from 'react'

class Exercicio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickNumber: 0
        }
    }
    render() {
        const incrementClickValue = () => {
            let number = this.state.clickNumber;
            number++;
            this.setState({ ['clickNumber']: number });
        }
        const resetValue = () => {
            this.setState({ ['clickNumber']: 0 })
        }
        return (
            <div className='col-md-6'>
                <h1>{this.state.clickNumber}</h1>
                <button className='btn btn-success btn-sm' onClick={() => incrementClickValue()}>Click</button>
                <button className='btn btn-danger btn-sm' onClick={() => resetValue()}>Reset</button>
                {
                    (() => {
                        if (this.state.clickNumber <= 5) {
                            return <h1>Número menor que cinco</h1>
                        } else {
                            return <h1>Número maior que cinco</h1>
                        }
                    })()
                }
            </div>
        )
    }
}
export default Exercicio;
