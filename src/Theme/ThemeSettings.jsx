import React, { useEffect, useState } from 'react'

export default function ThemeSettings() {
    let [theme, setTheme] = useState('light')

    useEffect(() => {
        let currentTheme = JSON.parse(localStorage.getItem('currentTheme'))

        if (currentTheme !== undefined && currentTheme !== null) {
            setTheme(currentTheme)
        }
    }, [])

    useEffect(() => {
        if (theme === 'dark') { document.body.classList.add('dark') }
        else { document.body.classList.remove('dark') }

        localStorage.setItem('currentTheme', JSON.stringify(theme))
    }, [theme])

    let toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <section>
            <button onClick={toggleTheme} className='change-theme__btn'>
                <svg width={35} xmlns="http://www.w3.org/2000/svg" fill={theme === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" stroke-width="1.5" stroke={theme === 'dark' ? 'white' : 'black'} class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            </button>
        </section>
    )
}
