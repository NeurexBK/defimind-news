"use client"

import { useEffect, useState } from "react"

type Reaction = {
  id: number
  slug: string
  likes: number
  dislikes: number
  created_at: string
}

export default function AdminPage() {

  const [data, setData] = useState<Reaction[]>([])

  useEffect(() => {

    fetch("/api/reactions")
      .then(res => res.json())
      .then(setData)

  }, [])

  const totalLikes = data.reduce(
    (acc, item) => acc + item.likes,
    0
  )

  const totalDislikes = data.reduce(
    (acc, item) => acc + item.dislikes,
    0
  )

  return (

    <main className="
    min-h-screen
    bg-[#030712]
    text-white
    p-10
    ">

      <div className="max-w-7xl mx-auto">

        <h1 className="
        text-5xl
        font-black
        mb-10
        ">
          DefiMind Admin
        </h1>

        <div className="
        grid
        md:grid-cols-3
        gap-6
        mb-10
        ">

          <div className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-6
          ">
            <div className="text-white/60">
              Total Likes
            </div>

            <div className="text-4xl font-bold mt-2">
              👍 {totalLikes}
            </div>
          </div>

          <div className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-6
          ">
            <div className="text-white/60">
              Total Dislikes
            </div>

            <div className="text-4xl font-bold mt-2">
              👎 {totalDislikes}
            </div>
          </div>

          <div className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-6
          ">
            <div className="text-white/60">
              Total Notícias
            </div>

            <div className="text-4xl font-bold mt-2">
              📰 {data.length}
            </div>
          </div>

        </div>

        <div className="
        overflow-x-auto
        rounded-3xl
        border
        border-white/10
        ">

          <table className="w-full">

            <thead className="bg-white/5">

              <tr>

                <th className="p-4 text-left">
                  Slug
                </th>

                <th className="p-4 text-left">
                  Likes
                </th>

                <th className="p-4 text-left">
                  Dislikes
                </th>

                <th className="p-4 text-left">
                  Data
                </th>

              </tr>

            </thead>

            <tbody>

              {data.map(item => (

                <tr
                  key={item.id}
                  className="
                  border-t
                  border-white/10
                  "
                >

                  <td className="p-4">
                    {item.slug}
                  </td>

                  <td className="p-4">
                    👍 {item.likes}
                  </td>

                  <td className="p-4">
                    👎 {item.dislikes}
                  </td>

                  <td className="p-4">
                    {new Date(
                      item.created_at
                    ).toLocaleString("pt-BR")}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>

  )

}
