import React from "react";
import LoginForm from "@pages/login/loginForm";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "@pages/dashboard/Dashboard";
import Navbar from "@components/navbar";
import { useSelector } from "react-redux";
import LeftSideBar from "@components/leftSideBar";
import AboutMe from "@pages/dashboard/about_me/AboutMe";
import Galeria from "@pages/dashboard/galeria/Galeria";
import Management from "@pages/dashboard/management/Management";
import Login from "@pages/login/Login";
import StudentPanel from "@pages/dashboard/management/student_panel/StudentPanel";
import LecturePanel from "@pages/dashboard/management/lecture_panel/LecturePanel";

function RouterGlobal() {
  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: true
  }));
  return (
    <>
      <Router>
        {/* {!!isLoggedIn && <Navbar />}
        {!!isLoggedIn && <LeftSideBar />}
        <Switch>
          {!isLoggedIn && <Route exact path="/login" component={LoginForm} />}
          {!!isLoggedIn && <Route exact path="/home" component={Dashboard} />}
          <Redirect to={"/"} />
        </Switch> */}

        <Navbar />
        <LeftSideBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/management" component={Management} />
          <Route exact path="/management/student-panel" component={StudentPanel} />
          <Route exact path="/management/lecture-panel" component={LecturePanel} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/galeria" component={Galeria} />
          <Redirect to={"/"} />
        </Switch>
      </Router>
    </>
  );
}

export default RouterGlobal;
