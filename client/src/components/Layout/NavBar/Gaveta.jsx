import styles from './Gaveta.module.css'; // Importação do Css
import { Link } from 'react-router-dom'; // Importação dos Links do router

function Gaveta({ active }) {

    // Evento para fechar a sideBar
    const closeSideBar = () => {
        active(false);
    };

    return (
        <nav className={styles.container} onClick={closeSideBar}>
            <ul>
                <li>
                    <Link to="cluster1">Cluster 1</Link>
                </li>
                <li>
                    <Link to="cluster2">Cluster 2</Link>
                </li>
                <li>
                    <Link to="cluster3">Cluster 3</Link>
                </li>
                <li>
                    <Link to="cluster4">Cluster 4</Link>
                </li>
                <li>
                    <Link to="cluster5">Cluster 5</Link>
                </li>
                <li>
                    <Link to="cluster6">Cluster 6</Link>
                </li>
                <li>
                    <Link to="cluster7">Cluster 7</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Gaveta