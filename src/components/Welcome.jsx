// import { useState } from "react";

// const SECRET_WORD = "panni";

// function Welcome({ onUnlock }) {
//   const [word, setWord] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (word.trim().toLowerCase() === SECRET_WORD.toLowerCase()) {
//       setError("");
//       onUnlock();
//     } else {
//       setError("Hmm... that's not the secret word 💭");
//     }
//   };

//   return (
//     <section className="flex min-h-screen items-center justify-center px-6">

//       <div className="w-full max-w-md text-center">

//         {/* Lock */}
//         <div className="mb-8 flex justify-center">
//           <div className="flex h-24 w-24 items-center justify-center rounded-full border border-pink-300/30 bg-white/10 text-5xl shadow-2xl backdrop-blur-md">
//             🔐
//           </div>
//         </div>

//         {/* Heading */}
//         <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-pink-300">
//           A little secret
//         </p>

//         <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
//           Something special
//           <span className="block bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 bg-clip-text text-transparent">
//             is waiting for you...
//           </span>
//         </h1>

//         <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-pink-100/70">
//           Enter the secret word to unlock your birthday surprise 🎁
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-8">

//           <div className="rounded-2xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">

//             <input
//               type="password"
//               value={word}
//               onChange={(e) => {
//                 setWord(e.target.value);
//                 setError("");
//               }}
//               placeholder="Enter secret word..."
//               className="w-full rounded-xl bg-black/20 px-5 py-4 text-center text-white outline-none placeholder:text-pink-100/40 focus:ring-2 focus:ring-pink-400"
//             />

//             <button
//               type="submit"
//               className="mt-2 w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-4 font-semibold shadow-lg transition duration-300 hover:scale-[1.02] hover:from-pink-400 hover:to-rose-400 active:scale-95"
//             >
//               Unlock My Surprise 💝
//             </button>

//           </div>

//         </form>

//         {/* Error */}
//         {error && (
//           <p className="mt-4 text-sm font-medium text-rose-300">
//             {error}
//           </p>
//         )}

//         <p className="mt-8 text-xs text-pink-100/40">
//           Only the right person knows the magic word ✨
//         </p>

//       </div>

//     </section>
//   );
// }

// export default Welcome;

import { useState } from "react";

const SECRET_WORD = "panni";

function Welcome({ onUnlock }) {
  const [word, setWord] = useState("");
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (word.trim().toLowerCase() === SECRET_WORD.toLowerCase()) {
      setError("");
      setUnlocking(true);

      // Small cinematic delay before entering birthday page
      setTimeout(() => {
        onUnlock();
      }, 900);
    } else {
      setError("That's not the secret word... 💭");
      setShaking(true);

      setTimeout(() => {
        setShaking(false);
      }, 500);
    }
  };

  return (
    <section
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-6 ${
        unlocking ? "welcome-exit" : ""
      }`}
    >
      {/* =====================================
          AMBIENT LIGHTS
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Pink glow */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pink-600/20 blur-[120px] animate-glow" />

        {/* Purple glow */}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px] animate-glow-delay" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[100px]" />

      </div>


      {/* =====================================
          FLOATING HEARTS
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <span className="floating-heart left-[8%] text-2xl">
          💗
        </span>

        <span className="floating-heart left-[22%] text-xl animation-delay-1000">
          💕
        </span>

        <span className="floating-heart left-[78%] text-2xl animation-delay-2000">
          💖
        </span>

        <span className="floating-heart left-[90%] text-xl animation-delay-3000">
          💕
        </span>

        <span className="floating-heart left-[55%] text-lg animation-delay-1500">
          💗
        </span>

      </div>


      {/* =====================================
          FLOATING STARS
      ====================================== */}

      <div className="pointer-events-none absolute inset-0">

        <span className="absolute left-[15%] top-[20%] animate-pulse text-sm text-pink-200/60">
          ✦
        </span>

        <span className="absolute left-[75%] top-[18%] animate-pulse text-lg text-pink-200/50">
          ✨
        </span>

        <span className="absolute left-[12%] top-[72%] animate-pulse text-lg text-purple-200/50">
          ✦
        </span>

        <span className="absolute right-[15%] top-[70%] animate-pulse text-sm text-pink-200/60">
          ✨
        </span>

        <span className="absolute left-[45%] top-[12%] animate-pulse text-xs text-white/40">
          ✦
        </span>

      </div>


      {/* =====================================
          MAIN CARD
      ====================================== */}

      <div className="relative z-10 w-full max-w-md">

        <div
          className={`rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10 ${
            shaking ? "animate-shake" : ""
          }`}
        >

          {/* =================================
              LOCK ICON
          ================================= */}

          <div className="mb-7 flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-2xl animate-pulse" />

              {/* Circle */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-pink-300/20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 shadow-[0_0_40px_rgba(244,114,182,0.18)]">

                <span className="text-5xl">
                  🔐
                </span>

              </div>

            </div>

          </div>


          {/* =================================
              SMALL TITLE
          ================================= */}

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-pink-300">
            A little secret
          </p>


          {/* =================================
              MAIN TITLE
          ================================= */}

          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">

            Something special

            <span className="mt-1 block bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 bg-clip-text text-transparent">
              is waiting for you...
            </span>

          </h1>


          {/* =================================
              DESCRIPTION
          ================================= */}

          <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-pink-100/60">

            There is a little surprise hidden behind
            this screen.

            <span className="mt-1 block">
              Only you know how to unlock it. 💝
            </span>

          </p>


          {/* =================================
              SECRET FORM
          ================================= */}

          <form
            onSubmit={handleSubmit}
            className="mt-8"
          >

            <div className="rounded-2xl border border-white/10 bg-black/20 p-2 shadow-inner">

              <input
                type="password"
                value={word}
                disabled={unlocking}
                onChange={(e) => {
                  setWord(e.target.value);
                  setError("");
                }}
                placeholder="Enter the secret word..."
                autoComplete="off"
                className="w-full rounded-xl border border-white/5 bg-white/[0.05] px-5 py-4 text-center text-white outline-none transition placeholder:text-pink-100/30 focus:border-pink-400/40 focus:bg-white/[0.08] focus:ring-2 focus:ring-pink-400/20"
              />


              {/* =================================
                  BUTTON
              ================================= */}

              <button
                type="submit"
                disabled={unlocking}
                className="group relative mt-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 px-5 py-4 font-semibold shadow-[0_8px_30px_rgba(244,63,94,0.25)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(244,63,94,0.4)] active:scale-95 disabled:cursor-wait"
              >

                {/* Button shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />

                <span className="relative">

                  {unlocking ? (
                    <>
                      Opening your surprise... 💕
                    </>
                  ) : (
                    <>
                      Unlock My Surprise
                      <span className="ml-2">
                        💝
                      </span>
                    </>
                  )}

                </span>

              </button>

            </div>

          </form>


          {/* =================================
              ERROR
          ================================= */}

          {error && (
            <div className="mt-4">

              <p className="text-sm font-medium text-rose-300">
                {error}
              </p>

              <p className="mt-1 text-xs text-pink-100/30">
                Try again... you might know the magic word 😉
              </p>

            </div>
          )}


          {/* =================================
              FOOTER
          ================================= */}

          <div className="mt-8 flex items-center justify-center gap-3 text-xs text-pink-100/30">

            <span className="h-px w-10 bg-white/10" />

            <span>
              Made with ❤️
            </span>

            <span className="h-px w-10 bg-white/10" />

          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM TEXT
      ====================================== */}

      <p className="absolute bottom-6 left-0 right-0 text-center text-[11px] tracking-wide text-white/20">
        A special little surprise is waiting ✨
      </p>

    </section>
  );
}

export default Welcome;