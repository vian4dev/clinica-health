import { BannerInfo } from '../../BannerInfo'

export default function AdicionarTratamento() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Tratamento
      </h1>
      <BannerInfo
        title="Adicionar Tratamento"
        titleButton="Adicionar  Tratamento"
        link="./adicionarConsultas"
      />

      <form className="mx-auto max-w-lg gap-3">
        {' '}
        Descrição do Tratamento, Consulta, Medicamento
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Descrição do Tratamento
        </label>
        <input
          type="text"
          id="email"
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
        />
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Consulta
        </label>
        <input
          type="text"
          id="email"
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
        />
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Medicamentos
        </label>
        <input
          type="email"
          id="email"
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
        />
        <div className="flex items-center gap-2">
          <button type="button" className="text-zinc-100">
            z Cancel
          </button>
          <button type="submit" className="text-zinc-100">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
