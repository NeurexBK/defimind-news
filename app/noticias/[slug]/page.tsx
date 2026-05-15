import Reactions from "@/components/Reactions"
import Link from "next/link"
import news from "@/data/generated-news.json"
import type { Metadata } from "next"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const resolvedParams = await params

  const article = news.find(
    item => item.slug === resolvedParams.slug
  )

  if (!article) {

    return {
      title: "DefiMind",
      description: "Crypto Intelligence powered by Neurex AI",
    }

  }

  return {

    title: article.title,

    description: article.excerpt,

    openGraph: {

      title: article.title,

      description: article.excerpt,

      url: `https://defimindnews.cloud/noticias/${article.slug}`,

      siteName: "DefiMind",

      type: "article",

    },

    twitter: {

      card: "summary_large_image",

      title: article.title,

      description: article.excerpt,

    }

  }

}

export default async function NewsPage({ params }: Props) {

  const resolvedParams = await params

  const article = news.find(
    item => item.slug === resolvedParams.slug
  )

  if (!article) {

    return (

      <main className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      bg-[#030712]
      text-white
      ">

        <h1 className="
        text-5xl
        font-bold
        mb-6
        ">
          Notícia não encontrada
        </h1>

        <p className="mb-8 text-white/60">
          Slug procurado:
          {" "}
          {resolvedParams.slug}
        </p>

        <Link
          href="/"
          className="
          bg-purple-600
          px-6
          py-3
          rounded-2xl
          "
        >
          Voltar
        </Link>

      </main>

    )

  }

  return (

    <main className="
    min-h-screen
    bg-[#030712]
    text-white
    px-6
    py-20
    ">

      <div className="
      max-w-4xl
      mx-auto
      ">

        <a
          href="/"
          className="
          inline-flex
          items-center
          gap-2
          text-purple-400
          hover:text-purple-300
          mb-10
          transition
          "
        >

          ← Voltar ao Dashboard

        </a>

        <div className="
        text-purple-400
        mb-4
        ">
          Por Neurex AI
        </div>

        <h1 className="
        text-5xl
        font-bold
        mb-8
        ">
          {article.title}
        </h1>

        <div
          className="
          text-white/70
          leading-8
          text-lg
          whitespace-pre-line
          "
        >
          {article.content}
        </div>

        <div className="mt-10">
          <Reactions slug={article.slug} />
        </div>

        <div className="mt-6 text-sm text-white/40">

          Publicado em:
          {" "}
          {new Date().toLocaleString("pt-BR")}

        </div>

        <div className="mt-2 text-sm text-white/40">

          Fonte:
          {" "}
          Neurex AI + Crypto APIs

        </div>

      </div>

    </main>

  )

}
