"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (!error) {

      router.push("/neurex-25852266602-admin")

    }

  }

  return (

    <main className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-black
    text-white
    ">

      <div className="
      w-full
      max-w-md
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-10
      ">

        <h1 className="
        text-4xl
        font-black
        mb-8
        ">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="
          w-full
          mb-4
          p-4
          rounded-2xl
          bg-black/30
          border
          border-white/10
          "
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="
          w-full
          mb-6
          p-4
          rounded-2xl
          bg-black/30
          border
          border-white/10
          "
        />

        <button
          onClick={handleLogin}
          className="
          w-full
          bg-purple-600
          py-4
          rounded-2xl
          font-bold
          "
        >
          Entrar
        </button>

      </div>

    </main>

  )

}
