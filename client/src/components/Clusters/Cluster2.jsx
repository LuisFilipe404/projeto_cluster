import Graficos from "../Layout/Gráficos Separados/Graficos";
import MapaIndividual from "../Layout/Mapa Individual/MapaCluster2.jsx"

function Cluster2() {
    
    return (  
        <main>
            <MapaIndividual/>
            <Graficos 
                cluster={"/cluster2.csv"}
                color={"#3498db"}
                name={"Cluster 2"}
            />
        </main>
    );
}

export default Cluster2;