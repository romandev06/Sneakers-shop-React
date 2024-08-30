import React from "react";
import classes from "./notFound.module.css"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <section className={classes.notFoundSection}>
            <Link to={'/'}>
            {/* <div className={classes.notFoundContainer}>
                <h1 className={classes.notFoundTitle}>404</h1>
                <div class={classes.cloak__wrapper}>
                    <div class={classes.cloak__container}>
                    <div class={classes.cloak}></div>
                    </div>
                </div>
                <div class={classes.info}>
                    <h2>Данной страницы не существует :(</h2>
                    <a className={classes.infoLink} href="https://t.me/romandev_06" target="_blank" rel="noreferrer noopener">На главную</a>
                </div>
            </div> */}
            <h3 className={classes.alertText}>Данной страницы не существует</h3>
            <p className={classes.alertText}>Перейти на главную</p>
        </Link>
        </section>
    )
}
