import { BannerInfo } from "../BannerInfo";
import TableMedicamentos from "./TableMedicamentos";

// `app/page.tsx` is the UI for the `/` URL
export default function Medicamentos() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Medicamentos
      </h1>
      <BannerInfo 
          title="Adicionar Medicamentos"
          titleButton="Adicionar Medicamentos"
          link="./medicamentos/adicionarMedicamentos"
        />
      <TableMedicamentos />
    </div>
  )
  }