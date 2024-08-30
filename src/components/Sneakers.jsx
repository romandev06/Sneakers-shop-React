import React, { useContext, useState } from 'react'
import { AppContext } from '../hooks/useContextCode'


export default function Sneakers({ id, title, price, img, onPlus, onFavorite }) {
    const { cartItems, deleteCheckedButtonIntoMainPage, } = useContext(AppContext)

    const [checked, setChecked] = useState(false)

    const [liked, setLiked] = useState(false)

    const onClickFavorite = () => {
        setLiked(!liked)
        onFavorite({ id, title, price, img })
    }


    const onClickPlus = () => {
        setChecked(!checked)
        onPlus({ id, title, price, img })
    }

    return (
        <div>
            <article className='sneakers-article'>
                <button onClick={onClickFavorite}>
                    <img className='heart-unliked' src={`img/heart-${liked ? 'liked' : 'unliked'}.svg`} alt="" />
                </button>
                <img width={133} height={112} src={`/img/sneakers/${img}.png`} alt="sneakers" />
                <div>
                    <h3>{title}</h3>
                    <div className='add-sneaker'>
                    <div className='price-container'>
                        <p>Цена:</p>
                        <h4>{price}</h4>
                    </div>
                        <button onClick={onClickPlus}>
                            <img src={deleteCheckedButtonIntoMainPage(id) ? '/img/checked.svg' : '/img/plus.svg'}  alt="add product" />
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}
