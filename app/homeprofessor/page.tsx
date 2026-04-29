'use client'

import Image from 'next/image'
import {
  LayoutDashboard,
  Repeat,
  Undo2,
  Box,
  Users,
  LogOut,
  Search,
  Bell,
  Settings,
} from 'lucide-react'

export default function HomeProfessor() {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between">
        <div>
          <div className="p-5 font-bold text-blue-800 text-lg">
            SIGE
          </div>

          <div className="px-4 mb-4">
            <button className="w-full bg-blue-700 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition">
              + Novo Empréstimo
            </button>
          </div>

          <nav className="px-3 space-y-1 text-sm">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 border-l-4 border-blue-600">
              <LayoutDashboard size={16} /> Painel
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
              <Repeat size={16} /> Empréstimo
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
              <Undo2 size={16} /> Devolução
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
              <Box size={16} /> Itens
            </div>

            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
              <Users size={16} /> Usuários
            </div>
          </nav>
        </div>

        <div className="p-4 text-sm text-gray-500 flex items-center gap-2 hover:text-gray-700 cursor-pointer">
          <LogOut size={16} /> Sair
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

          {/* ESQUERDA */}
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

              {/* CARD PROJETOR */}
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

                  <button className="w-full bg-blue-50 text-blue-700 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                    Alugar Item
                  </button>
                </div>
              </div>

              {/* CARD CHAVE */}
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

                  <button className="w-full bg-blue-50 text-blue-700 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                    Alugar Item
                  </button>
                </div>
              </div>

            </div>

            {/* TABELA */}
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
                    <td>12 Out</td>
                    <td>14 Out</td>
                    <td>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Devolvido
                      </span>
                    </td>
                    <td className="text-blue-600 cursor-pointer hover:underline">
                      Detalhes
                    </td>
                  </tr>

                  <tr className="border-t hover:bg-gray-50 transition">
                    <td className="py-3">Projetor Epson 4</td>
                    <td>28 Set</td>
                    <td>05 Out</td>
                    <td>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Devolvido
                      </span>
                    </td>
                    <td className="text-blue-600 cursor-pointer hover:underline">
                      Detalhes
                    </td>
                  </tr>

                  <tr className="border-t hover:bg-gray-50 transition">
                    <td className="py-3">Chave Laboratorio T03</td>
                    <td>15 Set</td>
                    <td>17 Set</td>
                    <td>
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        Atrasado
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

          {/* DIREITA */}
          <div className="space-y-4">

            <div className="bg-white rounded-xl shadow-sm border p-4">
              <h3 className="font-semibold mb-3">
                Meus Itens Ativos
              </h3>

              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-orange-400 mb-3">
                <div className="font-medium text-sm">Projetor Epson</div>
                <div className="text-xs text-gray-500 mt-1">
                  Vence em 2 horas
                </div>
                <div className="text-xs text-orange-600 font-medium mt-1">
                  Devolver em breve
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500">
                <div className="font-medium text-sm">Chave Laboratorio C26</div>
                <div className="text-xs text-gray-500 mt-1">
                  Vence em 2 horas
                </div>
                <div className="text-xs text-blue-600 font-medium mt-1">
                  Ativo
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Total Emprestado: <b>2 Itens</b><br />
                Atrasados: <b className="text-red-500">0 Itens</b>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}