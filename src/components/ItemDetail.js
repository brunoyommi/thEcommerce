import React from "react";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

export default function ItemDetail({ item, title, image, price, description, stock }) {

    return (
        <>
            {item.length !== 0 ?
                <div>
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
                </div>
                : <div className="card-body">
                    <h5>El producto indicado no existe</h5>
                    <Link className="nav-link" to="/products">Continuar comprando</Link>
                </div>}
        </>
    )

}