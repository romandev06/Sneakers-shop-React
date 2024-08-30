import React, { useContext } from 'react'
import { AppContext } from '../hooks/useContextCode'

export default function CheckoutOrder() {
    const { setCartOpened } = useContext(AppContext)

    const randomOrderNumber = () => {
        return Math.floor(Math.random() * 100 + 10)
    }

    return (
        <article className='empty-cart checkout-order'>
            <div>
                <img src="/img/checkout-order.png" alt="emty cart" />
                <h1>Заказ оформлен!</h1>
                <p>Ваш заказ {randomOrderNumber()} скоро будет передан курьерской доставке</p>
                <button onClick={() => setCartOpened(false)}>
                    <img className='empty-cart__arrow-btn' src="img/arrow.svg" alt="arrow icon" />
                    <p>Вернуться назад</p>
                </button>
            </div>
        </article>
    )
}
