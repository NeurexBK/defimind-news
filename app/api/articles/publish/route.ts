import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const {
      title,
      slug,
      excerpt,
      content,
      category,
      sentiment,
      source
    } = body

    const { error } = await supabase
      .from("articles")
      .insert({
        title,
        slug,
        excerpt,
        content,
        category,
        sentiment,
        source
      })

    if (error) {

      return NextResponse.json({
        success: false
      })

    }

    return NextResponse.json({
      success: true
    })

  } catch {

    return NextResponse.json({
      success: false
    })

  }

}
