import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <Container>
      <Sentence>프론트엔드 개발자 김지원입니다.</Sentence>
      <Sentence>Front-End developer, Jiwon Kim.</Sentence>
      <FlexBox>
        <Button>
          <a href="https://github.com/jiwony933">Link to github</a>
        </Button>
        <MailButton>
          <a href="mailto:jiwony933@gmail.com">Link to G-mail</a>
        </MailButton>
      </FlexBox>
    </Container>
  )
}

export default Bio

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Sentence = styled.div`
  font-size: 20px;
`

const FlexBox = styled.div`
  display: flex;
  gap: 20px;
`

const Button = styled.button`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 10px 20px 10px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }
  :hover:after {
    top: 0px;
    left: 0px;
  }

  a {
    all: unset;
    text-decoration: none;
  }
`

const MailButton = styled(Button)`
  :after {
    background-color: #26c6da;
  }
`
