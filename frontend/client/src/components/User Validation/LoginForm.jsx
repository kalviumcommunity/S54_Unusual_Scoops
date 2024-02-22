// LoginForm.js
import React, { useState } from 'react';
import { FormControl, Input, FormLabel, FormErrorMessage, Button, Heading, Text, Flex, Link as ChakraLink, useToast } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });
      // Handle successful login
      toast({
        title: 'Login successful',
        description: 'You have successfully logged in.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
      navigate('/');
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
      toast({
        title: 'Login failed',
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
        <Heading color='#b83280' my={"2%"}>Login</Heading>
        <Text>Please Enter the following details</Text>
        <FormLabel my={"2%"}>username</FormLabel>
        <Input type="username" value={username} onChange={(e) => setusername(e.target.value)} />
        <FormLabel my={"2%"}>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme='pink' onClick={handleSubmit}>
          Login
        </Button>
        <Link to='/signup'>
          <ChakraLink color='#b83280' ml={2} mt={2} display='inline-flex' alignItems='center'>
            <ArrowBackIcon /> Signup
          </ChakraLink>
        </Link>
      </FormControl>
    </Flex>
  );
};

export default LoginForm;
