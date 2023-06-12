import Painting from "./Painting";
import PropTypes from 'prop-types'; 

export default function PaintingList({items}) {
return <ul>
    {items.map(item => 
        <li key={item.id}> 
            <Painting 
                imgUrl={item.url}
                title={item.title}
                authoUrl={item.author.url}
                authorTag={item.author.tag}
                price={item.price}
                quantity={item.quantity}
            />
        </li>)}
    </ul>
}

PaintingList.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired
    })
)
}
