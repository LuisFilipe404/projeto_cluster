import { dsv } from "d3"; // importar o dsv para ler os arquivos csv e retornar o dado por meio da promessa
import { useEffect, useState } from "react"; // importar o useEffect para inicialização da página
import CriarGraficoUnico from "./Gerar Grafico Unico/CriarGraficoUnico"; // componente de criação de grafico
import styles from "./Graficos.module.css"; // importar css

function Graficos({cluster, color, name}) {


    const [notifications, setNotifications] = useState([]) // State para pegar os dados das notificações (eixo x)

    const [labels, setLabels] = useState([]) // State para pegar os dados das datas (eixo y)

    // pegar os dados dos csvs na inicialização da página
    useEffect(() => {
        dsv(';', cluster)
            .then((data) => {

                const dataList = []
                const labelsList = []

                /* o tipo do arquivo gerado é um JSON do formado:
                    {
                        notifications: "valor",
                        date: "valor",
                    }
                o ciclo vai ler os dados e armazenar enviar para os respectivos arrays
                */  

                for (let i = 0; i < data.length; i++) {
                    let notifications = data[i].Notifications
                    let date = data[i].Date

                    dataList.push(notifications)
                    labelsList.push(date)
                }

                // enviar para o state
                setNotifications(dataList)
                setLabels(labelsList)
            })
    }, [])

    return ( 
        <div className={styles.graficoPrincipalContainer}>
            <CriarGraficoUnico
                labels={labels}
                notifications={notifications}
                color={color}
                name={name}
            />
        </div>
    );
}

export default Graficos;