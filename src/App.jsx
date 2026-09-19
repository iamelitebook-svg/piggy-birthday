// import { useRef, useState } from "react";

// import Welcome from "./components/Welcome";
// import BirthdayReveal from "./components/BirthdayReveal";
// import Message from "./components/Message";
// import PhotoGallery from "./components/PhotoGallery";
// import Surprise from "./components/Surprise";

// function App() {
//   const [stage, setStage] = useState("welcome");
//   const audioRef = useRef(null);

//   const handleUnlock = () => {
//     setStage("birthday");

//     // Start background music after user interaction
//     if (audioRef.current) {
//       audioRef.current
//         .play()
//         .catch(() => {
//           console.log("Music could not autoplay.");
//         });
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-950 via-pink-950 to-purple-950 text-white">
      
//       {/* Background music */}
//       <audio ref={audioRef} loop>
//         <source src="/music/birthday.mp3" type="audio/mpeg" />
//       </audio>

//       {/* Floating background hearts */}
//       <div className="pointer-events-none fixed inset-0 overflow-hidden">
//         <span className="absolute left-[8%] top-[15%] animate-bounce text-2xl opacity-30">
//           💕
//         </span>

//         <span className="absolute right-[12%] top-[25%] animate-pulse text-3xl opacity-30">
//           ✨
//         </span>

//         <span className="absolute bottom-[20%] left-[15%] animate-pulse text-2xl opacity-30">
//           💖
//         </span>

//         <span className="absolute bottom-[15%] right-[20%] animate-bounce text-3xl opacity-30">
//           🎈
//         </span>

//         <span className="absolute left-[50%] top-[10%] animate-pulse text-xl opacity-20">
//           ⭐
//         </span>
//       </div>

//       {/* Main content */}
//       <main className="relative z-10 min-h-screen">

//         {stage === "welcome" && (
//           <Welcome onUnlock={handleUnlock} />
//         )}

//         {stage === "birthday" && (
//           <BirthdayReveal
//             onContinue={() => setStage("message")}
//           />
//         )}

//         {stage === "message" && (
//           <Message
//             onContinue={() => setStage("gallery")}
//           />
//         )}

//         {stage === "gallery" && (
//           <PhotoGallery
//             onContinue={() => setStage("surprise")}
//           />
//         )}

//         {stage === "surprise" && (
//           <Surprise />
//         )}

//       </main>
//     </div>
//   );
// }

// export default App;

import { useRef, useState } from "react";

import Welcome from "./components/Welcome";
import BirthdayReveal from "./components/BirthdayReveal";
import Message from "./components/Message";
import PhotoGallery from "./components/PhotoGallery";
import Surprise from "./components/Surprise";

function App() {
  const [stage, setStage] = useState("welcome");
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);

  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.volume = 0.45;
      await audio.play();
      setMusicPlaying(true);
    } catch (error) {
      console.log("Music playback was blocked:", error);
    }
  };

  const handleUnlock = () => {
    startMusic();
    setStage("birthday");
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log("Music playback failed:", error);
      }
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-950 via-pink-950 to-purple-950 text-white">

      {/* BACKGROUND MUSIC */}

      <audio ref={audioRef} loop preload="auto">
        <source src="/music/birthday.mp3" type="audio/mpeg" />
        Your browser does not support audio.
      </audio>


      {/* FLOATING BACKGROUND DECORATIONS */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <span className="absolute left-[8%] top-[15%] animate-bounce text-2xl opacity-30">
          💕
        </span>

        <span className="absolute right-[12%] top-[25%] animate-pulse text-3xl opacity-30">
          ✨
        </span>

        <span className="absolute bottom-[20%] left-[15%] animate-pulse text-2xl opacity-30">
          💖
        </span>

        <span className="absolute bottom-[15%] right-[20%] animate-bounce text-3xl opacity-30">
          🎈
        </span>

        <span className="absolute left-[50%] top-[10%] animate-pulse text-xl opacity-20">
          ⭐
        </span>

        <span className="absolute left-[25%] top-[70%] animate-pulse text-xl opacity-20">
          💗
        </span>

        <span className="absolute right-[30%] top-[65%] animate-bounce text-xl opacity-20">
          ✨
        </span>

      </div>


      {/* MAIN CONTENT */}

      <main className="relative z-10 min-h-screen">

        {stage === "welcome" && (
          <Welcome onUnlock={handleUnlock} />
        )}

        {stage === "birthday" && (
          <BirthdayReveal
            onContinue={() => setStage("message")}
          />
        )}

        {stage === "message" && (
          <Message
            onContinue={() => setStage("gallery")}
          />
        )}

        {stage === "gallery" && (
          <PhotoGallery
            onContinue={() => setStage("surprise")}
          />
        )}

        {stage === "surprise" && <Surprise />}

      </main>


      {/* MUSIC CONTROL */}

      {stage !== "welcome" && (
        <button
          onClick={toggleMusic}
          aria-label={musicPlaying ? "Pause music" : "Play music"}
          className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
        >
          {musicPlaying ? "🎵" : "🔇"}
        </button>
      )}

    </div>
  );
}

export default App;