import React, { useState } from "react";
import styled from "styled-components";
import QuestionForm from "../components/QuestionForm"

export default function AskQuestionPage() {
  const createHistory = require("history").createBrowserHistory;
  const [articleLink, setArticleLink] = useState("");
  const [statement, setStatement] = useState("");

  return <Wrapper>
    <FormWrapper>
      <QuestionForm createHistory={createHistory} articleLink={articleLink}
        setArticleLink={setArticleLink} statement={statement} setStatement={setStatement} />
    </FormWrapper>
  </Wrapper>

}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
`;

const FormWrapper = styled.div`
  width:550px;
  height: 586px;
  background: #EEF0F2;
  border-radius: 20px;
  padding: 50px 50px;
  margin: 5%;
`;
