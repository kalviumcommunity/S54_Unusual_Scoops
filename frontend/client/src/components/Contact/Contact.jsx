import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import test from '../../Assets/test.jpg'
const Contact = () => {
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
          Contact US
        </Text>
      </Flex>
      <Flex
        textAlign='left'
        marginBottom='5rem'
        padding='0 15vw'
        align="center"
        fontSize='x-large'
        fontFamily='kanit'
        justifyContent="center"
        mt="14vh"
      >
        <Text color='#c83280'>
        We'd love to hear from you! Whether you have a question about our unusual ice cream flavors, want to collaborate, or    simply want to say hello, feel free to reach out to us using the contact information below: <br /><br />

        Email: info@unusualscoops.com <br />
        Phone: +91 9895609828 <br />
        Address: Lovely Professional University, Phagwara, Punjab, 144411 <br />
<br />
        You can also connect with us on social media for the latest updates, special offers, and behind-the-scenes glimpses of  our unique creations: <br /><br />
 
        Instagram: @unusualscoops <br />
        Facebook: /unusualscoops <br />
        Twitter: @unusualscoops <br /><br />

        We're here to ensure your UnusualScoops experience is as delightful as our flavors, so don't hesitate to get in touch! 
        </Text>
      </Flex>
    </>
  )
}

export default Contact

