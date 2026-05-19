import news from "@/data/generated-news.json"
import Link from "next/link"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryPage({
  params
}: Props) {

  const resolvedParams = await params

  const slug =
    resolvedParams.slug.toLowerCase()

  const filteredNews = news.filter(
    (item:any) =>
      item.category?.toLowerCase() === slug
  )

  return (

    <main className="
    min-h-screen
    bg-[#030712]
    text-white
    px-6
    py-20
    ">

      <div className="
      max-w-7xl
      mx-auto
      ">

        <Link
          href="/"
          className="
          text-purple-400
          hover:text-purple-300
          transition
          inline-block
          mb-10
          "
        >
          ← Voltar
        </Link>

        <h1 className="
        text-5xl
        font-black
        tracking-tight
        mb-4
        capitalize
        ">
          {slug}
        </h1>

        <p className="
        text-white/50
        mb-14
        ">
          Últimas notícias sobre {slug}
        </p>

        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        ">

          {filteredNews.map(
            (item:any, index:number) => (

            <a
              key={index}
              href={/noticias/${item.slug}}
              className="
              block
              p-6
              rounded-3xl
              border
              border-white/5
              bg-white/[0.03]
              hover:border-purple-500/40
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >

              <div className="
              text-purple-400
              text-xs
              mb-4
              uppercase
              tracking-wide
              ">
                {item.category}
              </div>

              <h2 className="
              text-2xl
              font-bold
              mb-4
              leading-tight
              ">
                {item.title}
              </h2>

              <p className="
              text-white/65
              leading-7
              ">
                {item.excerpt}
              </p>

            </a>

          ))}

        </div>

      </div>

    </main>

  )

}
