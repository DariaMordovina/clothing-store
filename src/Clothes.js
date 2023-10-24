import { Link } from 'react-router-dom';

function Clothes({item}){
    return(
        <div className="products">
{item.map((element=>{
    const{id,name,searchTerm,price,image}=element;
    return(
        <div className="product-card" key={id}>
            <Link to={`/about/${item.title}`}>
            <img src={image} width="400px" height="500px" />
            </Link>
            <div className="product-info">
            <h3>{name}</h3>
            <h4> $ {price}</h4>
            </div>
        </div>
    )
}))}
        </div>
    )
}
export default Clothes;