import Graficos from "../Layout/Gráficos Separados/Graficos";
import MapaIndividual from "../Layout/Mapa Individual/MapaCluster1";

function Cluster1() {

    return (  
        <main>
            <MapaIndividual/>
            <Graficos 
                cluster={"/cluster1.csv"}
                color={"#f1c40f"}
                name={"Cluster 1"}
            />
        </main>
    );
}

export default Cluster1;