import React, { useContext, useState } from 'react'
import Sneakers from './Sneakers'
import SneakersSkeletons from '../SneakersSkeletons'
import { AppContext } from '../hooks/useContextCode'


export default function AllSneakers({ onClickFavorite }) {

  const { value, sneakers, onAddToCart, isLoading } = useContext(AppContext)

    return (
        <>
          <section className='sneakers-section'>
              {isLoading ? (
                <>
                  {Array.from({ length: 12 }).map((_, i) => <SneakersSkeletons key={i} />)}
                </>
              ) : (
                sneakers.filter(sneaker => {
                  let filteredTitle = sneaker.title.toLowerCase().includes(value.toLowerCase())
                  let filteredPrice = sneaker.price.toString().includes(value)
                  return filteredTitle || filteredPrice
                })
                .map((sneaker, index) => <Sneakers onFavorite={(item) => onClickFavorite(item)} onPlus={(item) => onAddToCart(item)} key={index} {...sneaker} />)
              )}
            </section>
        </>
    )
}
