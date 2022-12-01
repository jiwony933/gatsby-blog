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
      <h3>
        안녕하세요. <strong>프론트엔드 개발자 김지원</strong>입니다.
      </h3>
      <h4>Hello, I'm Front-End Developer.</h4>
      {/* <ContentTitle>Main Techs</ContentTitle>
      TypeScript, NextJs, React, HTML, CSS, JavaScript
      <ContentTitle>Tools</ContentTitle>
      Git & github, Notion, Slack, Jira, */}
    </Container>
  )
}

export default Bio

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const StackBox = styled.div`
  display: flex;
  gap: 5px;

  img {
    height: 20px;
    border-radius: 10px;
  }
`

const ContentTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`
