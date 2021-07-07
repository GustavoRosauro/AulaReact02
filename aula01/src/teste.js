import { Component } from "react";

class Exemplo extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome:'',
            click:0,
            nomes:['gustavo','amanda','cecilia']
        }
    }
    render(){
        const onChangeInput = (e) =>{
            const {name,value} = e.target;
            this.setState({[name]:value});
        }
        const onClickEvent = ()=>{
            let number = this.state.click;
            number++;
            this.setState({['click']:number})
        }
        return(
            <div className='col-md-6'>
                <label>Nome</label>
                <input className='form-control' name='nome' value={this.state.nome} onChange={onChangeInput}/>
                <label>Quantidade de Clicks</label>
                <input className='form-control' name='click' value={this.state.click} disabled/>
                <table className='table table-striped mt-5'>
                    <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.nomes.map(x => 
                        <tr>
                            <td>{x}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <button className='btn btn-success btn-sm' onClick={onClickEvent}>Click</button>
            </div>
        )
    }
}
export default Exemplo;