import React from "react"
import Header from '../components/header'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { GalaxyBg, Title } from "../components/profile/style"


export default function NotFound(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
        <link rel="canonical" href="https://kev95p.github.io/personal-site" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header {...props}></Header>
        <GalaxyBg>
            <Title>Not Found</Title>
        </GalaxyBg>
      </ThemeProvider>
    </>
  )
}
