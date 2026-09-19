function Message({ onContinue }) {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-16">

      <div className="w-full max-w-2xl">

        <p className="text-center text-sm uppercase tracking-[0.35em] text-pink-300">
          A little message for you
        </p>

        <h1 className="mt-4 text-center text-4xl font-bold sm:text-5xl">
          From my heart ❤️
        </h1>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-12">

          <p className="text-lg leading-8 text-pink-50/90">
            On your special day, I just want you to know how incredibly
            special you are.
          </p>

          <p className="mt-6 text-lg leading-8 text-pink-50/90">
            May your life always be filled with happiness, beautiful
            memories, peaceful moments and people who genuinely care about
            you.
          </p>

          <p className="mt-6 text-lg leading-8 text-pink-50/90">
            Keep smiling, keep shining and keep being the amazing person
            you are. ✨
          </p>

          <p className="mt-8 text-right text-xl font-semibold text-pink-300">
            With lots of love ❤️
          </p>

        </div>

        <div className="text-center">
          <button
            onClick={onContinue}
            className="mt-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 font-semibold shadow-xl transition hover:scale-105 active:scale-95"
          >
            See Our Memories 📸
          </button>
        </div>

      </div>

    </section>
  );
}

export default Message;