import { Outlet, NavLink } from 'react-router-dom';
import styles from "../Styles/navbar.module.css";

// Navbar Component
export default function Navbar(){
    console.log("Navbar");
    return(
        <>
            <div className={styles.navbarContainer}> 
                <NavLink to="/" className={styles.logoText}>
                    My App
                </NavLink>

                <div>
                    <NavLink to="/" className={styles.link}>
                        <span className={styles.appName}>
                            TAB1
                        </span>
                    </NavLink>
                    <NavLink to="/section2" className={styles.link}>
                        <span className={styles.appName}>
                            TAB2
                        </span>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}