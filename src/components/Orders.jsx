import React, { useContext, useEffect } from 'react'
import { AppContext } from '../hooks/useContextCode'

export default function Orders() {
    const { orderSneakers, setOrderSneakers } = useContext(AppContext)

    // удаление конкретного элемента (вне зависимости от количества одинаковых кроссовок)
    const deleteSneakersItem = (id) => {

        let filterPurchasedSneaker = orderSneakers.filter(item => item.id !== id)
        setOrderSneakers(filterPurchasedSneaker)
        localStorage.setItem('purchasedItem', JSON.stringify(filterPurchasedSneaker))
    }

    useEffect(() => {
        let parse = JSON.parse(localStorage.getItem('purchasedItem'))

        if (parse) {
            setOrderSneakers(parse)
        }
    }, [])

    return (
        <section className='order-section'>
            <h1>Мои покупки</h1>
            <section className='order-sneakers'>
                {orderSneakers.map(orderSneaker =>
                    <article className='sneakers-article'>
                        <img width={133} height={112} src={`/img/sneakers/${orderSneaker.img}.png`} alt="sneakers" />
                        <div>
                            <h3>{orderSneaker.title}</h3>
                            <div className='add-sneaker'>
                            <div className='price-container'>
                                <p>Цена:</p>
                                <h4>{orderSneaker.price}</h4>
                            </div>
                            <button onClick={() => deleteSneakersItem(orderSneaker.id)}>
                                <img width={30} src="img/remove-item-btn.svg" alt="" />
                            </button>
                            </div>
                        </div>
                    </article>
                )}
            </section>
        </section>
    )
}