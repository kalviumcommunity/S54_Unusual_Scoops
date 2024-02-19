import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Text, Flex, Image } from '@chakra-ui/react';
import ratingImg from '../../Assets/ratingIcon.png';
import test from '../../Assets/test.jpg'
const Content = () => {
  const [scoops, setScoops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://unusualscoops.onrender.com/api');
        setScoops(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Flex
        bgImage={test}
        width="100%"
        top="1rem"
        right="1rem"
        align="center"
        justifyContent="center"
        mt="14vh"
      >
        <Text fontSize="8xl" fontFamily="Honk">
          Unusual Scoops
        </Text>
      </Flex>
      <Flex
        width="100%"
        top="1rem"
        right="1rem"
        align="center"
        justifyContent="center"
        mt="14vh"
        marginBottom='5rem'
      >
        <SimpleGrid columns={3} spacingX="15vw" spacingY="15vh">
          {scoops.map((scoop, index) => (
            <Box
              key={index}
              _hover={{
                boxShadow: '#ffee6e -8px 4px 0 2px,black -8px 4px 0 8px',
              }}
              bg="#ff5f96"
              width="20vw"
              borderRadius="50px"
              padding="2vw"
              boxShadow="#ffee6e -13px 8px 0 2px,black -13px 8px 0 8px"
              border="6px solid black"
            >
              <Image src={scoop.image} borderRadius="25px" width="15vw" height="25vh" /><br />
              <Text fontSize="20px" as="b">
                {scoop.name}
              </Text> <br />
              <Text fontSize="18px" as="b">
                Origin: {scoop.origin}
              </Text>
              <Flex align="center" justifyContent='flex-end'>
                <Text fontSize="30px" as="b" ml="2">
                  {scoop.rating}
                </Text>
                <Image src={ratingImg} width="30px" />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Content;
