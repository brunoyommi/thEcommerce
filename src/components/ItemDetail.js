import React from "react";
import ItemCount from './ItemCount';
import { useCartContext } from './Context';

export default function ItemDetail({ item, title, image, price, description, stock }) {

    const { cartCount } = useCartContext();

    return (
        <>
            <div className="card">
                <div className="row">
                    <aside className="col-sm-5 border-right">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <div> <img className="detailImage" alt="" src={image} /></div>
                            </div>
                        </article>
                    </aside>
                    <aside className="col-sm-7">
                        <article className="card-body p-5">
                            <h3 className="title mb-3">{title}</h3>

                            <p className="price-detail-wrap">
                                <span className="price h3 text-warning">
                                    <span className="currency">$</span><span className="num">{price}</span>
                                </span>
                            </p>
                            <dl className="item-property">
                                <dt>Descripcion</dt>
                                <dd><p>{description} </p></dd>
                            </dl>
                            <dl className="item-property">
                                <dt>Unidades disponibles</dt>
                                <dd><p>{stock} </p></dd>
                            </dl>

                            <br></br>
                            <ItemCount
                                item={item}
                                stock={stock}
                                initial={1} />                            
                        </article>
                    </aside>
                </div>
            </div>
        </>
    )

}