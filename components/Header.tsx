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
      text-3xl
      font-black
      ">
        DeFiMind
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
