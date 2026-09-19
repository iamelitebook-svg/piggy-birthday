

import { useState } from "react";

function PhotoGallery({ onContinue }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      image: "/photos/photo1.jpeg",
      title: "A Beautiful Moment",
      caption: "One of those moments worth remembering forever ❤️",
      rotation: "-rotate-2",
    },
    {
      id: 2,
      image: "/photos/photo2.jpeg",
      title: "That Smile",
      caption: "A smile that can make everything feel better ✨",
      rotation: "rotate-2",
    },
    {
      id: 3,
      image: "/photos/photo3.jpeg",
      title: "A Special Memory",
      caption: "Some memories simply stay in your heart 💕",
      rotation: "-rotate-1",
    },
    {
      id: 4,
      image: "/photos/photo4.jpeg",
      title: "Another Chapter",
      caption: "Here's to all the beautiful moments ahead 🌸",
      rotation: "rotate-3",
    },
    {
      id: 5,
      image: "/photos/photo5.jpeg",
      title: "Chasing Sunsets",
      caption: "Proof that endings can be beautiful too 🌅",
      rotation: "-rotate-3",
    },
    {
      id: 6,
      image: "/photos/photo6.jpeg",
      title: "Pure Joy",
      caption: "Laughter is always better when shared with you 🪵",
      rotation: "rotate-1",
    },
    {
      id: 7,
      image: "/photos/photo7.jpeg",
      title: "By Your Side",
      caption: "The best place in the world is right here 🗺️",
      rotation: "-rotate-2",
    },
      {
    id: 8,
    image: "/photos/photo8.jpeg",
    title: "Cozy Days",
    caption: "Warm drinks and even warmer company ☕",
    rotation: "rotate-2",
  }


  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-16">

      {/* =====================================
          BACKGROUND
      ====================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-pink-500/10 blur-[110px]" />

        <div className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/5 blur-[120px]" />

      </div>


      {/* =====================================
          FLOATING DECORATIONS
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <span className="gallery-floating left-[5%]">
          ♡
        </span>

        <span className="gallery-floating left-[20%] animation-delay-1000">
          ✦
        </span>

        <span className="gallery-floating left-[80%] animation-delay-2000">
          ♡
        </span>

        <span className="gallery-floating left-[92%] animation-delay-3000">
          ✨
        </span>

      </div>


      {/* =====================================
          HEADER
      ====================================== */}

      <div className="relative z-10 mx-auto max-w-6xl text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pink-300">
          Our little memories
        </p>

        <h1 className="mt-5 text-4xl font-black sm:text-6xl">
          Moments
          <span className="block bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
            worth keeping 📸
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-pink-100/50 sm:text-base">
          A few little moments that deserve a place in this
          special day.
        </p>

      </div>


      {/* =====================================
          PHOTO WALL
      ====================================== */}

      <div className="relative z-10 mx-auto mt-14 max-w-6xl">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`polaroid ${photo.rotation}`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >

              {/* Photo */}

              <button
                onClick={() => setSelectedPhoto(photo)}
                className="group block w-full text-left"
              >

                <div className="relative overflow-hidden bg-gray-100">

                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Hover overlay */}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/30">

                    <span className="scale-75 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-rose-600 opacity-0 shadow-lg transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                      View 🔍
                    </span>

                  </div>

                </div>


                {/* Caption */}

                <div className="px-3 pb-4 pt-4">

                  <h2 className="font-serif text-lg font-bold text-gray-800">
                    {photo.title}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {photo.caption}
                  </p>

                </div>

              </button>

            </div>
          ))}

        </div>

      </div>


      {/* =====================================
          BOTTOM MESSAGE
      ====================================== */}

      <div className="relative z-10 mx-auto mt-16 max-w-xl text-center">

        <div className="flex items-center justify-center gap-4">

          <span className="h-px w-16 bg-white/10" />

          <span className="text-xl">
            ❤️
          </span>

          <span className="h-px w-16 bg-white/10" />

        </div>

        <p className="mt-5 text-sm italic text-pink-100/40">
          Some moments become memories.
          Some memories become treasures.
        </p>


        <button
          onClick={onContinue}
          className="mt-8 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 px-9 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(244,63,94,0.25)] transition duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(244,63,94,0.4)] active:scale-95"
        >
          One Last Surprise 🎁
        </button>

      </div>


      {/* =====================================
          FULLSCREEN PHOTO MODAL
      ====================================== */}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >

          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -right-2 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-md transition hover:bg-white/20"
            >
              ×
            </button>


            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-3 shadow-2xl">

              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-full rounded-xl object-contain"
              />

              <div className="px-3 pb-2 pt-5 text-center">

                <h2 className="text-xl font-bold text-white">
                  {selectedPhoto.title}
                </h2>

                <p className="mt-2 text-sm text-white/50">
                  {selectedPhoto.caption}
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default PhotoGallery;