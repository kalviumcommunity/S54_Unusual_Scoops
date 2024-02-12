import react from 'react'
import './App.css'
import { Heading, Text, Box, Flex } from "@chakra-ui/react"
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'

function App() {
  return (
    <>
      <Navbar/>
      <Content/>
    </>
  )
}

export default App
