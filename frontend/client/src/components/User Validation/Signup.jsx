// SignupForm.js
import React, { useState } from 'react';
import { FormControl, Input, FormLabel, FormErrorMessage, Button, Heading, Text, Flex, Link as ChakraLink, useToast } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const toast = useToast();
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!username || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/api/signup', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Signup successful');
      toast({
        title: 'Signup successful',
        description: 'You have successfully signed up.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
      navigate('/');
    } catch (err) {
      setError('Signup failed. Please try again later.');
      console.error('Signup error:', err);
      toast({
        title: 'Signup failed',
        description: 'Invalid username or password. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right' 
      });
    }
    
  };

  return (
    <Flex justifyContent='center' alignItems='center' height='100vh'>
      <FormControl color="black" w={"40vw"} p={"3%"} bgColor={"white"} rounded={"25px"}>
        <Heading color='#b83280' my={"2%"}>Signup</Heading>
        <Text>Please Enter the following details</Text>
        <FormLabel my={"2%"}>username</FormLabel>
        <Input type="username" value={username} onChange={(e) => setusername(e.target.value)} />
        <FormLabel my={"2%"}>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <FormLabel my={"2%"}>Confirm Password</FormLabel>
        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {error && <Text color="red">{error}</Text>}
        <Button colorScheme='pink' onClick={handleSubmit}>
          Signup
        </Button>
        <Link to='/login'>
          <ChakraLink color='#b83280' ml={2} mt={2} display='inline-flex' alignItems='center'>
            <ArrowBackIcon /> Login
          </ChakraLink>
        </Link>
      </FormControl>
    </Flex>
  );
};

export default SignupForm;
