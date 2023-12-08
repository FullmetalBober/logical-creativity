'use client';
import React, {useState, useEffect} from "react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/layout/Footer";
import Notification from "@/components/layout/Notification";
import Developers from "@/components/layout/Developers";
import "../styles/App.css";
import config from "../../tailwind.config";
import ReactDOM from "react-dom";
// @ts-ignore
import { lightTheme, darkTheme } from "@/styles/styles";
// @ts-ignore
import styled, {ThemeProvider} from 'styled-components';
import TextSizeControl from "@/components/layout/TextSizeControl";
import {GlobalStyle} from "@/styles/styles";
import styles from "../styles/index.module.css";

export default function Home() {
  const theme = localStorage.getItem("theme");
  const [themeState, setThemeState] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState('black-on-white');

    const ThemeContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 20px;
      background: ${selectedTheme === "light" ? "#fff" : "#000"};
      color: ${selectedTheme === "light" ? "#000" : "#fff"};
      border-bottom: 1px solid hsl(0, 0%, 87%);
    `;

    const ThemeButton = styled.button`
      margin: 0 5px;
      font-size: 1rem;
      border: 1px solid hsl(0, 0%, 87%);
      border-radius: 5px;
      width: 100px;
      height: 35px;
      cursor: pointer;
      background: ${selectedTheme === "light" ? "white" : "black"};
      color: ${selectedTheme === "light" ? "black" : "white"};
      &:hover {
        box-shadow: 2px 2px 2px hsl(0, 0%, 87%);
`;

    const handleThemeChange = () => {
        selectedTheme === "light" ? setSelectedTheme("dark") : setSelectedTheme("light");
    }

    const handleShowNotification = () => {
        setShowNotification(true);
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            handleShowNotification();
        }, 1000);
    }, [])

    const saveTheme = (t: String) => {
        localStorage.setItem("theme", t.toString());
        setThemeState(t.toString());
    }

    return (
        <main className="homePageMain" id="main" style={{ fontSize, color: contrast === 'black-on-white' ? 'black' : 'white', background: contrast === 'black-on-white' ? 'white' : 'black' }}>
            <ThemeProvider theme={selectedTheme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
            <UniversalHeader theme={selectedTheme} />
        <div className="hero min-h-screen" data-theme={selectedTheme} style={{backgroundImage: `url("https://images.pexels.com/photos/3975590/pexels-photo-3975590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
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
          <div data-theme={selectedTheme} style={{padding: 100}}>
              <h1 style={{textAlign: "center", fontSize: 36}}>Our Team</h1>
              <Developers />
          </div>
                <dialog id="my_modal_1" className="modal" open={isOpen}>
                    <div className="modal-box" style={{background: "#0F172A"}}>
                        <ThemeContainer style={{background: "#0F172A", color: "darkorange"}}>
                            <span>Change theme: </span>
                            <ThemeButton onClick={() => handleThemeChange()}>{selectedTheme.toString()}</ThemeButton><br /><br/>
                            <TextSizeControl onChange={setFontSize} /><br /><br/>
                        </ThemeContainer>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => setIsOpen(false)}>Close</button>
                            </form>
                        </div>
                  </div>
                </dialog>
                <div className={styles.modalContainer}>
                    <button onClick={() => setIsOpen(true)} className={styles.modalBtn}>Settings</button>
                </div>
        <Footer theme={selectedTheme} />
            </ThemeProvider>
          {/*Notification*/}
          <div>
              {showNotification &&
                  ReactDOM.createPortal(
                      <Notification message="Welcome! You have successfully entered as a guest" onClose={handleCloseNotification} />,
                      document.body
                  )}
          </div>
        </main>
  );
}


