import React, {useState} from 'react' 
import data from "../data"
import Card from "./Card"
import '../styles/gallery.css'
import '../styles/header.css'


export default function ChoosingBar(){
    const [items, setItems] = useState(data);
    const [query, setQuery] = useState('all');

    const filterItem = (categItem) => {
        if (categItem === 'all'){
            setItems(data);
            
        }
        else {
            const updatedItems = data.filter((curElement) => {
                console.log(curElement.category === categItem)
                return curElement.category === categItem;
            });
            setItems(updatedItems);
        }
      

        
    }

    const cards = items.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
                
            />
        )
    });


    return ( 
        <div className = 'center'>
            <div className='search--bar' >
            
            <input className = 'input--bar' type = 'text' placeholder='Search event..'   
            onChange={ e => setQuery(e.target.value)} 
            onKeyPress={(ev) => { if (ev.key === "Enter") { filterItem(query) }}}/>

            <img alt = 'search' src="../images/search.svg" className="search--logo" onClick={() => filterItem(query)} />
        
            {console.log(query)}
            </div>


            <div className = 'choose--bar '> 
                <div className = 'bar--text'>
                <button onClick={() => filterItem('all')}> All </button>
                <button onClick={() => filterItem('music')}> Music </button>
                <button onClick={() => filterItem('arts')}> Arts  </button>
                <button onClick={() => filterItem('food')}> Food </button>
                <button onClick={() => filterItem('fun')}> Entertainment </button>
                <button onClick={() => filterItem('education')}> Education </button>
                </div>
    
            </div>

            <div className = "row--cards">
                {cards}
            </div>
        
        </div>
        
        )
}

   