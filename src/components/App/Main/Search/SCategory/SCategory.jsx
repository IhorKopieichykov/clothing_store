import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import './SCategory.scss';

export default function SCategory({category, queryProducts}) {
    const [fullView, setFullView] = useState(false);

    const catProducts = useMemo(() => queryProducts.filter(prod => prod.category === category), [category, queryProducts]);

    return (
        <div className="search__category scategory">
            <h3 className="scategory__title"> 
                {category}                           
            </h3>
            <div className="scategory__items">
                {   fullView
                    ?   catProducts.map((prod, index) => 
                        <Link to={`/${prod.category}/${prod.id}`} className="scategory__item scitem" key={index}>
                            <div className="scitem__image">
                                <img src={require(`../../../../../images/products/${prod.category}/${prod.id}/${prod.images[0]}`)} alt="prod_img" />
                            </div>
                            <div className="scitem__title">{prod.name}</div>
                            <div className="scitem__price">${prod.price.toFixed(2)}</div>
                        </Link>)
                    :   catProducts.slice(0, 4).map((prod, index) => 
                        <Link to={`/${prod.category}/${prod.id}`} className="scategory__item scitem" key={index}>
                            <div className="scitem__image">
                                <img src={require(`../../../../../images/products/${prod.category}/${prod.id}/${prod.images[0]}`)} alt="prod_img" />
                            </div>
                            <div className="scitem__title">{prod.name}</div>
                            <div className="scitem__price">${prod.price.toFixed(2)}</div>
                        </Link>)
                }
            </div>
            {
                catProducts.length > 4
                ?   <button className="scategory__button" onClick={()=>setFullView(!fullView)}>{fullView ? "Show less" : "Show more"}</button>
                :   ''
            }
        </div>
    )
}
