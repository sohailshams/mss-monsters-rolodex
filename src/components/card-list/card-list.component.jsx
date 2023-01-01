import { Component } from 'react';
import Card from '../card/card.component';

class CardList extends Component {
    
    render() {
        const {monsters} = this.props;
        
        return ( 
        <div className='grid grid-cols-4 gap-4'>
            {
                monsters.map((monster) => {
                  return <Card monster={monster} />
                  
                })
            }
        </div>
        )
    }
}

export default CardList;