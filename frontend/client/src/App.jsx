import react from 'react'
import './App.css'
import { Heading, Text, Box, Flex } from "@chakra-ui/react"
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import AllRoutes from './components/AllRoutes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
