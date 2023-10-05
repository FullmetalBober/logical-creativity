'use client';
import React, {useState} from "react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [theme, setTheme] = useState("");
  return (
      <main className="homePageMain">
        <UniversalHeader theme={theme} />
        <div className="hero min-h-screen" data-theme={theme} style={{backgroundImage: `url("https://images.pexels.com/photos/3975590/pexels-photo-3975590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Have you ever imagined how intelligent and creative you could become? If yes - this application is for you.
                Spend time with pleasure and have fun.</p>
              <button className="btn btn-success">Get Started</button>
              <details>
                <summary className="btn btn-ghost normal-case text-xl">
                  Themes
                </summary>
                <ul className="p-2 bg-base-100">
                  <li><a onClick={() => setTheme("light")}>Light</a></li>
                  <li><a onClick={() => setTheme("night")}>Night</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <Footer theme={theme} />
      </main>
  );
}
