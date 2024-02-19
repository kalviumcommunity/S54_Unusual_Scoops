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
  Flex
} from '@chakra-ui/react';

import axios from 'axios';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Link, redirect } from 'react-router-dom';

const InsertScoop = () => {    
  const [input, setInput] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [origin, setOrigin] = useState('');
  const [link, setLink] = useState('');
  const [rating, setRating] = useState('');
  // const Redirect = redirect()
    const data = {
    "name" : input ,
    "ingredient" : ingredient,
    "origin" : origin,
    "rating" : rating,
    "image" : link 
    }
  const SubmitPost = (e) => {
    e.preventDefault();
    const postScoop = async () => {
      try {
        await axios.post('https://unusualscoops.onrender.com/api/',data);
        console.log(data)
        console.log('Scoop posted successfully!');
        redirect('/')
      } catch (err) {
        console.error('Error posting scoop:', err);
      }
    };
    postScoop();
  };

  const handleInputChange = (e) => setInput(e.target.value);
  const handleIngredientChange = (e) => setIngredient(e.target.value);
  const handleOriginChange = (e) => setOrigin(e.target.value);
  const handleLinkChange = (e) => setLink(e.target.value);
  const handleRatingChange = (valueAsString) => setRating(valueAsString);

  const isError = input === '';

  return (
    <Flex
    justifyContent='center' marginTop='8%'> 
      <FormControl  color="black" isInvalid={isError} w={"40vw"} p={"3%"} bgColor={"white"} rounded={"25px"}>
        <Heading color='#b83280' my={"2%"}>New Scoop</Heading>
        <Text>Please Enter the following details</Text>
        <FormLabel  my={"2%"}>Flavour</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText color='#b83280'>Enter the Flavour you'd like your post to have.</FormHelperText>
        ) : (
          <FormErrorMessage>Flavour Name is required.</FormErrorMessage>
        )}
        
        <FormLabel  my={"2%"}>Ingredient</FormLabel>
        <Input type="text" value={ingredient} onChange={handleIngredientChange} />
        {!isError ? (
          <FormHelperText color='#b83280'>Enter the Ingredient(s) you'd like your post to have.</FormHelperText>
        ) : (
          <FormErrorMessage>Ingredient(s) is required.</FormErrorMessage>
        )}

        <FormLabel  my={"2%"}>Origin</FormLabel>
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
        <Button colorScheme='pink' leftIcon={<ArrowLeftIcon />}>Go Back</Button> &nbsp; &nbsp;
        </Link>
        <Button colorScheme='pink' my={"2%"} onClick={SubmitPost}>Submit</Button>
      </FormControl>
    </Flex>
  );
};

export default InsertScoop