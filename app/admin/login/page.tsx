"use client"

import { useState } from "react"

export default function AdminLogin(){

 const [user,setUser] = useState("")
 const [password,setPassword] = useState("")

 function login(){

  if(
   user === "defimind" &&
   password === "25963411J@o"
  ){

   localStorage.setItem("admin-auth","true")

   window.location.href = "/admin"

  }else{

   alert("Acesso negado")

  }

 }

 return(

  <main className="
  min-h-screen
  flex
  items-center
  justify-center
  px-6
  ">

   <div className="
   card
   p-10
   w-full
   max-w-md
   ">

    <div className="
    text-purple-400
    mb-3
    ">
     Área Restrita
    </div>

    <h1 className="
    text-4xl
    font-black
    mb-8
    ">
     Login Admin
    </h1>

    <div className="space-y-4">

     <input
      value={user}
      onChange={(e)=>setUser(e.target.value)}
      placeholder="Usuário"
      className="
      w-full
      bg-black/20
      border
      border-white/10
      rounded-2xl
      px-4
      py-4
      outline-none
      "
     />

     <input
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Senha"
      className="
      w-full
      bg-black/20
      border
      border-white/10
      rounded-2xl
      px-4
      py-4
      outline-none
      "
     />

     <button
      onClick={login}
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

   </div>

  </main>

 )
}
