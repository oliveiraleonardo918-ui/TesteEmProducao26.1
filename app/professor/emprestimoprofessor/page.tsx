'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightLeft,
  Bell,
  Search,
} from 'lucide-react'

export default function EmprestimoPage() {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between">

        {/* TOPO */}
        <div>
          <div className="p-5 flex justify-center">
            <Image
            src="/images/logo-sige.png"
            alt="SIGE Logo"
            width={120}
            height={40}
            className="object-contain"/>
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

        {/* 🔴 BOTÃO SAIR CENTRALIZADO */}
        <div className="p-4 border-t flex justify-center">

          <button
            onClick={() => {
              window.location.href = "/"
            }}
            className="text-red-600 hover:text-red-700 text-sm font-medium transition"
          >
           Sair da conta
          </button>

        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">

        {/* TOPBAR */}
        <div className="flex justify-between items-center mb-6">

          <div className="flex items-center border rounded-lg px-3 py-1.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Pesquisar equipamentos..."
              className="ml-2 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="text-gray-500" />
            <div className="text-sm">
              <div className="font-medium">Prof. Bezerra</div>
              <div className="text-gray-500 text-xs">
                Departamento de TI
              </div>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Novo Empréstimo</h1>
          <p className="text-sm text-gray-500">
            Identifique o item para iniciar a solicitação.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">

          {/* ESQUERDA */}
          <div className="col-span-2 space-y-6">

            <button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
              📶 Escanear NFC
            </button>

            <div className="bg-white rounded-xl border shadow-sm p-8 text-center">

              <div className="text-5xl mb-4">📡</div>

              <h2 className="font-semibold text-lg">
                Aproxime o Dispositivo
              </h2>

              <p className="text-sm text-gray-500 mb-6">
                Aproxime o cartão NFC ou digite o código abaixo.
              </p>

              <input
                placeholder="Digite o código (ex: 2024-001)"
                className="border rounded-lg px-4 py-3 w-80 text-center mb-4 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

          </div>

          {/* DIREITA */}
          <div className="space-y-4">

            <div className="bg-white rounded-xl border shadow-sm p-4">
              <h3 className="font-semibold mb-3">
                Seus Itens Atuais
              </h3>

              <div className="flex gap-3 mb-3">
                <Image
                  src="/images/projetor.jpg"
                  alt="Projetor"
                  width={48}
                  height={48}
                  className="rounded-md object-cover border"
                />
                <div className="text-sm">
                  <div className="font-medium">Projetor Epson 4K</div>
                  <div className="text-xs text-gray-500">
                    Devolução em: 2h 15m
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Image
                  src="/images/chave.jpg"
                  alt="Chave"
                  width={48}
                  height={48}
                  className="rounded-md object-cover border"
                />
                <div className="text-sm">
                  <div className="font-medium">Chave Laboratório K11</div>
                  <div className="text-xs text-gray-500">
                    Devolução: Amanhã
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-blue-800 text-white rounded-xl p-4">
              <h3 className="font-semibold mb-2">Dica SIGE</h3>
              <p className="text-sm">
                Verifique cabos e acessórios antes de finalizar o empréstimo.
              </p>
            </div>

          </div>

        </div>

      </main>
    </div>
  )
}