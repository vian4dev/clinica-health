import { BannerInfo } from "../BannerInfo";
import TableMedicos from "./TableMedicos";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Medicos
      </h1>
      <BannerInfo 
          title="Adicionar Medicos"
          titleButton="Adicionar Medicos"
          link="./medicos/adicionarMedicos"
        />
      <TableMedicos/>
    </div>
  )
  }