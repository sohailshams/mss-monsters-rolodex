import Card from '../card/card.component';
import { Monster } from '../../App';

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({monsters}: CardListProps) => (
       
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

        {monsters.map((monster) => {
            return <Card key={monster.id} monster={monster} />
            
        })}
    </div>
    )


export default CardList;