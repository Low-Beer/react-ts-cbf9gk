import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import App from "./App";
import store from "./store/index";
import { CategoriesProvider } from "./context/events-context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    // BrowserRouter is important to activate the router feature
    <Provider store={store}>
        <BrowserRouter>
            <CategoriesProvider>
                <App />
            </CategoriesProvider>
        </BrowserRouter>
    </Provider>
    );