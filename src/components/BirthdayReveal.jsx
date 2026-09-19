

import { useEffect, useState } from "react";

function BirthdayReveal({ onContinue }) {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 2200);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const confetti = Array.from({ length: 45 });

  const balloons = [
    { emoji: "🎈", position: "left-[5%]", delay: "0s" },
    { emoji: "🎈", position: "left-[15%]", delay: "1s" },
    { emoji: "🎈", position: "left-[28%]", delay: "2s" },
    { emoji: "🎈", position: "right-[28%]", delay: "1.5s" },
    { emoji: "🎈", position: "right-[15%]", delay: "0.5s" },
    { emoji: "🎈", position: "right-[5%]", delay: "2.5s" },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* =====================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[130px]" />

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-rose-500/10 blur-[100px]" />

      </div>


      {/* =====================================
          CONFETTI
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {confetti.map((_, index) => (
          <span
            key={index}
            className="birthday-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {["✦", "•", "♡", "✧", "★"][index % 5]}
          </span>
        ))}

      </div>


      {/* =====================================
          BALLOONS
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {balloons.map((balloon, index) => (
          <span
            key={index}
            className={`birthday-balloon absolute ${balloon.position} text-4xl sm:text-5xl`}
            style={{
              animationDelay: balloon.delay,
            }}
          >
            {balloon.emoji}
          </span>
        ))}

      </div>


      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <div
        className={`relative z-10 w-full max-w-4xl text-center transition-all duration-1000 ${
          showContent
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
        }`}
      >

        {/* Small label */}

        <div className="flex items-center justify-center gap-3">

          <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-400/50" />

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-300">
            Today is your special day
          </p>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-400/50" />

        </div>


        {/* =================================
            HAPPY
        ================================== */}

        <h1 className="birthday-title mt-7 text-6xl font-black leading-none sm:text-8xl">

          <span className="block">
            Happy
          </span>

          <span className="birthday-gradient mt-2 block">
            Birthday!
          </span>

        </h1>


        {/* =================================
            CAKE
        ================================== */}

        <div className="relative mx-auto mt-8 flex h-32 w-32 items-center justify-center">

          <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />

          <div className="birthday-cake relative text-8xl">
            🎂
          </div>

        </div>


        {/* =================================
            NAME
        ================================== */}

        <div className="mt-5">

          <p className="text-sm text-pink-100/50">
            This day belongs to
          </p>

          {/* CHANGE NAME HERE */}

          <h2 className="birthday-name mt-2 text-4xl font-bold sm:text-5xl">
           Panni Kutty ❤️
          </h2>

        </div>


        {/* =================================
            MESSAGE
        ================================== */}

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-pink-100/60 sm:text-base">

          Today is a celebration of the beautiful person you are.
          May your day be filled with smiles, love, laughter and
          unforgettable moments. ✨

        </p>


        {/* =================================
            CONTINUE BUTTON
        ================================== */}

        <div
          className={`transition-all duration-1000 ${
            showButton
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >

          <button
            onClick={onContinue}
            className="birthday-button mt-9 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 px-9 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(244,63,94,0.25)] transition duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(244,63,94,0.4)] active:scale-95"
          >
            I Have Something to Say 💌
          </button>

        </div>

      </div>

    </section>
  );
}

export default BirthdayReveal;