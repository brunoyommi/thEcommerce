import React from "react";

export default function ItemDetail({ item, title, image, price }) {    
    return (
        <>
            <div className="card">
                <div className="row">
                    <aside className="col-sm-5 border-right">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <div> <img className="detailImage" src={image} /></div>
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
                                <dd><p>Here goes description consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco </p></dd>
                            </dl>

                            <a href="#" className="btn btn-lg btn-primary text-uppercase"> Comprar </a>
                            <a href="#" className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fas fa-shopping-cart"></i> Agregar al carrito </a>
                        </article>
                    </aside>
                </div>
            </div>
        </>
    )

}