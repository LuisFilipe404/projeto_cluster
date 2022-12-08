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

import styles from "./CriarGraficoUnico.module.css" // importar css


function CriarGraficoUnico({ labels, notifications, color, name}) {

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
            label: name,
            data: notifications,
            borderColor: color,
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
                    height="100%"
                    redraw={true}
                />
            </div>
        </div> 
    );
}

export default CriarGraficoUnico;