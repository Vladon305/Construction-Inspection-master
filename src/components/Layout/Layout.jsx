import React from 'react'
import styles from './Layout.module.scss'
import { Link } from 'react-router-dom'
import { Button, Space } from 'antd';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <div className={styles.wrapper}>
                    <span>
                        Construction Loan Inspection LLC
                    </span>

                    <ul>
                        <li>
                            <Link to='/about'>
                                <Button size='large' type="primary">
                                    About
                                </Button>
                            </Link>

                        </li>
                        <li>
                            <Link to='/services'>
                                <Button size='large' type="primary">
                                    Services
                                </Button>
                            </Link>

                        </li>
                        <li>
                            <Link to='/contact'>
                                <Button size='large' type="primary">
                                    Contact
                                </Button>
                            </Link>

                        </li>
                    </ul>

                </div>
            </div>
            {children}
        
        
        </div>

    )
}


export default Layout