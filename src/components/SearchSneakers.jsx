import React, { memo, useContext } from 'react'
import { AppContext } from '../hooks/useContextCode'

export default function SearchSneakers({ setValue }) {
  const { value } = useContext(AppContext)

  if (value.length >= 10) {
    setValue(prev => prev = '')
    alert('вы не можете ввести больше 10 символов')
  }

    return (
        <section>
            <div className='search-sneakers__container'>
              <h2 className='sneakers-title'>{value ? `Поиск по запросу: ${value}` : 'Все кроссовки'}</h2>
              <div className='search-input'>
                <img src="img/search.svg" alt="search" />
                <div style={{position: 'relative'}}>
                  <input value={value} onChange={(event) => setValue(event.target.value)} placeholder='Поиск...' type="text" />
                  {value && <img onClick={() => setValue('')} width={22} style={{position: 'absolute', top: 0, right: 25}} src="img/remove-item-btn.svg" alt="" />}
              </div>
              </div>
            </div>
        </section>
    )
}