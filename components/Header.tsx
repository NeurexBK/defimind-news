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
      gap-6
      text-white/70
      text-sm
      ">
        <a href="/mercado">Mercado</a>
        <a href="#">Notícias</a>
        <a href="#">IA</a>
        <a href="#">Trending</a>
      </nav>

    </header>

  )

}
