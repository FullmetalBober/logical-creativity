'use client';
import React, {useEffect} from "react";
import {Provider, useDispatch, useSelector} from 'react-redux';
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
import {GlobalStyle} from "@/styles/styles";
import styles from "../styles/index.module.css";
// @ts-ignore
import {setTheme, showNotification, closeNotification, increaseFontSize, decreaseFontSize, setSettingsIsOpen} from "../redux/actions/actions";
import store from "../redux/stores/store";

export default function Home() {

    const dispatch = useDispatch();
    // @ts-ignore
    const { theme, fontSize } = useSelector((state) => state);

    const handleThemeChange = (theme: String) => {
        dispatch(setTheme(theme));
    };

    const handleSettingsIsOpen = (isOpen: Boolean) => {
        dispatch(setSettingsIsOpen(isOpen));
    }

    const handleShowNotification = () => {
        dispatch(showNotification());
    };

    const handleCloseNotification = () => {
        dispatch(closeNotification());
    };

   const handleIncreaseFontSize = (num: Number) => {
       // @ts-ignore
       dispatch(increaseFontSize(num));
   }

   const handleDecreaseFontSize = (num: Number) => {
       // @ts-ignore
       dispatch(decreaseFontSize(num));
   }

    useEffect(() => {
        const delay = setTimeout(() => {
            handleShowNotification();
        }, 1000);
    }, []);

    const ThemeContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 20px;
      background: ${theme === "light" ? "#fff" : "#000"};
      color: ${theme === "light" ? "#000" : "#fff"};
      border-bottom: 1px solid hsl(0, 0%, 87%);
    `;

    return (
        <main className="homePageMain" id="main">
            <Provider store={store}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <UniversalHeader theme={theme} />
        <div className="hero min-h-screen" data-theme={theme} style={{backgroundImage: `url("https://images.pexels.com/photos/3975590/pexels-photo-3975590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, fontSize: fontSize}}>
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
                        <li onClick={() => handleThemeChange(t.toString())} key={t.toString()}><a>{t}</a></li>
                    );
                  })
                  }
                </ul>
              </details>
            </div>
          </div>
        </div>
          <div data-theme={theme} style={{padding: 100}}>
              <h1 style={{textAlign: "center", fontSize: 36}}>Our Team</h1>
              <Developers />
          </div>
                <dialog id="my_modal_1" className="modal" open={store.getState().isOpen}>
                    <div className="modal-box" style={{background: "#0F172A"}}>
                        <ThemeContainer style={{background: "#0F172A", color: "darkorange", fontSize: fontSize}}>
                            <label>Font Size: </label>
                            <button className="font-btn" onClick={() => handleIncreaseFontSize(1)}> + </button>
                            <span>{ store.getState().fontSize }</span>
                            <button className="font-btn" onClick={() => handleDecreaseFontSize(1)}> - </button>
                        </ThemeContainer>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => handleSettingsIsOpen(false)}>Close</button>
                            </form>
                        </div>
                  </div>
                </dialog>
                <div className={styles.modalContainer}>
                    <button onClick={() => handleSettingsIsOpen(true)} className={styles.modalBtn}>Settings</button>
                </div>
        <Footer theme={theme} />
            </ThemeProvider>
          <div>
              {store.getState().showNotification &&
                  ReactDOM.createPortal(
                      <Notification message="Welcome! You have successfully entered as a guest" onClose={handleCloseNotification} />,
                      document.body
                  )}
          </div>
            </Provider>
        </main>
  );
}


