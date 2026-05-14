
import Image from "next/image"

export default function Header(){

  return(

    <header className="
    flex
    items-center
    justify-between
    p-6
    max-w-7xl
    mx-auto
    ">


<div className="
flex
items-center
gap-3
">

  <Image
    src="/logo.png"
    alt="DefiMind"
    width={50}
    height={50}
    className="rounded-xl"
  />

  <div>

    <div className="
    text-2xl
    font-black
    ">
      DefiMind
    </div>

    <div className="
    text-xs
    text-purple-400
    ">
      Crypto Intelligence
    </div>

  </div>

</div>

<nav className="
flex
items-center
gap-8
text-white/70
">

  <a
   href="/#mercado"
   className="hover:text-purple-400 transition"
  >
    Mercado
  </a>

  <a
   href="/#noticias"
   className="hover:text-purple-400 transition"
  >
    Notícias
  </a>

  <a
   href="/#ia"
   className="hover:text-purple-400 transition"
  >
    IA
  </a>

  <a
   href="/#trending"
   className="hover:text-purple-400 transition"
  >
    Trending
  </a>

</nav>

    </header>

  )

}
