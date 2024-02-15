import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import test from '../../Assets/test.jpg'
const About = () => {
  return (
    <>
      <Flex
        bgImage={test}
        // bgSize='100% 100%'
        width="100%"
        top="1rem"
        right="1rem"
        align="center"
        justifyContent="center"
        mt="14vh"
      >
        <Text fontSize="8xl" fontFamily="Honk">
          About
        </Text>
      </Flex>
      <Flex
      marginBottom='7rem'
        textAlign='center'
        padding='0 15vw'
        align="center"
        fontSize='x-large'
        fontFamily='kanit'
        justifyContent="center"
        mt="14vh"
      >
        <Text color='#c83280'>
        Welcome to UnusualScoops, where we take your taste buds on an extraordinary journey around the globe! At UnusualScoops, we're passionate about redefining the ice cream experience by showcasing the most unconventional and delightful flavors from diverse cultures. From the tantalizing streets of Tokyo to the vibrant markets of Mexico City, we source the most unique and unexpected ingredients to create our one-of-a-kind frozen treats. Whether you're craving the exotic allure of durian, the spicy kick of chili mango, or the intriguing blend of lavender honey, our curated collection of flavors promises to surprise and delight even the most adventurous palates. Join us as we celebrate the boundless creativity and ingenuity found in the world of ice cream. Unleash your sense of adventure and indulge in a scoop of the extraordinary with UnusualScoops!</Text>
      </Flex>
    </>
  )
}

export default About