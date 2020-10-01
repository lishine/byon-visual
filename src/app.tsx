import React from 'react'
import './reset.css'
import styles from './styles.module.scss'
import { RiSearchLine } from 'react-icons/ri'
import { VscArrowLeft } from 'react-icons/vsc'

function App() {
    return (
        <div className={styles.app}>
            <header>
                <VscArrowLeft size='30px' />
                <div className={styles.logo}>VANHEUSEN</div>
                <div className={styles.right}>
                    <RiSearchLine size='30px' />
                </div>
            </header>

            <main className={styles.main}>
                <nav className={styles.left}>
                    <div className={styles.linkTab}>
                        <a className={styles.link} href='#board1'>
                            Brand Book
                        </a>
                    </div>
                    <div className={styles.linkTab}>
                        <a className={styles.link} href='#board2'>
                            Concept
                        </a>
                    </div>
                    <div className={styles.linkTab}>
                        <a className={styles.link} href='#board3'>
                            Seasonal Colors
                        </a>
                    </div>
                    <div className={styles.linkTab}>
                        <a className={styles.link} href='#board4'>
                            Seasonal Stories
                        </a>
                    </div>
                </nav>
                <dl className={styles.center}>
                    <dd className={styles.board}>
                        <button className={styles.anchor} id='board1' />
                        <div className={styles.title}>Brand Book</div>
                        <img className={styles.image} src='pic.png' alt='board' />
                    </dd>
                    <dd className={styles.board}>
                        <button className={styles.anchor} id='board2' />
                        <div className={styles.title}>Concept</div>
                        <img className={styles.image} src='pic.png' alt='board' />
                    </dd>
                    <dd className={styles.board}>
                        <button className={styles.anchor} id='board3' />
                        <div className={styles.title}>Seasonal colors</div>
                        <img className={styles.image} src='pic.png' alt='board' />
                    </dd>
                    <dd className={styles.board}>
                        <button className={styles.anchor} id='board4' />
                        <div className={styles.title}>Seasonal stories</div>
                        <img className={styles.image} src='pic.png' alt='board' />
                    </dd>
                </dl>
            </main>
        </div>
    )
}

export default App
