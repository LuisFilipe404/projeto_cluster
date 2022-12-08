import Graficos from "../Layout/Gráficos Separados/Graficos";
import MapaIndividual from "../Layout/Mapa Individual/MapaCluster4.jsx"

function Cluster4() {
    return (  
        <main>
            <MapaIndividual/>
            <Graficos 
                cluster={"/cluster4.csv"}
                color={"#9b59b6"}
                name={"Cluster 4"}
            />
        </main>
    );
}

export default Cluster4;