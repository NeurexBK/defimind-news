"use client"

export default function Reactions({
  slug,
}: {
  slug: string
}) {

  async function sendReaction(
    type: "like" | "dislike"
  ) {

    await fetch("/api/reactions", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        slug,
        type,
      }),

    })

    alert("Reação enviada")

  }

  return (

    <div className="flex gap-4 mt-10">

      <button
        onClick={() => sendReaction("like")}
        className="
        px-6
        py-3
        rounded-2xl
        bg-green-600
        hover:bg-green-500
        transition
        "
      >
        👍 Like
      </button>

      <button
        onClick={() => sendReaction("dislike")}
        className="
        px-6
        py-3
        rounded-2xl
        bg-red-600
        hover:bg-red-500
        transition
        "
      >
        👎 Dislike
      </button>

    </div>

  )

}
