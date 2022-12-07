import MapaSvg from "../Layout/Mapa-Svg/MapaSvg"; // componente de criar o mapa
import GraficoPrincipal from "../Layout/Grafico Principal/GraficoPrincipal"; // componente de criar o gráfico

function Main() {
    return ( 
        <main>
            {/*Componentes */}
            <MapaSvg/>
            <GraficoPrincipal/>
        </main>
    );
}

export default Main;