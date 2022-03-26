//COMPONENTES
import Card from './Card';
//DATA
import dataCard from '../data/portfolio.json';
//REACT_ROUTER
import { useLocation} from 'react-router-dom';
//REACT
import { useState, useEffect } from 'react';

function ContainerCards() {
    const [ num, setNum ] = useState(3)
    let location = useLocation();

    useEffect(() => {
      location.pathname != "/" ? setNum(9) : setNum(3);
    }, [location.pathname])

    return (
        <div className='containerCards'>
            {dataCard.filter(data => data.id <= num).map(data => <Card key={data.id} {...data} />)}
        </div>);
}

export default ContainerCards;