function BirthdayReveal({ onContinue }) {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">

      <div className="w-full max-w-3xl text-center">

        {/* Confetti */}
        <div className="mb-8 flex justify-center gap-5 text-3xl">
          <span className="animate-bounce">🎈</span>
          <span className="animate-pulse">✨</span>
          <span className="animate-bounce">🎈</span>
        </div>

        <p className="text-sm uppercase tracking-[0.4em] text-pink-300">
          Today is your special day
        </p>

        <h1 className="mt-5 text-5xl font-black sm:text-7xl">
          Happy
          <span className="block bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
            Birthday! 🎂
          </span>
        </h1>

        <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

          <div className="text-7xl">
            🎂
          </div>

          <h2 className="mt-6 text-3xl font-bold">
            Happy Birthday, Beautiful! ❤️
          </h2>

          <p className="mt-4 leading-7 text-pink-100/70">
            Today isn't just another day.
            It's the day someone incredibly special came into this world.
          </p>

        </div>

        <button
          onClick={onContinue}
          className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-rose-600 shadow-xl transition hover:scale-105 active:scale-95"
        >
          Continue the surprise 💌
        </button>

      </div>

    </section>
  );
}

export default BirthdayReveal;