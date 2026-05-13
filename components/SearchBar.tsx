"use client"

import { useState } from "react"

type Props = {

 onSearch:(value:string)=>void

}

export default function SearchBar({
 onSearch
}:Props){

 const [search,setSearch] = useState("")

 return(

  <div className="
  max-w-3xl
  mx-auto
  mb-16
  ">

   <input
    value={search}

    onChange={(e)=>{

     setSearch(e.target.value)

     onSearch(e.target.value)

    }}

    placeholder="
    Pesquisar Bitcoin,
    Ethereum, ETFs...
    "

    className="
    w-full
    bg-white/5
    border
    border-white/10
    rounded-2xl
    px-6
    py-5
    text-white
    outline-none
    focus:border-purple-500
    "
   />

  </div>

 )

}
