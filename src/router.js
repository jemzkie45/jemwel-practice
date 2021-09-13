import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"

function AppRouter() {
    return (
        <ThemeProvider them={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}