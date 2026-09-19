function PhotoGallery({ onContinue }) {
  const photos = [
    {
      id: 1,
      title: "Beautiful Memory",
      image: "/photos/photo1.jpg",
    },
    {
      id: 2,
      title: "A Special Moment",
      image: "/photos/photo2.jpg",
    },
    {
      id: 3,
      title: "Best Memories",
      image: "/photos/photo3.jpg",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-16">

      <div className="mx-auto max-w-6xl">

        <p className="text-center text-sm uppercase tracking-[0.35em] text-pink-300">
          Our memories
        </p>

        <h1 className="mt-4 text-center text-4xl font-bold sm:text-5xl">
          Little Moments 📸
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-center text-pink-100/60">
          Some moments are too special to be forgotten.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2"
            >

              <div className="aspect-square overflow-hidden rounded-2xl bg-pink-900/30">

                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

              </div>

              <p className="px-2 py-4 text-center font-medium text-pink-100">
                {photo.title} 💕
              </p>

            </div>
          ))}

        </div>

        <div className="text-center">
          <button
            onClick={onContinue}
            className="mt-10 rounded-full bg-white px-8 py-4 font-bold text-rose-600 shadow-xl transition hover:scale-105 active:scale-95"
          >
            One Last Surprise 🎁
          </button>
        </div>

      </div>

    </section>
  );
}

export default PhotoGallery;