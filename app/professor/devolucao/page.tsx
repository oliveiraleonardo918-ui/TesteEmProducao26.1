'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightLeft, Bell, Search, Menu } from 'lucide-react'
import { useState } from 'react'

export default function DevolucoesPage() {
  const [open, setOpen] = useState(false)

  const formatDate = (date = new Date()) => {
    const d = String(date.getDate()).padStart(2, '0')
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const y = date.getFullYear()
    const h = String(date.getHours()).padStart(2, '0')
    const min = String(date.getMinutes()).padStart(2, '0')
    return `${d}/${m}/${y} ${h}:${min}`
  }

  const menu = [
    { href: '/professor/homeprofessor', label: 'Dashboard' },
    { href: '/professor/emprestimoprofessor', label: 'Empréstimos' },
    { href: '/professor/devolucao', label: 'Devoluções' }
  ]

  const data = [
    {
      nome: 'Chave Laboratório D88',
      data: new Date('2026-04-12T10:30:00'),
      status: 'PERFEITO',
      cor: 'cyan',
      user: 'Ana Ferreira',
      img: '/images/chave.jpg',
    },
    {
      nome: 'Projetor Sony 4K',
      data: new Date('2026-04-08T09:15:00'),
      status: 'DESGASTE',
      cor: 'violet',
      user: 'Carlos Mendes',
      img: '/images/projetor.jpg',
    },
  ]

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed md:static z-50 top-0 left-0 h-full w-72
        bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/40
        transform transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-5 border-b border-slate-700/40 flex justify-center">
          <Image src="/images/logo-sige.png" alt="logo" width={110} height={40} />
        </div>

        <nav className="px-3 py-4 space-y-2 text-sm">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 p-3 rounded-xl text-slate-300 hover:text-white hover:bg-cyan-500/10"
            >
              <ArrowRightLeft size={16} className="text-cyan-400" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-700/40 flex justify-center">
          <button className="text-red-400 hover:text-red-300 text-sm font-semibold">
            Sair da conta
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 md:ml-72 p-4 md:p-8">

        {/* TOPBAR CORRIGIDO */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 bg-slate-800 rounded-lg w-fit"
          >
            <Menu />
          </button>

          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-700/40 px-4 py-2 rounded-xl w-full md:w-96">
            <Search size={16} className="text-slate-400" />
            <input
              placeholder="Buscar por item ou código..."
              className="w-full bg-transparent outline-none text-sm text-slate-200"
            />
          </div>

          {/* PERFIL NO CANTO DIREITO */}
          <div className="absolute md:static right-0 top-0 flex items-center gap-3">
            <Bell className="text-slate-400" />

            <div className="text-right leading-tight">
              <div className="text-sm font-semibold">Prof. Bezerra</div>
              <div className="text-xs text-slate-400">TI</div>
            </div>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600" />
          </div>

        </div>

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
            Histórico de Devoluções
          </h1>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-6">
            <p className="text-xs text-slate-400">TOTAL</p>
            <h2 className="text-3xl font-bold text-cyan-400 mt-2">128</h2>
          </div>

          <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-6">
            <p className="text-xs text-slate-400">MÊS</p>
            <h2 className="text-3xl font-bold text-violet-400 mt-2">14</h2>
          </div>

          <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-6">
            <p className="text-xs text-slate-400">CONDIÇÃO</p>
            <h2 className="text-xl font-semibold text-emerald-400 mt-2">
              Excelente
            </h2>
          </div>

        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap gap-3 mb-6">
          {['Tipo de Equipamento', 'Filtros Avançados', 'Período'].map((f) => (
            <button
              key={f}
              className="px-4 py-2 rounded-xl text-sm bg-slate-900/60 border border-slate-700/40 text-slate-300 hover:border-cyan-500/40 hover:text-white"
            >
              {f}
            </button>
          ))}
        </div>

        {/* TABELA SEM CORTES */}
        <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl overflow-x-auto">

          <div className="min-w-[700px] grid grid-cols-5 text-xs text-slate-400 px-6 py-4 border-b border-slate-700/40">
            <div>ITEM</div>
            <div>DATA</div>
            <div>CONDIÇÃO</div>
            <div>RESPONSÁVEL</div>
            <div className="text-right">RECIBO</div>
          </div>

          {data.map((item, i) => (
            <div
              key={i}
              className="min-w-[700px] grid grid-cols-5 items-center px-6 py-4 border-b border-slate-800 hover:bg-slate-800/40"
            >

              <div className="flex items-center gap-3">
                <Image src={item.img} alt="" width={40} height={40} className="rounded-lg" />
                {item.nome}
              </div>

              <div className="text-sm text-slate-400">
                {formatDate(item.data)}
              </div>

              <div>
                <span className="text-xs px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-300">
                  {item.status}
                </span>
              </div>

              <div className="text-sm">{item.user}</div>

              <div className="text-right text-cyan-400">
                Ver
              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  )
}