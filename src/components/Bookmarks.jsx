import React, { memo, useContext } from 'react';
import { AppContext } from '../hooks/useContextCode';


export default function Bookmarks({ onClickFavorites }) {
    const { favorites } = useContext(AppContext)

    return (
        <section>
            <h1 className='my-bookmarks__text'>Мои закладки</h1>
            <section className='sneakers-section'>
                {favorites.map(favorite =>
                    <article key={favorite.id} className='sneakers-article'>
                        <button onClick={() => onClickFavorites(favorite)}>
                            <img className='heart-unliked' src='/img/heart-liked.svg' alt="liked sneaker" />
                        </button>
                        <img width={133} height={112} src={`/img/sneakers/${favorite.img}.png`} alt="sneakers" />
                        <div>
                            <h3>{favorite.title}</h3>
                            <div className='add-sneaker'>
                                <div className='price-container'>
                                    <p>Цена:</p>
                                    <h4>{favorite.price}</h4>
                                </div>
                            </div>
                        </div>
                    </article>
                )}
            </section>
        </section>
    )
}