import React from "react";
import { Route } from "react-router-dom";
import Home from "../views/Home";
import AskQuestionPage from "../views/AskQuestionPage";
import NotFound from "../views/404";

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="askquestion" path="/askquestion" component={AskQuestionPage} />,
  <Route key="404" path="*" component={NotFound} />,
];