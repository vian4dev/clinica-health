import { BannerInfo } from '../BannerInfo'

// `app/page.tsx` is the UI for the `/` URL
export default function Hospitalizacoes() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Hospitalizações
      </h1>
      <BannerInfo
        title="Adicionar Hospitalizações"
        titleButton="Adicionar Hospitalizações"
        link="./hospitalizacoes/adicionarHospitalizacoes"
      />
    </div>
  )
}
