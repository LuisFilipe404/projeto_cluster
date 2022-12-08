import styles from './MenuResponsivo.module.css'; // Importação do Css
import Gaveta from './Gaveta'; // Importação da SideBar
import { useState } from 'react'; // importação do UseState

function MenuResponsivo() {

    const [sideBar, setSideBar] = useState(false); // State para ativar a SideBar
    const showSideBar = () => setSideBar(!sideBar); // Evento de click que alterna entra ativar e desativar

    return (
        <div>
            <div
                className={styles.container}
                onClick={showSideBar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {sideBar && <Gaveta active={setSideBar}/>}
        </div>
    )
}

export default MenuResponsivo