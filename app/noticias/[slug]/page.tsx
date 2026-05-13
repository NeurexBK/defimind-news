import Header from "@/components/Header"
import { news } from "@/data/news"

export default async function ArticlePage({
 params
}:any){

 const article = news.find(
  item => item.slug === params.slug
 )

 if(!article){

  return(

   <main className="
   min-h-screen
   flex
   items-center
   justify-center
   ">

    <div className="text-center">

     <h1 className="
     text-5xl
     font-black
     mb-4
     ">
      Notícia não encontrada
     </h1>

     <a
      href="/"
      className="
      bg-purple-600
      px-6
      py-3
      rounded-2xl
      inline-block
      mt-6
      "
     >
      Voltar
     </a>

    </div>

   </main>

  )

 }

 return(

  <main className="min-h-screen">

   <Header />

   <section className="
   max-w-4xl
   mx-auto
   px-6
   py-20
   ">

    <div className="
    flex
    items-center
    gap-4
    mb-6
    ">

     <div className="
     bg-purple-500/10
     text-purple-400
     px-4
     py-2
     rounded-full
     text-sm
     ">
      {article.category}
     </div>

     <div className="
     text-white/50
     text-sm
     ">
      Por Neurex AI
     </div>

    </div>

    <h1 className="
    text-6xl
    font-black
    leading-tight
    mb-8
    ">
      {article.title}
    </h1>

    <p className="
    text-2xl
    text-white/60
    leading-relaxed
    mb-12
    ">
      {article.excerpt}
    </p>

    <div className="
    card
    p-10
    text-lg
    leading-9
    whitespace-pre-line
    mb-10
    ">
      {article.content}
    </div>

    <div className="
    card
    p-8
    border
    border-purple-500/20
    ">

     <div className="
     text-purple-400
     mb-3
     ">
      Análise da Neurex AI
     </div>

     <h2 className="
     text-3xl
     font-bold
     mb-6
     ">
      Sentimento do Mercado
     </h2>

     <div className="
     flex
     items-center
     gap-4
     ">

      <div className="
      bg-purple-600
      px-4
      py-2
      rounded-full
      font-bold
      ">
       {article.sentiment}
      </div>

      <div className="text-white/60">
       Segundo os modelos da Neurex AI, o mercado continua apresentando forte atividade.
      </div>

     </div>

    </div>

    <div className="mt-12">

     <a
      href="/"
      className="
      glow
      bg-purple-600
      px-8
      py-4
      rounded-2xl
      font-bold
      inline-block
      "
     >
      Voltar para Home
     </a>

    </div>

   </section>

  </main>

 )

}
