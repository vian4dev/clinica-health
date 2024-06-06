"use client";

import { useState, useEffect } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { Pencil, Trash } from "lucide-react";

interface Medico {
    id: number;
    nome: string;
    crm: string;
    especialidade: { descricao: string };
    departamento: { nome: string };
}

export default function TableMedicos() {
    const [medicos, setMedicos] = useState<Medico[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedMedico, setSelectedMedico] = useState<Medico | null>(null);

    useEffect(() => {
        const fetchMedicos = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/medico/listar');
                const data = await response.json();
                setMedicos(data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar médicos:', error);
                setLoading(false);
            }
        };

        fetchMedicos();
    }, []);

    const deleteMedico = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/medico/deletar/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setMedicos(medicos.filter((medico) => medico.id !== id));
            } else {
                console.error('Erro ao excluir médico');
            }
        } catch (error) {
            console.error('Erro ao excluir médico:', error);
        }
    };

    const editMedico = (medico: Medico) => {
        setSelectedMedico(medico);
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedMedico(null);
    };

    const atualizarMedico = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/medico/atualizar/${id}`, {
                method: 'PUT',
            });

            if (response.ok) {
                setMedicos(medicos.filter((medico) => medico.id !== id));
            } else {
                console.error('Erro ao atualizar médico');
            }
        } catch (error) {
            console.error('Erro ao atualizar médico:', error);
        }
    };


    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Nome</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">CRM</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Especialidade</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Departamento</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medicos.map((medico) => (
                                    <tr key={medico.id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{medico.nome}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{medico.crm}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{medico.especialidade.descricao}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{medico.departamento.nome}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button 
                                                type="button" 
                                                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                                                onClick={() => editMedico(medico)}
                                            >
                                                <Pencil />
                                            </button>
                                            <button 
                                                type="button" 
                                                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-pink-600 hover:text-pink-800 disabled:opacity-50 disabled:pointer-events-none dark:text-pink-500 dark:hover:text-pink-400"
                                                onClick={() => deleteMedico(medico.id)}
                                            >
                                                <Trash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {selectedMedico && (
                <Modal show={openModal} size="md" onClose={handleModalClose} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Editar Médico</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="nome" value="Nome" />
                                </div>
                                <TextInput
                                    id="nome"
                                    defaultValue={selectedMedico.nome}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="crm" value="CRM" />
                                </div>
                                <TextInput
                                    id="crm"
                                    defaultValue={selectedMedico.crm}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="especialidade" value="Especialidade" />
                                </div>
                                <TextInput
                                    id="especialidade"
                                    defaultValue={selectedMedico.especialidade.descricao}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="departamento" value="Departamento" />
                                </div>
                                <TextInput
                                    id="departamento"
                                    defaultValue={selectedMedico.departamento.nome}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <Button 
                                    onClick={handleModalClose}
                                    onChange={atualizarMedico(selectedMedico.id)}
                                    >Salvar</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}
