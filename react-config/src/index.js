import "./index.css";
import "./assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import "./config/configAxios";
import { ToastContainer, Zoom } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";


const container = document.getElementById("root");
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ToastContainer
                        position="top-right"
                        transition={Zoom}
                        autoClose={5000}
                        draggable={false}
                        icon={false}
                        closeButton={false}
                        rtl
                        newestOnTop
                        closeOnClick
                        pauseOnFocusLoss
                        hideProgressBar
                    />
                    <Suspense fallback={() => <div>loading...</div>}>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </Suspense>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your store, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
