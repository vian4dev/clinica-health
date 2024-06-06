'use client'
import { useState, FormEvent } from 'react'
import { BannerInfo } from '../../BannerInfo'

interface MedicoData {
  nome: string
  crm: string
  especialidade: {
    descricao: string
  }
  departamento: {
    nome: string
  }
}

export default function AdicionarMedicos() {
  const [nome, setNome] = useState<string>('')
  const [crm, setCrm] = useState<string>('')
  const [especialidade, setEspecialidade] = useState<string>('')
  const [departamento, setDepartamento] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    console.log(e)

    const data: MedicoData = {
      nome,
      crm,
      especialidade: { descricao: especialidade },
      departamento: { nome: departamento },
    }

    try {
      const response = await fetch(
        'http://localhost:3000/api/medico/registrar',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )

      if (response.ok) {
        // Sucesso
        console.log('Médico adicionado com sucesso')
      } else {
        // Erro
        console.error('Erro ao adicionar médico')
      }
    } catch (error) {
      console.error('Erro ao adicionar médico:', error)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Gerenciar Médicos
      </h1>
      <BannerInfo
        title="Adicionar Médicos"
        titleButton="Adicionar Médico"
        link="./adicionarConsultas"
      />

      <form className="mx-auto max-w-lg gap-3" onSubmit={handleSubmit}>
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Nome do médico"
        />

        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          CRM
        </label>
        <input
          type="text"
          name="crm"
          value={crm}
          onChange={(e) => setCrm(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="CRM do médico"
        />

        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Especialidade
        </label>
        <input
          type="text"
          name="especialidade"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Especialidade do médico"
        />

        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Departamento
        </label>
        <input
          type="text"
          name="departamento"
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Departamento do médico"
        />

        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg bg-zinc-800 px-4 py-2 text-zinc-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-zinc-800 px-4 py-2 text-zinc-100"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
