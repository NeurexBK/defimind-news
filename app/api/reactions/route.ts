import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const {
      slug,
      type
    } = body

    const { data: existing } = await supabase
      .from("article_reactions")
      .select("*")
      .eq("slug", slug)
      .single()

    if (!existing) {

      await supabase
        .from("article_reactions")
        .insert({
          slug,
          likes: type === "like" ? 1 : 0,
          dislikes: type === "dislike" ? 1 : 0,
        })

    } else {

      if (type === "like") {

        await supabase
          .from("article_reactions")
          .update({
            likes: existing.likes + 1
          })
          .eq("slug", slug)

      }

      if (type === "dislike") {

        await supabase
          .from("article_reactions")
          .update({
            dislikes: existing.dislikes + 1
          })
          .eq("slug", slug)

      }

    }

    return NextResponse.json({
      success: true
    })

  } catch (error) {

    return NextResponse.json({
      success: false
    })

  }

}
