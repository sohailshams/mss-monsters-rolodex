import {useState} from 'react';
import Card from '../card/card.component';

const CardList = ({monsters}) => (
       
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

        {monsters.map((monster) => {
            return <Card monster={monster} />
            
        })}
    </div>
    )


export default CardList;