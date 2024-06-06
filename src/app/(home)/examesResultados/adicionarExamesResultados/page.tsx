import { BannerInfo } from '../../BannerInfo'

export default function AdicionarExamesResultados() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Exames e Resultados
      </h1>
      <BannerInfo
        title="Adicionar Exames e Resultados"
        titleButton="Adicionar Adicioanr Exames e Resultados"
        link="./adicionarConsultas"
      />

      <form className="mx-auto max-w-lg gap-3">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Data da Consulta
        </label>
        <input
          type="text"
          id="email"
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
        />

        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Paciente
        </label>
        <input
          type="text"
          id="email"
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
        />

        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Médicos
        </label>
        <input
          type="text"
          id="email"
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
        />

        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Sala
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
            Cancel
          </button>
          <button type="submit" className="text-zinc-100">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
