import React, {useRef} from 'react';
import "./assets/scss/main.scss";
import Sidebar from "./view/layouts/sidebar";
import Header from "./view/layouts/header";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import routs from "./routing/routs";
import {createMemoryHistory } from "history"
import Courses from "./view/pages/courses";
import Tasks from "./view/pages/tasks";
import Users from "./view/pages/users";

function App() {
    const pages = useRef({
        "/courses": <Courses />,
        "/tasks": <Tasks />,
        "/users": <Users />,
        "/":  <Courses />
    })
    const history = createMemoryHistory();
  return (
    <div className="App">
        <BrowserRouter location={history.location} navigator={history}>
            <Sidebar/>
            <main className="mainLayout">
                <Header />
                <Routes>
                    {
                        routs.map(item =>(<Route key={item.id} path={item.path} element={pages.current[item.path]}/>))
                    }
                </Routes>

            </main>
        </BrowserRouter>

    </div>
  );
}

export default App;
