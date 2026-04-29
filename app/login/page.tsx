'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex">

      {/* 🔵 LADO ESQUERDO - IMAGEM */}
      <div className="hidden md:flex w-1/2 relative">

        <img
          src="/images/login-bg.jpg"
          className="absolute w-full h-full object-cover"
        />

        {/* overlay azul */}
        <div className="absolute w-full h-full bg-blue-900/70" />

      </div>

      {/* ⚪ LADO DIREITO - LOGIN */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-4">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border">

          {/* Header */}
          <div className="bg-blue-800 text-white text-center py-6 px-4">
            <h1 className="text-lg font-semibold">SIGE</h1>
            <p className="text-xs opacity-80 mt-1">
              Sistema Integrado de Gestão de Equipamentos
            </p>
          </div>

          {/* Conteúdo */}
          <div className="p-6">

            <h2 className="text-center text-xl font-semibold text-gray-800">
              Bem-vindo de volta
            </h2>
            <p className="text-center text-sm text-gray-500 mb-6">
              Insira suas credenciais
            </p>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail Institucional
              </label>
              <input
                type="email"
                placeholder="admin@unifor.edu.br"
                className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
              />
            </div>

            {/* Senha */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-gray-700">
                  Senha
                </label>
                <span className="text-xs text-blue-600 hover:underline cursor-pointer">
                  Suporte
                </span>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800"
                >
                  👁
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mt-4 mb-5">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-700"
              />
              <span className="text-sm text-gray-600">
                Lembrar desta estação
              </span>
            </div>

            {/* Botão */}
            <button className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2.5 rounded-lg font-medium transition shadow">
              Entrar
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">
                OU CONTINUE COM
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* SSO */}
            <button className="w-full border border-gray-300 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
              Entrar com Single Sign-On
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 py-4 border-t bg-gray-50">
            <div className="flex justify-center gap-4 mb-1">
              <span className="hover:text-gray-700 cursor-pointer">
                Suporte
              </span>
              <span className="hover:text-gray-700 cursor-pointer">
                Privacidade
              </span>
              <span className="hover:text-gray-700 cursor-pointer">
                Contato
              </span>
            </div>
            <div className="text-[10px] text-gray-400">
              © 2024 Sistema de Gestão Universitária
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}