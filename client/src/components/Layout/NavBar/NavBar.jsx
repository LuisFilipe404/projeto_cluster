import { Link } from 'react-router-dom'; // importar a função de linkar do router dom
import MenuResponsivo from './MenuResponsivo';
import styles from './NavBar.module.css'; //importa css

function NavBar() {
    return (  
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <Link to="/">Página Inicial</Link>
                </li>
                <MenuResponsivo/>
            </ul>
        </nav>
    );
}

export default NavBar;