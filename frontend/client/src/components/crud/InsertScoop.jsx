import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Heading,
  Text,
  Flex,
  Toast,
  Link as ChakraLink
} from '@chakra-ui/react';

import axios from 'axios';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const InsertScoop = () => {
  const [input, setInput] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [origin, setOrigin] = useState('');
  const [link, setLink] = useState('');
  const [rating, setRating] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {

    const getUserFromCookie = () => {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'User') {
          return value;
        }
      }
      return null;
    };


    setUser(getUserFromCookie());
  }, []);

  const navigate = useNavigate();
  const toast = useToast();

  const data = {
    name: input,
    ingredient: ingredient,
    origin: origin,
    rating: rating,
    image: link,
    username: user || ''
  };
  

  const SubmitPost = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        name: input,
        ingredient: ingredient,
        origin: origin,
        rating: rating,
        image: link,
        username: user || ''
      };
  
      await axios.post('https://unusualscoops.onrender.com/api/', postData);
      console.log(postData);
      console.log('Scoop posted successfully!');
      toast({
        title: 'Scoop posted successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right', 
      });
      navigate('/');
    } catch (err) {
      console.error('Error posting scoop:', err);
      toast({
        title: 'Error posting scoop',
        description: 'An error occurred while posting the scoop. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right', 
      });
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);
  const handleIngredientChange = (e) => setIngredient(e.target.value);
  const handleOriginChange = (e) => setOrigin(e.target.value);
  const handleLinkChange = (e) => setLink(e.target.value);
  const handleRatingChange = (valueAsString) => setRating(valueAsString);

  const isError = input === '';

  return (
    <Flex justifyContent='center' marginTop='8%'>
      <FormControl color="black" isInvalid={isError} w={"40vw"} p={"3%"} bgColor={"white"} rounded={"25px"}>
        <Heading color='#b83280' my={"2%"}>New Scoop</Heading>
        <Text>Please Enter the following details</Text>
        <FormLabel my={"2%"}>Flavour</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText color='#b83280'>Enter the Flavour you'd like your post to have.</FormHelperText>
        ) : (
          <FormErrorMessage>Flavour Name is required.</FormErrorMessage>
        )}

        <FormLabel my={"2%"}>Ingredient</FormLabel>
        <Input type="text" value={ingredient} onChange={handleIngredientChange} />
        {!isError ? (
          <FormHelperText color='#b83280'>Enter the Ingredient(s) you'd like your post to have.</FormHelperText>
        ) : (
          <FormErrorMessage>Ingredient(s) is required.</FormErrorMessage>
        )}

        <FormLabel my={"2%"}>Origin</FormLabel>
        <Input type="text" value={origin} onChange={handleOriginChange} />
        {!isError ? (
          <FormHelperText color='#b83280'>Enter the Origin you'd like your post to have.</FormHelperText>
        ) : (
          <FormErrorMessage>Origin is required.</FormErrorMessage>
        )}

        <FormLabel my={"2%"}>Rating</FormLabel>
        <NumberInput max={10} min={0} value={rating} onChange={handleRatingChange}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel my={"2%"}>Image Link</FormLabel>
        <Input type="text" value={link} onChange={handleLinkChange} />
        {!isError ? (
          <FormHelperText color='#b83280'>Provide the link of the Scoop you'd like to add.</FormHelperText>
        ) : (
          <FormErrorMessage>Link is required.</FormErrorMessage>
        )}

        <Link to={'/'}>
          <ChakraLink>
            <Button colorScheme='pink' leftIcon={<ArrowLeftIcon />}>Go Back</Button> &nbsp; &nbsp;
          </ChakraLink>
        </Link>
        <Button colorScheme='pink' my={"2%"} onClick={SubmitPost}>Submit</Button>
      </FormControl>
    </Flex>
  );
};

export default InsertScoop;
