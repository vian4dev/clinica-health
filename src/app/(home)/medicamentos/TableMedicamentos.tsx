import { Pencil, Trash } from 'lucide-react'

export default function TableMedicamentos() {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="inline-block min-w-full p-1.5 align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Nome do Medicamento
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Receita
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Opções
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Titulo
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">
                    Titulo
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-pink-600 hover:text-pink-800 disabled:pointer-events-none disabled:opacity-50 dark:text-pink-500 dark:hover:text-pink-400"
                    >
                      <Pencil />
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-pink-600 hover:text-pink-800 disabled:pointer-events-none disabled:opacity-50 dark:text-pink-500 dark:hover:text-pink-400"
                    >
                      <Trash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
