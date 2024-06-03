import { BannerInfo } from "../BannerInfo";
import TableExamesResultados from "./TableExamesResultados";

// `app/page.tsx` is the UI for the `/` URL
export default function ExamesResultados() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Exames e Resultados
      </h1>
      <BannerInfo
        title="Adicionar Exames e Resultados"
        titleButton="Adicionar Exame"
        link="./examesResultados/adicionarExamesResultados"
      />
      <TableExamesResultados />
    </div>
  )
}