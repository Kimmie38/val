"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; duration: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        duration: Math.random() * 3 + 3,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, (newHeart.duration + 1) * 1000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const songs = [
    {
      title: "Song One",
      artist: "Artist Name",
      emoji: "🎵",
    },
    {
      title: "Song Two",
      artist: "Artist Name",
      emoji: "🎶",
    },
    {
      title: "Song Three",
      artist: "Artist Name",
      emoji: "🎼",
    },
    {
      title: "Song Four",
      artist: "Artist Name",
      emoji: "🎹",
    },
  ];

  const lovedThings = [
    "Your beautiful smile that brightens my day",
    "The way you laugh at my silly jokes",
    "Your compassion and kindness towards others",
    "The warmth in your hug",
    "Your creativity and unique perspective",
    "The way you listen so thoughtfully",
    "Your adventurous spirit",
    "Your genuine care and love",
    "Your strength and resilience",
    "Everything about you",
  ];

  const envelopes = [
    {
      id: 1,
      message: "I love you more each day",
      delay: 0,
    },
    {
      id: 2,
      message: "You make my heart skip a beat",
      delay: 0.3,
    },
    {
      id: 3,
      message: "Forever with you feels like home",
      delay: 0.6,
    },
    {
      id: 4,
      message: "You are my greatest gift",
      delay: 0.9,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-red-50 dark:from-slate-950 dark:via-rose-950 dark:to-red-950 relative overflow-hidden">
      {/* Falling Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="falling-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Floating Stickers */}
      <div className="fixed top-10 left-5 text-4xl opacity-60 floating-sticker pointer-events-none">
        🐱
      </div>
      <div className="fixed top-32 right-8 text-5xl opacity-50 floating-sticker pointer-events-none" style={{ animationDelay: "1s" }}>
        🧸
      </div>
      <div className="fixed bottom-32 left-10 text-4xl opacity-60 floating-sticker pointer-events-none" style={{ animationDelay: "2s" }}>
        🌸
      </div>
      <div className="fixed top-1/2 right-5 text-5xl opacity-50 floating-sticker pointer-events-none" style={{ animationDelay: "0.5s" }}>
        🐻
      </div>
      <div className="fixed bottom-20 right-12 text-4xl opacity-60 floating-sticker pointer-events-none" style={{ animationDelay: "1.5s" }}>
        💐
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 dark:text-pink-300 mb-6 pulse-scale">
            Happy Valentine's Day
          </h1>
          <p className="text-xl md:text-2xl text-rose-700 dark:text-rose-300 mb-8">
            To my favorite person in the world
          </p>
          <div className="text-6xl md:text-8xl animate-bounce">
            💕
          </div>
        </div>
      </section>

      {/* Favorite Songs Section */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 dark:text-pink-300 mb-12">
          Our Favorite Songs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {songs.map((song, index) => (
            <div
              key={song.title + index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow glow"
            >
              <div className="text-4xl mb-4">{song.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {song.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {song.artist}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Romantic Messages in Envelopes */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 dark:text-pink-300 mb-12">
          Messages for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {envelopes.map((env) => (
            <div
              key={env.id}
              className="envelope group cursor-pointer"
              style={{ animationDelay: `${env.delay}s` }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="text-3xl mb-4">💌</div>
                <p className="text-lg text-gray-700 dark:text-gray-200 italic">
                  "{env.message}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Things Section */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 dark:text-pink-300 mb-12">
          Things I Love About You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lovedThings.map((thing, index) => (
            <div
              key={thing + index}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">💗</span>
                <p className="text-gray-700 dark:text-gray-200">{thing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Moments / Image Gallery Section */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 dark:text-pink-300 mb-12">
          Our Favorite Memories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-pink-300 to-rose-400 dark:from-pink-700 dark:to-rose-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center text-white text-6xl"
            >
              {i % 3 === 0 ? "📸" : i % 3 === 1 ? "🥰" : "💑"}
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-red-600 dark:text-pink-300 mb-6">
            Forever Yours
          </h2>
          <p className="text-lg md:text-xl text-rose-700 dark:text-rose-300 mb-8">
            With all my love
          </p>
          <div className="text-6xl animate-pulse">💞</div>
        </div>
      </section>

      {/* Decorative Bottom Elements */}
      <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="flex justify-around h-full items-end pb-4 opacity-30">
          <span className="text-3xl">🌹</span>
          <span className="text-3xl">💐</span>
          <span className="text-3xl">🌸</span>
          <span className="text-3xl">💐</span>
          <span className="text-3xl">🌹</span>
        </div>
      </div>
    </div>
  );
}
