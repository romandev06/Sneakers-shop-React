import React, { useContext } from 'react'
import { AppContext } from '../hooks/useContextCode'

export default function EmptyCart() {
    const { setCartOpened } = useContext(AppContext)

    return (
        <article className='empty-cart'>
            <div>
                <img className='empty-cart__box-img' src="/img/empty-cart.png" alt="emty cart" />
                <h1>Корзина пустая</h1>
                <p className='empty-cart__description-text'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button onClick={() => setCartOpened(false)}>
                    <img className='empty-cart__arrow-btn' src="img/arrow.svg" alt="arrow icon" />
                    <p>Вернуться назад</p>
                </button>
            </div>
        </article>
    )
}
