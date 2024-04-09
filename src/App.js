import React, { useEffect, useState } from "react";
import FirstPage from "../src/pages/FirstPage/FirstPage";
import Logo from "../src/pages/Logo/Logo";
import Homepage from "../src/components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
    const [currentPage, setCurrentPage] = useState("FirstPage");

    useEffect(() => {
        const firstPageTimer = setTimeout(() => {
            setCurrentPage("Logo");
        }, 20000);

        const logoPageTimer = setTimeout(() => {
            setCurrentPage("Homepage");
        }, 40000);

        // Clear timers to avoid memory leaks
        return () => {
            clearTimeout(firstPageTimer);
            clearTimeout(logoPageTimer);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    // Render the current page based on the state
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={FirstPage} />
                <Route path="/logo" component={Logo} />
                <Route path="/homepage" component={Homepage} />

            </Switch>
        </Router>
    );
};

export default App;
