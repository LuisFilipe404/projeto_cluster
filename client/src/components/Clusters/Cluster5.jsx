import Graficos from "../Layout/Gráficos Separados/Graficos";
import MapaIndividual from "../Layout/Mapa Individual/MapaCluster5.jsx"

function Cluster5() {
    return (  
        <main>
            <MapaIndividual/>
            <Graficos 
                cluster={"/cluster5.csv"}
                color={"#2ecc71"}
                name={"Cluster 5"}
            />
        </main>
    );
}

export default Cluster5;