

import { useEffect, useState } from "react";

function Surprise() {
  const [opened, setOpened] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const confetti = Array.from({ length: 70 });

  const openGift = () => {
    setOpened(true);

    setTimeout(() => {
      setShowVideo(true);
    }, 1400);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">

      {/* =====================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className={`absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-all duration-[2000ms] ${
            opened
              ? "bg-pink-500/25 scale-150"
              : "bg-pink-500/5"
          }`}
        />

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[110px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-500/10 blur-[120px]" />

      </div>


      {/* =====================================
          CONFETTI AFTER OPENING
      ====================================== */}

      {opened && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {confetti.map((_, index) => (
            <span
              key={index}
              className="surprise-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {
                ["✨", "💕", "♡", "✦", "🎉", "💖", "•"][
                  index % 7
                ]
              }
            </span>
          ))}

        </div>
      )}


      {/* =====================================
          BEFORE OPENING
      ====================================== */}

      {!opened && (
        <div className="relative z-10 w-full max-w-xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-300">
            One last thing...
          </p>

          <h1 className="mt-5 text-4xl font-black sm:text-6xl">
            I have one more
            <span className="block bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
              surprise for you 🎁
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-pink-100/50">
            You've made it this far...
            but there's still one little thing waiting for you.
          </p>


          {/* =================================
              GIFT
          ================================== */}

          <button
            onClick={openGift}
            className="gift-button group mx-auto mt-12 block focus:outline-none"
          >

            <div className="gift-wrapper">

              {/* Glow */}

              <div className="gift-glow" />


              {/* Gift box */}

              <div className="gift-box">

                {/* Lid */}

                <div className="gift-lid">

                  <div className="gift-ribbon-horizontal" />

                </div>


                {/* Box */}

                <div className="gift-body">

                  <div className="gift-ribbon-vertical" />

                </div>


                {/* Bow */}

                <div className="gift-bow">

                  <span className="bow-left" />

                  <span className="bow-right" />

                  <span className="bow-center" />

                </div>

              </div>

            </div>


            <p className="mt-10 text-sm font-medium text-pink-100/50 transition group-hover:text-pink-200/80">
              Click the gift to open it 🎁
            </p>

          </button>

        </div>
      )}


      {/* =====================================
          AFTER OPENING
      ====================================== */}

      {opened && (
        <div
          className={`relative z-10 w-full max-w-4xl text-center transition-all duration-1000 ${
            showVideo
              ? "translate-y-0 opacity-100"
              : "scale-90 opacity-0"
          }`}
        >

          {/* =================================
              VIDEO
          ================================== */}

          {showVideo && (
            <>

              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-300">
                Just for you ❤️
              </p>

              <h1 className="mt-5 text-4xl font-black sm:text-6xl">
                A little something
                <span className="block bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
                  I made for you ✨
                </span>
              </h1>


              {/* Video */}

              <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">

                <video
                  controls
                  playsInline
                  className="max-h-[65vh] w-full rounded-2xl object-contain"
                >
                  <source
                    src="/videos/birthday.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support video.
                </video>

              </div>


              {/* =================================
                  FINAL MESSAGE
              ================================== */}

              <div className="mx-auto mt-12 max-w-2xl">

                <div className="flex items-center justify-center gap-4">

                  <span className="h-px w-16 bg-white/10" />

                  <span className="text-2xl">
                    💕
                  </span>

                  <span className="h-px w-16 bg-white/10" />

                </div>


                <h2 className="mt-8 text-3xl font-bold sm:text-4xl">
                  Happy Birthday ❤️
                </h2>

                <p className="mt-5 text-base leading-8 text-pink-100/60">
                  I hope this little journey made your birthday
                  a little more special.
                  <br />
                  You deserve all the happiness in the world.
                </p>


                <div className="mt-8 text-4xl">
                  🎂 🎈 💕 ✨ 🎁
                </div>

              </div>

            </>
          )}

        </div>
      )}

    </section>
  );
}

export default Surprise;