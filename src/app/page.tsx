'use client'

export default function Home() {
  return (
    <main data-theme="light">
      <div className="hero min-h-screen" style={{backgroundImage: `url("https://images.pexels.com/photos/3975590/pexels-photo-3975590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Have you ever imagined how intelligent and creative you could become? If yes - this application is for you.
            Spend time with pleasure and have fun.</p>
            <button className="btn btn-success">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
