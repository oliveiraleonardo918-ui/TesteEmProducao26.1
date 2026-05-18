'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightLeft, Bell, Search, Menu } from 'lucide-react'
import { useState } from 'react'

export default function EmprestimoPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static z-50 top-0 left-0 h-full w-72
          bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/40
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-700/40">
          <Image src="/images/logo-sige.png" alt="logo" width={110} height={40} />
        </div>

        <nav className="px-3 py-4 space-y-2 text-sm">

          <Link
            href="/professor/homeprofessor"
            className="flex items-center gap-2 p-3 rounded-xl hover:bg-cyan-500/10"
          >
            <ArrowRightLeft size={16} className="text-cyan-400" />
            Dashboard
          </Link>

          <Link
            href="/professor/emprestimoprofessor"
            className="flex items-center gap-2 p-3 rounded-xl hover:bg-violet-500/10"
          >
            <ArrowRightLeft size={16} className="text-violet-400" />
            Empréstimos
          </Link>

          <Link
            href="/professor/devolucao"
            className="flex items-center gap-2 p-3 rounded-xl hover:bg-cyan-500/10"
          >
            <ArrowRightLeft size={16} className="text-cyan-400" />
            Devoluções
          </Link>

        </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-slate-700/40 flex justify-center">
          <button className="text-red-400 hover:text-red-300 text-sm font-semibold">
            Sair da conta
          </button>
        </div>
      </aside>

      <main className="flex-1 md:ml-72 p-4 md:p-8">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative">

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 bg-slate-800 rounded-lg w-fit"
          >
            <Menu />
          </button>

          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-700/40 px-4 py-2 rounded-xl w-full md:w-96">
            <Search size={16} className="text-slate-400" />
            <input
              placeholder="Pesquisar equipamentos..."
              className="w-full bg-transparent outline-none text-sm text-slate-200"
            />
          </div>

          <div className="absolute md:static right-0 top-0 flex items-center gap-3">
            <Bell className="text-slate-400" />

            <div className="text-right leading-tight">
              <div className="text-sm font-semibold">Prof. Bezerra</div>
              <div className="text-xs text-slate-400">TI</div>
            </div>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600" />
          </div>

        </div>

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
            Novo Empréstimo
          </h1>
          <p className="text-sm text-slate-400">
            Identifique o item para iniciar a solicitação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-6">

            <button className="w-full md:w-auto px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              📶 Escanear NFC
            </button>

            <div className="relative bg-slate-900/60 border border-slate-700/40 rounded-2xl p-6 md:p-10 text-center overflow-hidden">

              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-cyan-500/10 animate-ping" />
              </div>

              <div className="relative z-10 text-5xl mb-4">📡</div>

              <h2 className="relative z-10 text-lg font-semibold">
                Aguardando NFC
              </h2>

              <p className="relative z-10 text-sm text-slate-400 mb-6">
                Aproximando dispositivo...
              </p>

              <input
                placeholder="Digite o código"
                className="relative z-10 w-full md:w-80 px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/40 text-center outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

          </div>

          <div className="space-y-4">

            <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-4">

              <h3 className="font-semibold mb-3">Itens atuais</h3>

              <div className="flex gap-3 mb-3 items-center">
                <Image
                  src="/images/projetor.jpg"
                  alt="Projetor"
                  width={48}
                  height={48}
                  className="rounded-md object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm">Projetor Epson</div>
                  <div className="text-xs text-slate-400">2h restante</div>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Image
                  src="/images/chave.jpg"
                  alt="Chave"
                  width={48}
                  height={48}
                  className="rounded-md object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm">Chave Lab</div>
                  <div className="text-xs text-slate-400">Amanhã</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  )
}