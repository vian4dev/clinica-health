import { BannerInfo } from '../BannerInfo'
import TableTratamento from './TableTratamento'

// `app/page.tsx` is the UI for the `/` URL
export default function Pacientes() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Tratamento
      </h1>
      <BannerInfo
        title="Adicionar Tratamento"
        titleButton="Adicionar Tratamento"
        link="./tratamento/adicionarTratamento"
      />
      <TableTratamento />
    </div>
  )
}
