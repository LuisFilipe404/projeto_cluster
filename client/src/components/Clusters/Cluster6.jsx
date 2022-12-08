import Graficos from "../Layout/Gráficos Separados/Graficos";
import MapaIndividual from "../Layout/Mapa Individual/MapaCluster6.jsx"

function Cluster6() {
    return (  
        <main>
            <MapaIndividual/>
            <Graficos 
                cluster={"/cluster6.csv"}
                color={"#e67e22"}
                name={"Cluster 6"}
            />
        </main>
    );
}

export default Cluster6;