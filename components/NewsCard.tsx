type Props = {

  title:string
  excerpt:string
  sentiment:string
  slug:string

}

export default function NewsCard({

  title,
  excerpt,
  sentiment,
  slug

}:Props){


console.log(slug)

  return(

    <a
      href={`/noticias/${slug}`}
      className="
      block
      card
      p-6
      hover:scale-[1.02]
      transition
      duration-300
      hover:border-purple-500
      "
    >

      <div className="
      flex
      items-center
      justify-between
      mb-4
      ">

        <div className="
        text-purple-400
        text-xs
        ">
          Por Neurex AI
        </div>

        <div className="
        text-xs
        text-white/50
        ">
          {sentiment}
        </div>

      </div>

      <h2 className="
      text-2xl
      font-bold
      mb-4
      leading-tight
      ">
        {title}
      </h2>

      <p className="text-white/70">
        {excerpt}
      </p>

    </a>

  )

}
