import React from 'react'
import wasabiPic from '../../Assets/wasabi.png'
import ratingImg from '../../Assets/ratingIcon.png'
import {
    Box,
    SimpleGrid,
    GridItem,
    Grid,
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
    <>
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
        fontFamily='Honk'>Unusual Scoops
        </Text>
      </Flex>
      <Flex
      width="100%"
      top="1rem"
      right="1rem"
      align="center"
      justifyContent="center"
      mt="14vh">
        <SimpleGrid columns={3} spacingX='15vw' spacingY='15vh'>
          <Box bg='#ff5f96' width='16vw' borderRadius='50px' padding='2vw' boxShadow ='#ffee6e -13px 8px 0 2px,black -13px 8px 0 8px' border='6px solid black'>
            <Image src={wasabiPic} borderRadius='25px' width='15vw'></Image>
            <Text fontSize='20px'as='b'>Wasabi Ice Cream</Text>
            <Text fontSize='18px' as='b'> Origin : Japan</Text>
            <Flex
            align='center'
            >
              <Text fontSize='30px' as='b' ml='2'>7</Text>
              <Image src={ratingImg} width='30px'></Image>
            </Flex>
          </Box>
          <Box bg='#ff5f96' width='16vw' borderRadius='50px' padding='2vw' boxShadow ='#ffee6e -13px 8px 0 2px,black -13px 8px 0 8px' border='6px solid black'>
            <Image src={wasabiPic} borderRadius='25px' width='15vw'></Image>
            <Text fontSize='20px'as='b'>Wasabi Ice Cream</Text>
            <Text fontSize='18px' as='b'> Origin : Japan</Text>
            <Flex
            align='center'
            >
              <Text fontSize='30px' as='b' ml='2'>7</Text>
              <Image src={ratingImg} width='30px'></Image>
            </Flex>
          </Box>
          <Box bg='#ff5f96' width='16vw' borderRadius='50px' padding='2vw' boxShadow ='#ffee6e -13px 8px 0 2px,black -13px 8px 0 8px' border='6px solid black'>
            <Image src={wasabiPic} borderRadius='25px' width='15vw'></Image>
            <Text fontSize='20px'as='b'>Wasabi Ice Cream</Text>
            <Text fontSize='18px' as='b'> Origin : Japan</Text>
            <Flex
            align='center'
            >
              <Text fontSize='30px' as='b' ml='2'>7</Text>
              <Image src={ratingImg} width='30px'></Image>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  )
}

export default Content