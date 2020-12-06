import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

export default function QuestionForm(props) {
  const history = useHistory()
  const { articleLink, setArticleLink, statement, setStatement } = props

  const summitQuestion = (e) => {
    // TBC: articleLink validation
    // TODO: POST articleLink & statement to DB.
    // Eg. {articleLink:<articleLink>, statement:<statement>}
    console.log(articleLink)
    console.log(statement)
  }

  return <Container>
    <div>
      <Header>Ask a Question</Header>
    </div>
    <div>
      <Description>Find out how accurate the news your reading is. Ask our community if what you’re reading is true or false, and get a variety of viewpoints on the article.</Description>
    </div>

    <form onSubmit={summitQuestion}>
      <FormContainer>
        <div>
          <FormWrapper controlId="formGroupNewsURL" >
            <FormLabel>News URL</FormLabel>
            <FormInput1 onChange={(e) => setArticleLink(e.target.value)} type="text" placeholder="https://example.com/article" required />
          </FormWrapper>
        </div>
        <div />
        <div>
          <FormWrapper controlId="formGroupQuestion">
            <FormLabel>Question</FormLabel>
            <FormInput2 onChange={(e) => setStatement(e.target.value)} as="textarea" placeholder="eg. Are these PAP flags along Marine Crescent part of the party’s GE2020 campaign?" required />
          </FormWrapper>
        </div>
        <div />
        <ButtonWrapper>
          <CancleButton onClick={() => history.push(`/`)}>Cancle</CancleButton>
          <SubmitButton variant="warning" type="summit">Submit Question</SubmitButton>
        </ButtonWrapper>
      </FormContainer>
    </form>
  </Container>
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 3rem;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: auto 2rem auto 3rem auto;
`;

const Header = styled.h1`
  font-weight: 700;
  font-family: SF Pro Display;
  font-size: 3.2rem;
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  font-family: Open Sans;
  line-height: 2.179rem;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
`;

const FormLabel = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
  font-family: Open Sans;
  margin-bottom: .5rem;
`;

const FormInput1 = styled.input`
  height: 5rem;
  font-family: Open Sans;
`;

const FormInput2 = styled.input`
  height: 12.8rem;
`;

const ButtonWrapper = styled.div`
  text-align: right;
`;

const SubmitButton = styled(Button)`
  border-radius: 1rem;
  font-weight:bold;
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
`;

const CancleButton = styled(Button)`
  border-radius: 1rem;
  font-weight:bold;
  font-size: 1.4rem;

  padding: 1rem 1.5rem;
  margin-right: .5rem;
  
  background: #EEF0F2;
  color: black;
  border: none;
  transition-duration: 0.4s;
  
  :hover{
    background-color: lightgrey;
    color:black;
  }
`;