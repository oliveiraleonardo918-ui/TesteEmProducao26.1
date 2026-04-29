'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Search,
  Bell,
  Settings,
  ArrowRightLeft,
} from 'lucide-react'

export default function HomeProfessor() {

  // ✅ FORMATAÇÃO DE DATA (dd/mm/aaaa hh:mm)
  const formatDate = (date = new Date()) => {
    const d = String(date.getDate()).padStart(2, '0')
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const y = date.getFullYear()

    const h = String(date.getHours()).padStart(2, '0')
    const min = String(date.getMinutes()).padStart(2, '0')

    return `${d}/${m}/${y} ${h}:${min}`
  }

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between">
        <div>
          <div className="p-5">
            <h1 className="text-lg font-bold text-blue-800">SIGE</h1>
            <p className="text-xs text-gray-500">
              Sistema de Gestão de Equipamentos
            </p>
          </div>

          <nav className="px-3 space-y-1 text-sm">

            <Link
              href="/professor/homeprofessor"
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowRightLeft size={16}/> Dashboard
            </Link>

            <Link
              href="/professor/emprestimoprofessor"
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowRightLeft size={16}/> Empréstimos
            </Link>

            <Link
              href="/professor/devolucao"
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowRightLeft size={16}/> Devoluções
            </Link>

          </nav>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">

        {/* TOPBAR */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">
              Bem-vindo de volta, Prof. Bezerra
            </h1>
            <p className="text-sm text-gray-500">
              Acesse rapidamente equipamentos disponíveis e gerencie seus empréstimos atuais.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-lg px-3 py-1.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <Search size={16} className="text-gray-400" />
              <input
                placeholder="Buscar equipamento..."
                className="ml-2 outline-none text-sm"
              />
            </div>

            <Bell size={18} className="text-gray-500 cursor-pointer" />
            <Settings size={18} className="text-gray-500 cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-6">

          {/* ESQUERDA - SEUS CARDS MANTIDOS */}
          <div className="col-span-2 space-y-6">

            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">
                Equipamentos Disponíveis
              </h2>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                Ver Todos →
              </span>
            </div>

            <div className="grid grid-cols-2 gap-5">

              {/* CARD PROJETOR (SEM ALTERAÇÃO) */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden transition hover:shadow-md hover:-translate-y-1">
                <div className="relative">
                  <Image
                    src="/images/projetor.jpg"
                    alt="Projetor"
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full shadow-sm">
                    DISPONÍVEL
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-[15px]">
                    Projetor Laser Sony 4K
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 mb-4">
                    Projetor de alto brilho adequado para grandes auditórios e apresentações...
                  </p>

                  <Link
                    href="/professor/emprestimoprofessor"
                    className="block w-full text-center bg-blue-50 text-blue-700 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                  >
                    Alugar Item
                  </Link>
                </div>
              </div>

              {/* CARD CHAVE (SEM ALTERAÇÃO) */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden transition hover:shadow-md hover:-translate-y-1">
                <div className="relative">
                  <Image
                    src="/images/chave.jpg"
                    alt="Chave"
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full shadow-sm">
                    DISPONÍVEL
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-[15px]">
                    Chave de Entrada do Laboratório K10
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 mb-4">
                    Chave mestra para o laboratório de robótica avançada.
                  </p>

                  <Link
                    href="/professor/emprestimoprofessor"
                    className="block w-full text-center bg-blue-50 text-blue-700 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                  >
                    Alugar Item
                  </Link>
                </div>
              </div>

            </div>

            {/* HISTÓRICO (SÓ DATA FORMATADA AQUI) */}
            <div className="bg-white rounded-xl shadow-sm border p-4">
              <h3 className="font-semibold mb-4">
                Histórico Recente de Empréstimos
              </h3>

              <table className="w-full text-sm">
                <thead className="text-gray-500 text-xs uppercase tracking-wide text-left">
                  <tr>
                    <th>Nome do Item</th>
                    <th>Emprestado</th>
                    <th>Devolvido</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t hover:bg-gray-50 transition">
                    <td className="py-3">Chave Laboratorio D44</td>

                    {/* ✅ DATA FORMATADA */}
                    <td>{formatDate(new Date('2026-04-12T10:30:00'))}</td>
                    <td>{formatDate(new Date('2026-04-14T15:45:00'))}</td>

                    <td>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Devolvido
                      </span>
                    </td>

                    <td className="text-blue-600 cursor-pointer hover:underline">
                      Detalhes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* DIREITA (SEM ALTERAÇÃO) */}
          <div className="space-y-4">

            <div className="bg-white rounded-xl shadow-sm border p-4">
              <h3 className="font-semibold mb-3">
                Meus Itens Ativos
              </h3>

              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-orange-400 mb-3">
                <div className="font-medium text-sm">Projetor Epson</div>
                <div className="text-xs text-gray-500 mt-1">
                  Vence em: {formatDate()}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500">
                <div className="font-medium text-sm">Chave Laboratorio C26</div>
                <div className="text-xs text-gray-500 mt-1">
                  Ativo desde: {formatDate(new Date('2026-04-28T08:00:00'))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  )
}