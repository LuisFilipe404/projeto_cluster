import Graficos from "../Layout/Gráficos Separados/Graficos";
import MapaIndividual from "../Layout/Mapa Individual/MapaCluster7.jsx"

function Cluster7() {
    return (  
        <main>
            <MapaIndividual/>
            <Graficos 
                cluster={"/cluster7.csv"}
                color={"#e74c3c"}
                name={"Cluster 7"}
            />
        </main>
    );
}

export default Cluster7;