import React from 'react'

// import uuid from 'uuid/v4';
import './Column.scss';
import Card from 'components/Card/Card';
import ButtonCard from '../ButtonCard/ButtonCard';
import { log } from 'util';
// import columns from 'data';

//Los parametros son props. Es algo personalizado que le podes poner a un componente invocado

const Column = props => (
    <div className="column">
        <p className='column-title'>{props.title}</p>
        {
            props.cards.map(card => <Card 
                key={card.id}
                title={card.title} 
                text={card.text} 
                tags={card.tags}
                />)
        }
        {/* <Card title ='Terminar el proyecto'
        text='Lalalla'/>
        <Card title ='Practicar React'
        text='Holisada'/> */}
         <ButtonCard />
    </div>
)



class Column extends Component{
    state={
        menssage: 'Hola'
    }
    chageMessage = () =>{
        this.setState({message: 'Lalalla'})
    }
    showMessage =() =>{
        console.log(this.props.title);
        //tiene que ser arrow function para que funcione el this porque sino no se puede, da error
    }
    render(){
        const {title, cards} = this.props; //esto lo rellena automaticamente react y lo guarda en el objeto. Esto lo hacemos para que no pongamos abajo cuando llamemos a title, this.props.title, ejemplo. Esto se hace para hacer el codigo mas chico y escribirlo más rápido. 
        return (
            <div
            className='column'
            onClick={this.state.message}
            >
            <p className='title'>{this.chageMessage}</p>
            <Card 
            cards={cards}/>
            </div>
        )
    }
}
export default Column;
