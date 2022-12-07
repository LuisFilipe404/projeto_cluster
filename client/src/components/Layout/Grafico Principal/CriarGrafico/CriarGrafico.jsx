// Bibliotecas do gráfico
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';

import styles from './CriarGrafico.module.css'; // Importar Css


function CriarGrafico({
                        labels,
                        dataListCluster1,
                        dataListCluster2,
                        dataListCluster3,
                        dataListCluster4,
                        dataListCluster5,
                        dataListCluster6,
                        dataListCluster7
}) {    

    // instancia dos graficos
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        zoomPlugin
    );


    // função de responsividade do gráfico
    const responsiveChart = () => {
        let largura = window.screen.width;

        console.log(largura);

        if (largura >= 1024) {
            return "200%"
        } else if (largura < 1024 && largura >= 968) {
            return "120%"
        } else if (largura < 968 && largura >= 764) {
            return "100%"
        } else if (largura < 764 && largura >= 300) {
            return "50%"
        }
    }

    const width = responsiveChart()
    
    const limiteGrafico = 10000 // Utilize um limite para limitar a distancia do zoom out do gráfico

    // dados recebidos do props
    const datasList = [
        {
            label: "Cluster 1",
            data: dataListCluster1,
            borderColor: "#f1c40f",
            pointBorderWidth: 0,
            hoverBackgroundColor: "none",
            hoverBorderCapStyle: "none",
            pointBackgroundColor: "transparent",
        },
        {
            label: "Cluster 2",
            data: dataListCluster2,
            borderColor: "#3498db",
            pointBorderWidth: 0,
            hoverBackgroundColor: "none",
            hoverBorderCapStyle: "none",
            pointBackgroundColor: "transparent",
        },
        {
            label: "Cluster 3",
            data: dataListCluster3,
            borderColor: "#95a5a6",
            pointBorderWidth: 0,
            hoverBackgroundColor: "none",
            hoverBorderCapStyle: "none",
            pointBackgroundColor: "transparent",
        },
        {
            label: "Cluster 4",
            data: dataListCluster4,
            borderColor: "#9b59b6",
            pointBorderWidth: 0,
            hoverBackgroundColor: "none",
            hoverBorderCapStyle: "none",
            pointBackgroundColor: "transparent",
        },
        {
            label: "Cluster 5",
            data: dataListCluster5,
            borderColor: "#2ecc71",
            pointBorderWidth: 0,
            hoverBackgroundColor: "none",
            hoverBorderCapStyle: "none",
            pointBackgroundColor: "transparent",
        },
        {
            label: "Cluster 6",
            data: dataListCluster6,
            borderColor: "#e67e22",
            pointBorderWidth: 0,
            hoverBackgroundColor: "none",
            hoverBorderCapStyle: "none",
            pointBackgroundColor: "transparent",
        },
        {
            label: "Cluster 7",
            data: dataListCluster7,
            borderColor: "#e74c3c",
            pointBorderWidth: 0,
            hoverBackgroundColor: "none",
            hoverBorderCapStyle: "none",
            pointBackgroundColor: "transparent",
        }
    ]
    
    // opções de inicialização do gráfico
    const options = {
        animation: {
            duration: 0
        },
        responsive: true,
        plugins: {
            tooltip: {
                titleAlign: 'center',
                titleFont: {
                    size: 15,
                },
                bodyFont: {
                    size: 17
                },
                footerFont: {
                    size: 100
                }
        
            },
            zoom: {
                limits: {
                    y: {min: 0, max: limiteGrafico},
                    y2: {min: -5, max: 5}
                },
                pan: {
                    enabled: true,
                },
                zoom: {
                    wheel: {
                    enabled: true,
                    },
                    pinch: {
                    enabled: true
                    },
                    mode: 'xy',
                    scaleMode: 'x'
              }
            }
        }
    }

    // opções de inserção de dados
    const data = {
        labels: labels,
        datasets: datasList
    }

    return (
        <div className={styles.criarGraficoContainer}>
            <h1>Gráfico Clusters</h1>
            <div>
                {/*Componente de criação de gráfico de barras*/}
                <Line
                    options={options}
                    data={data}
                    width={width}
                    height="130%"
                    redraw={true}
                />
            </div>
        </div>  
    );
}

export default CriarGrafico