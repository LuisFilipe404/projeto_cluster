import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' // importar o router

import Cluster1 from './components/Clusters/Cluster1'
import Cluster2 from './components/Clusters/Cluster2'
import Cluster3 from './components/Clusters/Cluster3'
import Cluster4 from './components/Clusters/Cluster4'
import Cluster5 from './components/Clusters/Cluster5'
import Cluster6 from './components/Clusters/Cluster6'
import Cluster7 from './components/Clusters/Cluster7'

import NavBar from './components/Layout/NavBar/NavBar' // importar barra de navegação
import Main from './components/Main/Main' // importar o main

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="cluster1" element={<Cluster1/>} />
        <Route path="cluster2" element={<Cluster2/>} />
        <Route path="cluster3" element={<Cluster3/>} />
        <Route path="cluster4" element={<Cluster4/>} />
        <Route path="cluster5" element={<Cluster5/>} />
        <Route path="cluster6" element={<Cluster6/>} />
        <Route path="cluster7" element={<Cluster7/>} />
      </Routes>
    </Router>
  )
}

export default App