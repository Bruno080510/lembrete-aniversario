import { useState } from 'react'

import './App.css'

import List from './components/List'
import data from './data'

function App() {
  const [birthdayList, setBirthdayList] = useState(data)
  const [reloadPage, setReloadPage] = useState()

  function limparLista() {
    setBirthdayList([])
  }

  return (
    <div>
      <main>
        <section className='container'>
          <h3>Lembrete de aniversário</h3>
          {birthdayList.length > 0 ?
            <h3>{birthdayList.length} Aniversários hoje</h3> :
            <h3>{birthdayList.length} Aniversário hoje</h3>
          }
          <List birthdayList={birthdayList} />
          <button onClick={limparLista}>Limpar lista</button>
          <button onClick={() => window.location.reload(false)}>Recarregar Página</button>
        </section>
      </main>
    </div>
  )
}

export default App

