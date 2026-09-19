import { useState } from "react";

const SECRET_WORD = "panni";

function Welcome({ onUnlock }) {
  const [word, setWord] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (word.trim().toLowerCase() === SECRET_WORD.toLowerCase()) {
      setError("");
      onUnlock();
    } else {
      setError("Hmm... that's not the secret word 💭");
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-6">

      <div className="w-full max-w-md text-center">

        {/* Lock */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-pink-300/30 bg-white/10 text-5xl shadow-2xl backdrop-blur-md">
            🔐
          </div>
        </div>

        {/* Heading */}
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-pink-300">
          A little secret
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Something special
          <span className="block bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 bg-clip-text text-transparent">
            is waiting for you...
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-pink-100/70">
          Enter the secret word to unlock your birthday surprise 🎁
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8">

          <div className="rounded-2xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">

            <input
              type="password"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
                setError("");
              }}
              placeholder="Enter secret word..."
              className="w-full rounded-xl bg-black/20 px-5 py-4 text-center text-white outline-none placeholder:text-pink-100/40 focus:ring-2 focus:ring-pink-400"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-4 font-semibold shadow-lg transition duration-300 hover:scale-[1.02] hover:from-pink-400 hover:to-rose-400 active:scale-95"
            >
              Unlock My Surprise 💝
            </button>

          </div>

        </form>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm font-medium text-rose-300">
            {error}
          </p>
        )}

        <p className="mt-8 text-xs text-pink-100/40">
          Only the right person knows the magic word ✨
        </p>

      </div>

    </section>
  );
}

export default Welcome;