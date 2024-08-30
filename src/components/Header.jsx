import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../hooks/useContextCode';

export default function Header({ open }) {

  const { totalSum } = useContext(AppContext)

  return (
      <div>
      <header className='header'>
      <section className='header-section'>
        <Link to='/'>
          <div className='header-title'>
            <img src="/img/logo.png" alt="logo" />
            <div>
              <h2>React sneakers</h2>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className='header-list'>
          <li style={{cursor: 'pointer'}} onClick={open}>
          <button style={{cursor: 'pointer'}}><img src="/img/cart.svg" alt="" /></button>
            <span>{totalSum} руб.</span>
          </li>
          <Link to='/favorites'>
            <li style={{cursor: 'pointer'}}>
            <img src="/img/bookmarks.svg" alt="" />
              <span>Закладки</span>
            </li>
          </Link>
          <Link to='/orders'>
            <li>
            <img src="/img/profilte.svg" alt="" />
              <span>Профиль</span>
            </li>
          </Link>
        </ul>
      </section>
      <div className="header-line"></div>
    </header>
      </div>
  )
}