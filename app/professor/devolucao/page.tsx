'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRightLeft,
  Bell,
  Search,
} from 'lucide-react'

export default function DevolucoesPage() {

  // ✅ FORMATO: dd/mm/aaaa hh:mm
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
          <div className="flex items-center border rounded-lg px-3 py-1.5 bg-white shadow-sm">
            <Search size={16} className="text-gray-400"/>
            <input
              placeholder="Buscar por item ou código..."
              className="ml-2 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="text-gray-500"/>
            <div className="text-sm">
              <div className="font-medium">Prof. Bezerra</div>
              <div className="text-gray-500 text-xs">
                Ciência da Computação
              </div>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"/>
          </div>
        </div>

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">
            Histórico de Devoluções
          </h1>
          <p className="text-sm text-gray-500">
            Visualize todos os seus equipamentos devolvidos.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-6">

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-xs text-gray-500 mb-1">
              TOTAL DE DEVOLUÇÕES
            </p>
            <h2 className="text-2xl font-bold text-blue-700">
              128
            </h2>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-xs text-gray-500 mb-1">
              ITENS ESTE MÊS
            </p>
            <h2 className="text-2xl font-bold text-blue-700">
              14
            </h2>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-xs text-gray-500 mb-1">
              CONDIÇÃO MÉDIA
            </p>
            <h2 className="text-lg font-semibold text-green-600">
              Excelente
            </h2>
          </div>

        </div>

        {/* FILTROS */}
        <div className="bg-white rounded-xl border shadow-sm p-4 flex gap-3 mb-6">
          <button className="border px-4 py-2 rounded-lg text-sm bg-gray-50">
            Tipo de Equipamento
          </button>

          <button className="border px-4 py-2 rounded-lg text-sm bg-gray-50">
            Filtros Avançados
          </button>

          <button className="border px-4 py-2 rounded-lg text-sm bg-gray-50">
            Período
          </button>
        </div>

        {/* TABELA */}
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">

          {/* HEADER */}
          <div className="grid grid-cols-5 text-xs text-gray-500 px-6 py-3 border-b bg-gray-50">
            <div>ITEM</div>
            <div>DATA</div>
            <div>CONDIÇÃO</div>
            <div>RESPONSÁVEL</div>
            <div className="text-right">RECIBO</div>
          </div>

          {/* LINHAS */}
          {[
            {
              nome: 'Chave Laboratório D88',
              data: new Date('2026-04-12T10:30:00'),
              status: 'PERFEITO',
              cor: 'green',
              user: 'Ana Ferreira',
              img: '/images/chave.jpg',
            },
            {
              nome: 'Projetor Sony 4K',
              data: new Date('2026-04-08T09:15:00'),
              status: 'DESGASTE',
              cor: 'yellow',
              user: 'Carlos Mendes',
              img: '/images/projetor.jpg',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-5 items-center px-6 py-4 border-b hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.img}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-md object-cover"
                />
                <span className="text-sm font-medium">
                  {item.nome}
                </span>
              </div>

              {/* ✅ DATA FORMATADA FINAL */}
              <div className="text-sm">
                {formatDate(item.data)}
              </div>

              <div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium
                  ${item.cor === 'green' && 'bg-green-100 text-green-700'}
                  ${item.cor === 'yellow' && 'bg-yellow-100 text-yellow-700'}
                `}>
                  {item.status}
                </span>
              </div>

              <div className="text-sm">{item.user}</div>

              <div className="text-right">
                <button className="text-blue-600 text-sm hover:underline">
                  Ver comprovante
                </button>
              </div>
            </div>
          ))}

        </div>

      </main>
    </div>
  )
}