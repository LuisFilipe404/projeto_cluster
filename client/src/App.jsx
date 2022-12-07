import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' // importar o router

import Main from './components/Main/Main' // importar o main

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
      </Routes>
    </Router>
  )
}

export default App