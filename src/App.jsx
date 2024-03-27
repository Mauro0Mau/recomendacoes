import './global.css'
import estilos from './App.module.css'
import {Cabecalho} from './componentes/Cabecalho'
import {Lateral} from './componentes/Lateral'
import {Conteudo} from './componentes/Conteudo'

export function App() {
  return (
    <div className={estilos.gridConteiner}>
      <Cabecalho />
      <Lateral />
      <Conteudo />
    </div>
  )
}
