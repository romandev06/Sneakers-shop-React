import { useEffect, useState } from 'react';
import './index.css'
import Header from './components/Header';
import Cart from './components/Cart';
import axios from 'axios';

import { Routes, Route, json } from 'react-router-dom';
import AllSneakers from './components/AllSneakers';
import Bookmarks from './components/Bookmarks';
import SearchSneakers from './components/SearchSneakers';
import Orders from './components/Orders';

// add createContext()
import { AppContext } from './hooks/useContextCode';
import ThemeSettings from './Theme/ThemeSettings';
import NotFound from './404 page/NotFound';



// https://6676e32a145714a1bd7316c8.mockapi.io/sneakers

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [sneakers, setSneakers] = useState([])

  const [cartItems, setCartItems] = useState([])

  const [value, setValue] = useState('')


// skeleton loader sneakers

  const [isLoading, setIsLoading] = useState(true)



  // work with save favorites sneakers in local storage

  const [favorites, setFavorites] = useState([])

  const onClickFavorites = (item) => {
    let copyFavorites = JSON.parse(localStorage.getItem('favoritesSneakers')) || []

    const comparison = copyFavorites.some(elem => elem.id === item.id)

    if (comparison) {
      let favoritesFilter = copyFavorites.filter((elem => elem.id !== item.id))
      setFavorites(favoritesFilter)

      localStorage.setItem('favoritesSneakers', JSON.stringify(favoritesFilter))
    } else {
      let favoritesPush = [...copyFavorites, item]
      setFavorites(favoritesPush)

      localStorage.setItem('favoritesSneakers', JSON.stringify(favoritesPush))
  }
}

  useEffect(() => {
    let favoritesSneakers = JSON.parse(localStorage.getItem('favoritesSneakers'))

    if (favoritesSneakers) {
      setFavorites(favoritesSneakers)
    }
  }, [])


  useEffect(() => {
    axios.get('https://6676e32a145714a1bd7316c8.mockapi.io/sneakers')
    .then(res => {
      setSneakers(res.data)
      setIsLoading(false)}
    )
    .catch(err => {
      alert('Ведутся тех работы. зайдите чуть позже')
      console.log('Error', err)
    })
  }, [])



  // удаление плюса из Sneakers.jsx (на главной странице) при удалении из корзины

  const deleteCheckedButtonIntoMainPage = (id) => cartItems.some(item => item.id === id)



  // удаление плюса из Sneakers.jsx (на странице CheckoutOrder.jsx) при прике на кнопку "Оформить заказ"

  const deleteCheckedButtonFromOrderPage = (id) => {
    const comparison = cartItems.some(item => item.id === id)

    if (comparison) {
      setCartItems(prev => prev.filter(item => item.id !== id))
      // console.log('я удаляю одни и те же id:', id)
    }
  }




    // work with save sneakers in localStorage

    const onAddToCart = (item) => {
      let copyCartItems = JSON.parse(localStorage.getItem('sneaker')) || []
      const comparison = copyCartItems.some(elem => elem.id === item.id)

      if (comparison) {
        let copyCartItemsFilter = copyCartItems.filter(elem => elem.id !== item.id)
        setCartItems(copyCartItemsFilter)

        localStorage.setItem('sneaker', JSON.stringify(copyCartItemsFilter))
      } else {
        let copyCartItemsPush = [...copyCartItems, item]
        setCartItems(copyCartItemsPush)

        localStorage.setItem('sneaker', JSON.stringify(copyCartItemsPush))
      }
  }

  useEffect(() => {
    let parseToObj = JSON.parse(localStorage.getItem('sneaker'))

    if (parseToObj) {
      setCartItems(parseToObj)
    }
  }, [])



  // work with delete from cart and save in local storage

  const onRemoveItemInCart = (id) => {
    let copyCartItems = JSON.parse(localStorage.getItem('sneaker')) || []

    const comparison = copyCartItems.some(item => item.id === id)

    if (comparison) {
      let deleteFromLocalStorage = copyCartItems.filter((item) => item.id !== id)

      setCartItems(deleteFromLocalStorage)
      localStorage.setItem('sneaker', JSON.stringify(deleteFromLocalStorage))

      deleteCheckedButtonIntoMainPage(id)
    }
  }




  const totalSum = cartItems.reduce((acc, item) => acc + item.price, 0)

  const [orderSneakers, setOrderSneakers] = useState([])

  const getOrderSneakers = (cartItem) => {
    setOrderSneakers(prev => [...prev, cartItem])
  }



  return (
    <AppContext.Provider value={{ cartItems, value, isLoading, value, sneakers, onAddToCart,  favorites, onClickFavorites, deleteCheckedButtonIntoMainPage, setCartOpened, deleteCheckedButtonFromOrderPage, getOrderSneakers, orderSneakers, setOrderSneakers, totalSum }}>
      <div className="wrapper">
        {cartOpened && <Cart onRemoveItemInCart={(id) => onRemoveItemInCart(id)} />}

        <Routes>
          <Route path='/'
          element={
          <>
            <ThemeSettings/>
            <Header open={() => setCartOpened(true)} />
            <SearchSneakers setValue={setValue} />
            <AllSneakers onClickFavorite={(item) => onClickFavorites(item)} />
          </>
          }>
        </Route>


          <Route path='/favorites'
            element={
              <>
                <ThemeSettings/>
                <Header open={() => setCartOpened(true)} />
                <Bookmarks onClickFavorites={(item) => onClickFavorites(item)} />
              </>
            }>
          </Route>

          <Route path='/orders' element={
            <>
              <ThemeSettings/>
              <Header open={() => setCartOpened(true)} />
              <Orders />
            </>}>
          </Route>

          <Route path="*" element={
            <>
              <NotFound/>
            </>
          } />
        </Routes>

      </div>
    </AppContext.Provider>
  )
}

export default App