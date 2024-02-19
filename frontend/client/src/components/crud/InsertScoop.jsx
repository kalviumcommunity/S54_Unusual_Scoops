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
  Text
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
    "Flavour" : input ,
    "Ingredient" : ingredient,
    "Origin" : input,
    "Rating" : rating,
    "image" : link 
    }
  const SubmitPost = (e) => {
    e.preventDefault();
    const postScoop = async () => {
      try {
        await axios.post('https://unusualscoops.onrender.com/api/',data);
        console.log(data)
        console.log('Scoop posted successfully!');

        
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
    <div>
      <FormControl  color="black" isInvalid={isError} w={"40vw"} p={"3%"} bgColor={"white"} rounded={"25px"}>
        <Heading my={"2%"}>New Post </Heading>
        <Text>Please Enter the following details</Text>
        <FormLabel  my={"2%"}>Title</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>Enter the title you'd like your post to have.</FormHelperText>
        ) : (
          <FormErrorMessage>Title is required.</FormErrorMessage>
        )}
        
        <FormLabel  my={"2%"}>Ingredient</FormLabel>
        <Input type="text" value={ingredient} onChange={handleIngredientChange} />
        {!isError ? (
          <FormHelperText>Enter the Ingredient you'd like your post to have.</FormHelperText>
        ) : (
          <FormErrorMessage>Ingredient is required.</FormErrorMessage>
        )}

        <FormLabel  my={"2%"}>Origin</FormLabel>
        <Input type="text" value={origin} onChange={handleOriginChange} />
        {!isError ? (
          <FormHelperText>Enter the Origin you'd like your post to have.</FormHelperText>
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

        <FormLabel my={"2%"}>Link</FormLabel>
        <Input type="text" value={link} onChange={handleLinkChange} />
        {!isError ? (
          <FormHelperText>Provide the link of the stunt you'd like to add.</FormHelperText>
        ) : (
          <FormErrorMessage>Link is required.</FormErrorMessage>
        )}

        <Link to={'/'}>
        <Button className='btn btn3' leftIcon={<ArrowLeftIcon />}>Go Back</Button> &nbsp; &nbsp;
        </Link>
        <Button className='btn btn2' my={"2%"} onClick={SubmitPost}>Submit</Button>
      </FormControl>
    </div>
  );
};

export default InsertScoop