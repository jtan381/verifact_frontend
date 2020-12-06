import React, { useState } from "react";
import styled from "styled-components";
import QuestionForm from "../components/QuestionForm"

export default function AskQuestion() {
  const [articleLink, setArticleLink] = useState("");
  const [statement, setStatement] = useState("");

  return <Wrapper>
    <FormWrapper>
      <QuestionForm articleLink={articleLink} setArticleLink={setArticleLink} statement={statement} setStatement={setStatement} />
    </FormWrapper>
  </Wrapper>

}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
`;

const FormWrapper = styled.div`
  width:55rem;
  height: 58.6rem;
  background: #EEF0F2;
  border-radius: 2rem;
  padding: 5rem 5rem;
  margin: 4rem 0;
`;
