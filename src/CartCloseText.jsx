import React from 'react'

export default function CartCloseText({ setCartOpened }) {
    return (
        <div className='close-cart'>
            <h2>Корзина</h2>
            <button onClick={() => setCartOpened(false)} className='remove-item-btn remove-item-btn__main close-cart__btn'><img src="img/remove-item-btn.svg" alt="" /></button>
        </div>
    )
}
