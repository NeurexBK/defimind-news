"use client"

import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function Newsletter(){

  const [email,setEmail] = useState("")
  const [success,setSuccess] = useState(false)

async function handleSubscribe(){

  if(!email) return

  const { error } = await supabase
  .from("subscribers")
  .insert([
    {
      email
    }
  ])

  if(error){

    console.log(error)

    return

  }

  setSuccess(true)

  setEmail("")

}

  return(

    <section className="
    max-w-4xl
    mx-auto
    px-6
    py-24
    ">

      <div className="
      p-10
      rounded-3xl
      border
      border-white/10
      bg-white/5
      text-center
      ">

        <div className="
        text-purple-400
        mb-4
        text-sm
        ">
          📧 NEWSLETTER
        </div>

        <h2 className="
        text-5xl
        font-black
        mb-6
        ">
          Receba notícias crypto
          em primeira mão
        </h2>

        <p className="
        text-white/60
        mb-10
        text-lg
        ">
          Atualizações de Bitcoin,
          Ethereum, ETFs,
          IA e mercado crypto.
        </p>

        <div className="
        flex
        flex-col
        md:flex-row
        gap-4
        justify-center
        ">

          <input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
            className="
            bg-black/30
            border
            border-white/10
            rounded-2xl
            px-6
            py-4
            w-full
            md:w-[400px]
            outline-none
            "
          />

          <button
            onClick={handleSubscribe}
            className="
            bg-purple-600
            hover:bg-purple-500
            transition
            px-8
            py-4
            rounded-2xl
            font-bold
            "
          >
            Inscrever
          </button>

        </div>

        {success && (

          <div className="
          text-green-400
          mt-6
          ">
            ✅ Email cadastrado com sucesso
          </div>

        )}

      </div>

    </section>

  )

}
