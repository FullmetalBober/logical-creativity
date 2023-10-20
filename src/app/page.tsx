'use client';
import React, {useState, Suspense, useEffect} from "react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/layout/Footer";
import ListExample from "@/components/layout/ListExample";
import "../styles/App.css";
import config from "../../tailwind.config";

export default function Home() {
  const theme = localStorage.getItem("theme");
  const userType = localStorage.getItem("userType");
  const [themeState, setThemeState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("guest");

  useEffect(() => {
      // @ts-ignore
      !isOpen ? document.getElementById("my_modal_1").showModal() : null;
  }, [isOpen, user]);
    let setUserType = (userType: String, id: String) => {
        let el = document.getElementsByClassName("py-4");
        el[parseInt(id.toString())].classList.add("user-type-active");
        localStorage.removeItem("userType");
        localStorage.setItem("userType".toString(), userType.toString());
        setUser(userType.toString());

        if(parseInt(id.toString()) === 0) {
            el[1].classList.remove("user-type-active");
        }else if (parseInt(id.toString()) === 1) {
            el[0].classList.remove("user-type-active");
        }
    }

    const saveTheme = (t: String) => {
        localStorage.setItem("theme", t.toString());
        setThemeState(t.toString());
    }

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
                  {config.daisyui.themes.map((t: String) => {
                    return (
                        <li onClick={() => saveTheme(t.toString())} key={t.toString()}><a>{t}</a></li>
                    );
                  })
                  }
                </ul>
              </details>
            </div>
          </div>
        </div>
          <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                  <h3 className="font-bold text-lg">Welcome</h3>
                  <p className="py-4" onClick={() => setUserType("guest", "0")}>Continue as guest</p>
                  <p className="py-4" onClick={() => setUserType("admin", "1")}>Continue as admin</p>
                  {userType === "guest" ? <p><span style={{color: 'crimson'}}>You were logged in successfully as {user}</span></p> :
                      <p><span style={{color: 'crimson'}}>You were logged in successfully as {user}</span></p>
                  }
                  <div className="modal-action">
                      <form method="dialog">
                          <button className="btn">Close</button>
                      </form>
                  </div>
              </div>
          </dialog>
          <ListExample />
          {/*<Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>*/}

          {/*</Suspense>*/}
        <Footer theme={theme} />
      </main>
  );
}


