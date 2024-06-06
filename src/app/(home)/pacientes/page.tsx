import { BannerInfo } from '../BannerInfo'
import TablePacientes from './TablePacientes'

// `app/page.tsx` is the UI for the `/` URL
export default function Pacientes() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Pacientes
      </h1>
      <BannerInfo
        title="Adicionar Pacientes"
        titleButton="Adicionar Pacientes"
        link="./pacientes/adicionarPacientes"
      />
      <TablePacientes />
    </div>
  )
}
