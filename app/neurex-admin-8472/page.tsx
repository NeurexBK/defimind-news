import generatedNews from "@/data/generated-news.json"

export default function Admin(){

 return(

  <main className="
  min-h-screen
  bg-[#030712]
  text-white
  p-10
  ">

   <div className="
   max-w-7xl
   mx-auto
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
        mb-3
        ">
          Painel Interno
        </div>

        <h1 className="
        text-5xl
        font-black
        ">
          Neurex Admin
        </h1>

      </div>

      <a
       href="/"
       className="
       bg-purple-600
       px-6
       py-3
       rounded-2xl
       "
      >
        Voltar
      </a>

    </div>

    <div className="
    grid
    md:grid-cols-3
    gap-6
    mb-12
    ">

      <div className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      ">

        <div className="
        text-white/50
        mb-3
        ">
          Notícias
        </div>

        <div className="
        text-5xl
        font-black
        ">
          {generatedNews.length}
        </div>

      </div>

      <div className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      ">

        <div className="
        text-white/50
        mb-3
        ">
          Status IA
        </div>

        <div className="
        text-3xl
        font-black
        text-green-400
        ">
          ONLINE
        </div>

      </div>

      <div className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      ">

        <div className="
        text-white/50
        mb-3
        ">
          Atualização
        </div>

        <div className="
        text-3xl
        font-black
        ">
          15min
        </div>

      </div>

    </div>

    <div className="
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-8
    ">

      <h2 className="
      text-3xl
      font-black
      mb-8
      ">
        Últimas Notícias IA
      </h2>

      <div className="
      space-y-6
      ">

        {generatedNews.slice(0,10).map((item:any,index)=>(

          <div
           key={index}
           className="
           border-b
           border-white/10
           pb-6
           "
          >

            <div className="
            text-purple-400
            text-sm
            mb-2
            ">
              {item.sentiment}
            </div>

            <div className="
            text-2xl
            font-bold
            mb-2
            ">
              {item.title}
            </div>

            <div className="
            text-white/60
            ">
              {item.excerpt}
            </div>

          </div>

        ))}

      </div>

    </div>

   </div>

  </main>

 )

}
