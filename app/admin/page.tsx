"use client"

import Header from "@/components/Header"

const stats = [

 {
  title:"Total de Cliques",
  value:"12,483"
 },

 {
  title:"Notícias Publicadas",
  value:"42"
 },

 {
  title:"Moedas Pesquisadas",
  value:"1,208"
 },

 {
  title:"Usuários Online",
  value:"318"
 }

]

export default function Admin(){

 if(
  typeof window !== "undefined"
 ){

  const auth =
  localStorage.getItem("admin-auth")

  if(auth !== "true"){

   window.location.href =
   "/admin/login"

   return null

  }

 }

 return(

  <main className="min-h-screen">

   <Header />

   <section className="
   max-w-7xl
   mx-auto
   px-6
   py-20
   ">

    <div className="
    flex
    items-center
    justify-between
    mb-12
    ">

     <div>

      <div className="
      text-purple-400
      mb-2
      ">
       Painel DeFiMind
      </div>

      <h1 className="
      text-5xl
      font-black
      ">
       Admin Dashboard
      </h1>

     </div>

     <button
      onClick={()=>{
       localStorage.removeItem("admin-auth")
       window.location.href = "/"
      }}
      className="
      bg-purple-600
      px-6
      py-3
      rounded-2xl
      font-bold
      "
     >
      Sair
     </button>

    </div>

    <div className="
    grid
    md:grid-cols-2
    lg:grid-cols-4
    gap-6
    mb-12
    ">

     {stats.map((item,index)=>(

      <div
       key={index}
       className="
       card
       p-6
       "
      >

       <div className="
       text-white/50
       text-sm
       mb-2
       ">
        {item.title}
       </div>

       <div className="
       text-4xl
       font-black
       ">
        {item.value}
       </div>

      </div>

     ))}

    </div>

   </section>

  </main>

 )

}
