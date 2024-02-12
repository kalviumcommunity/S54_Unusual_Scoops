import React from 'react'
import {
    Text,
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton,
    Image
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Content = () => {
  return (
    <Flex
        width= "100%"
        top="1rem"
        right="1rem"
        align="center"
        justifyContent='center'
        mt='14vh'
        >
        <Text 
        fontSize='8xl'
        fontFamily='Honk'>Unusual Scoops</Text>
        </Flex>
  )
}

export default Content