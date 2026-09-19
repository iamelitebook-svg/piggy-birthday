import { useState } from "react";

function Surprise() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="flex min-h-screen items-center justify-center px-6">

      <div className="w-full max-w-2xl text-center">

        {!opened ? (
          <>
            <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
              One last thing...
            </p>

            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              I have one more surprise 🎁
            </h1>

            <button
              onClick={() => setOpened(true)}
              className="mt-12 text-8xl transition duration-500 hover:scale-110 active:scale-90"
            >
              🎁
            </button>

            <p className="mt-8 text-pink-100/60">
              Click the gift...
            </p>
          </>
        ) : (
          <div className="animate-pulse">

            <div className="text-7xl">
              💖
            </div>

            <h1 className="mt-8 text-5xl font-black sm:text-7xl">
              Happy Birthday
            </h1>

            <h2 className="mt-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-4xl font-bold text-transparent">
              My Special Person ❤️
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-pink-100/70">
              I hope this little surprise brought a smile to your face.
              May this year bring you everything your heart wishes for.
            </p>

            <div className="mt-10 text-5xl">
              🎂 🎈 💕 ✨ 🎁
            </div>

          </div>
        )}

      </div>

    </section>
  );
}

export default Surprise;