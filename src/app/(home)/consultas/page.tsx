import { BannerInfo } from "../BannerInfo";
import TableConsultas from "./TableConsultas";


export default function Consultas() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Consultas
      </h1>
      <BannerInfo
        title="Lista de Consultas"
        titleButton="Adicionar Consulta"
        link="./consultas/adicionarConsultas"
      />
      <TableConsultas />
    </div>


  )
}