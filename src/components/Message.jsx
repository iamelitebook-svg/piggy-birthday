

import { useEffect, useState } from "react";

function Message({ onContinue }) {
  const [opened, setOpened] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const message = `On your special day, I just want you to know how incredibly special you are.

You bring a beautiful kind of happiness into the lives of the people around you, and I hope you always remember just how much you mean to those who care about you.

May this new year of your life bring you countless reasons to smile, beautiful memories to treasure, dreams that come true, and happiness that stays with you every day.

Keep smiling, keep shining, and never stop being the wonderful person you are.

Today is your day. Enjoy every little moment of it. ❤️`;

  useEffect(() => {
    if (!opened) return;

    let index = 0;

    const timer = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 22);

    return () => clearInterval(timer);
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">

      {/* =====================================
          BACKGROUND
      ====================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />

        <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-purple-500/10 blur-[110px]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/5 blur-[120px]" />

      </div>


      {/* =====================================
          FLOATING HEARTS
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <span className="message-heart left-[8%]">♡</span>

        <span className="message-heart left-[20%] animation-delay-1000">
          ✦
        </span>

        <span className="message-heart left-[82%] animation-delay-2000">
          ♡
        </span>

        <span className="message-heart left-[92%] animation-delay-3000">
          ✦
        </span>

      </div>


      {/* =====================================
          CLOSED ENVELOPE
      ====================================== */}

      {!opened && (
        <div className="relative z-10 w-full max-w-md text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-300">
            A little message
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            I wrote something
            <span className="block text-pink-300">
              just for you 💌
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-pink-100/50">
            There's something waiting inside this envelope.
          </p>


          {/* Envelope */}

          <button
            onClick={handleOpen}
            className="group mx-auto mt-12 block focus:outline-none"
          >

            <div className="envelope-wrapper">

              <div className="envelope">

                <div className="envelope-back" />

                <div className="envelope-paper">
                  <span>For You ❤️</span>
                </div>

                <div className="envelope-front" />

                <div className="envelope-flap" />

                <div className="envelope-heart">
                  ❤️
                </div>

              </div>

            </div>

            <h2 className="mt-8 text-xl text-pink-100/40 transition group-hover:text-pink-200/70">
              Click Me
            </h2>

          </button>

        </div>
      )}


      {/* =====================================
          OPEN LETTER
      ====================================== */}

      {opened && (
        <div className="relative z-10 w-full max-w-2xl">

          <div className="letter-card rounded-3xl border border-pink-200/10 bg-gradient-to-br from-[#fff7f9] via-[#fffafd] to-[#fdf4ff] p-7 text-rose-950 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-12">

            {/* Letter heading */}

            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-2xl shadow-inner">
                💌
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-rose-400">
                A letter for you
              </p>

              <h1 className="mt-3 font-serif text-3xl font-bold text-rose-900 sm:text-4xl">
                From my heart
              </h1>

              <div className="mx-auto mt-5 h-px w-24 bg-rose-200" />

            </div>


            {/* Typewriter message */}

            <div className="mt-8 min-h-[390px] whitespace-pre-line font-serif text-base leading-8 text-rose-900/80 sm:text-lg">

              {displayedText}

              <span className="typewriter-cursor">
                |
              </span>

            </div>


            {/* Signature */}

            {displayedText.length === message.length && (
              <div className="letter-signature mt-8 text-right">

                <p className="font-serif text-lg italic text-rose-700">
                  With lots of love,
                </p>

                <p className="mt-1 text-2xl font-semibold text-rose-900">
                  ❤️
                </p>

              </div>
            )}

          </div>


          {/* Continue */}

          {displayedText.length === message.length && (
            <div className="text-center">

              <button
                onClick={onContinue}
                className="message-continue mt-9 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 px-9 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(244,63,94,0.25)] transition duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(244,63,94,0.4)] active:scale-95"
              >
                Look at Our Memories 📸
              </button>

            </div>
          )}

        </div>
      )}

    </section>
  );
}

export default Message;