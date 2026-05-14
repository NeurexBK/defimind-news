import generatedNews from "@/data/generated-news.json"

export default function Admin(){

 return(

  <main className="
  min-h-screen
  bg-[#030712]
  text-white
  p-10
  ">

   <h1 className="
   text-5xl
   font-black
   mb-10
   ">
    DefiMind Admin
   </h1>

   <div className="space-y-6">

    {generatedNews.map((item,index)=>(

     <div
      key={index}
      className="
      p-6
      rounded-3xl
      border
      border-white/10
      bg-white/5
      "
     >

      <div className="
      text-purple-400
      text-sm
      mb-2
      ">
       {item.category}
      </div>

      <h2 className="
      text-2xl
      font-bold
      mb-3
      ">
       {item.title}
      </h2>

      <p className="text-white/70">
       {item.excerpt}
      </p>

     </div>

    ))}

   </div>

  </main>

 )

}
