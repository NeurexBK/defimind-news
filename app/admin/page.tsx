```tsx id="k9w2pl"
export default function AdminPage() {

  return (

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

      <div className="
      grid
      md:grid-cols-3
      gap-6
      ">

        <div className="
        p-6
        rounded-3xl
        border
        border-white/10
        bg-white/5
        ">

          <div className="text-white/50 mb-2">
            Notícias
          </div>

          <div className="text-4xl font-black">
            24
          </div>

        </div>

        <div className="
        p-6
        rounded-3xl
        border
        border-white/10
        bg-white/5
        ">

          <div className="text-white/50 mb-2">
            Likes
          </div>

          <div className="text-4xl font-black">
            0
          </div>

        </div>

        <div className="
        p-6
        rounded-3xl
        border
        border-white/10
        bg-white/5
        ">

          <div className="text-white/50 mb-2">
            Dislikes
          </div>

          <div className="text-4xl font-black">
            0
          </div>

        </div>

      </div>

    </main>

  )

}
```
