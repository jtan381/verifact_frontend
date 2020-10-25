import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

export default function QuestionForm(props) {
  const { createHistory, articleLink, setArticleLink, statement, setStatement } = props

  const handleArticleLink = (e) => {
    setArticleLink(e.target.value)
  }

  const handleStatement = (e) => {
    setStatement(e.target.value)
  }

  const summitQuestion = (e) => {
    // TBC: articleLink validation
    // TODO: POST articleLink & statement to DB.
    // Eg. {articleLink:<articleLink>, statement:<statement>}
    console.log(articleLink)
    console.log(statement)
  }

  const cancle = (e) => {
    console.log(e)
    let history = createHistory();
    history.push("/");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  }

  return <>
    <Header >Ask a Question</Header>
    <p style={{ paddingBottom: '20px' }}>Find out how accurate the news your reading is. Ask our community if what you’re reading is true or false, and get a variety of viewpoints on the article.</p>
    <Form onSubmit={summitQuestion}>
      <Form.Group controlId="formGroupNewsURL" style={{ paddingBottom: '20px' }}>
        <CustomFormLabel>News URL</CustomFormLabel>
        <Form.Control onChange={handleArticleLink} type="text" placeholder="https://example.com/article" />
      </Form.Group>
      <Form.Group controlId="formGroupQuestion" style={{ paddingBottom: '20px' }}>
        <CustomFormLabel>Question</CustomFormLabel>
        <Form.Control onChange={handleStatement} as="textarea" rows="4" placeholder="eg. Are these PAP flags along Marine Crescent part of the party’s GE2020 campaign?" />
      </Form.Group>

      <div align="right" >
        <CancleButton onClick={cancle}>
          Cancle
            </CancleButton>
        <SubmitButton variant="warning" type="summit">
          Submit Question
            </SubmitButton>
      </div>
    </Form>
  </>
}

const Header = styled.h1`
  font-weight: 700;
  font-family: SF Pro Display;
  padding-bottom: 20px;
`;

const CustomFormLabel = styled(Form.Label)`
  font-weight: bold;
  font-size: 16px;
`;

const SubmitButton = styled(Button)`
  border-radius: 10px;
  font-weight:bold;
  font-size: 14px;
  padding: 10px 15px;
`;

const CancleButton = styled(Button)`
  border-radius: 10px;
  font-weight:bold;
  font-size: 14px;

  padding: 10px 15px;
  margin-right: 5px;
  
  background: #EEF0F2;
  color: black;
  border: none;
  transition-duration: 0.4s;
  
  :hover{
    background-color: lightgrey;
    color:black;
  }
`;