import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import AskQuestionPage from "../views/AskQuestionPage";
import NotFound from "../views/404";

export default [
  <Route exact key="home" path="/" component={LandingPage} />,
  <Route exact key="askquestion" path="/askquestion" component={AskQuestionPage} />,
  <Route key="404" path="*" component={NotFound} />,
];