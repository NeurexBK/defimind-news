import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", {
      ascending: false
    })

  if (error) {

    return NextResponse.json({
      success: false
    })

  }

  return NextResponse.json(data)

}
