import { useEffect, useState } from 'react'; // importar useEffect para carregar os arquivos na inicialização da pagina e armazernar em states

import { dsv } from 'd3'; // biblioteca de leitura de csv

import styles from './GraficoPrincipal.module.css'; // importar css
import CriarGrafico from './CriarGrafico/CriarGrafico'; // importar componente de criação

function GraficoPrincipal() {

    
    const [dates, setdates] = useState([]) // State para pegar as datas (year, month day) dos csvs e utilizar como label do eixo x do gráfico

    // states para pegar os dados do eixo y de cada csv
    const [notificationsCluster1, setnotificationsCluster1] = useState([])
    const [notificationsCluster2, setnotificationsCluster2] = useState([])
    const [notificationsCluster3, setnotificationsCluster3] = useState([])
    const [notificationsCluster4, setnotificationsCluster4] = useState([])
    const [notificationsCluster5, setnotificationsCluster5] = useState([])
    const [notificationsCluster6, setnotificationsCluster6] = useState([])
    const [notificationsCluster7, setnotificationsCluster7] = useState([])

    // effect para pegar por meio de promisses todos os csvs setados e retornar para o state as datas e as notificações, será executado assim que a página carregar
    useEffect(() => {

        // a promessa recebe o delimitador usado no csv e o arquivo e resgata os dados no .then
        dsv(';','/cluster1.csv')
            .then((data) => {
                // arrays para armazenar os valores que serão mandados para o state
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
                setnotificationsCluster1(dataList)
                setdates(labelsList)
        })

        dsv(';','/cluster2.csv')
            .then((data) => {

                const dataList = []

                for (let i = 0; i < data.length; i++) {
                    let notifications = data[i].Notifications
                    dataList.push(notifications)
                }

                setnotificationsCluster2(dataList)
        })

        dsv(';','/cluster2.csv')
            .then((data) => {
                
                const dataList = []

                for (let i = 0; i < data.length; i++) {
                    let notifications = data[i].Notifications
                    
                    dataList.push(notifications)
                }

                setnotificationsCluster2(dataList)
        })

        dsv(';','/cluster3.csv')
            .then((data) => {
                
                const dataList = []

                for (let i = 0; i < data.length; i++) {
                    let notifications = data[i].Notifications

                    dataList.push(notifications)
                }

                setnotificationsCluster3(dataList)
        })

        dsv(';','/cluster4.csv')
            .then((data) => {
                
                const dataList = []

                for (let i = 0; i < data.length; i++) {
                    let notifications = data[i].Notifications
                    
                    dataList.push(notifications)
                }

                setnotificationsCluster4(dataList)
        })

        dsv(';','/cluster5.csv')
            .then((data) => {
                
                const dataList = []

                for (let i = 0; i < data.length; i++) {
                    let notifications = data[i].Notifications

                    dataList.push(notifications)
                }

                setnotificationsCluster5(dataList)
        })

        dsv(';','/cluster6.csv')
            .then((data) => {
                
                const dataList = []

                for (let i = 0; i < data.length; i++) {
                    let notifications = data[i].Notifications
                    
                    dataList.push(notifications)
                }

                setnotificationsCluster6(dataList)
        })

        dsv(';','/cluster7.csv')
            .then((data) => {
                
                const dataList = []

                for (let i = 0; i < data.length; i++) {
                    let notifications = data[i].Notifications
                    
                    dataList.push(notifications)
                }

                setnotificationsCluster7(dataList)
        })

    }, [])


    return ( 
        <div className={styles.graficoPrincipalContainer}>
            <div>
                {/*Componente de criação do gráfico*/}
                <CriarGrafico
                    labels={dates}
                    dataListCluster1={notificationsCluster1}
                    dataListCluster2={notificationsCluster2}
                    dataListCluster3={notificationsCluster3}
                    dataListCluster4={notificationsCluster4}
                    dataListCluster5={notificationsCluster5}
                    dataListCluster6={notificationsCluster6}
                    dataListCluster7={notificationsCluster7}
                />
            </div>
        </div>
    );
}

export default GraficoPrincipal;