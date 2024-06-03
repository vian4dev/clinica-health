import { BannerInfo } from "../../BannerInfo";

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

      <form className="max-w-lg mx-auto gap-3"> Descrição do Tratamento, Consulta, Medicamento
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição do Tratamento</label>
        <input type="text" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consulta</label>
        <input type="text" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medicamentos</label>
        <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />

        <div className="flex items-center gap-2">
            <button type="button" className="text-zinc-100">z
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