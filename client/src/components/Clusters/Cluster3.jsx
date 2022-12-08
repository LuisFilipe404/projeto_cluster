import Graficos from "../Layout/Gráficos Separados/Graficos";
import MapaIndividual from "../Layout/Mapa Individual/MapaCluster3.jsx"

function Cluster3() {
    return (  
        <main>
            <MapaIndividual/>
            <Graficos 
                cluster={"/cluster3.csv"}
                color={"#95a5a6"}
                name={"Cluster 3"}
            />
        </main>
    );
}

export default Cluster3;