import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Text, Flex, Image, Button } from '@chakra-ui/react';
import ratingImg from '../../Assets/ratingIcon.png';
import test from '../../Assets/test.jpg';
import { Link } from 'react-router-dom';
import UpdateDeleteScoop from '../crud/UpdateScoop';

const Content = () => {
  const [scoops, setScoops] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://unusualscoops.onrender.com/api/datas');
      setScoops(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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
        <Text fontSize="8xl" fontFamily="Honk"  >
          Unusual Scoops
        </Text>
      </Flex>
      {/* Remove the user selection section */}
      <Flex
        width="100%"
        top="1rem"
        right="1rem"
        align="center"
        justifyContent="center"
        mt="14vh"
        marginBottom="5rem"
      >
        <SimpleGrid columns={3} spacingX="15vw" spacingY="15vh">
          {/* Render scoops */}
          {scoops.map((scoop, index) => (
            <UpdateDeleteScoop key={scoop._id} scoop={scoop} onUpdate={fetchData} onDelete={fetchData} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Content;
