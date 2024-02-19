import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';

const UpdateDeleteScoop = ({ scoop, onUpdate, onDelete }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: scoop.name,
    ingredient: scoop.ingredient,
    origin: scoop.origin,
    rating: scoop.rating,
    image: scoop.image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      setIsUpdating(true);
      await axios.put(`https://unusualscoops.onrender.com/api/${scoop._id}`, formData);
      console.log(formData)
      onUpdate();
      setIsUpdating(false);
      setIsOpen(false);
    } catch (error) {
      console.error('Error updating scoop:', error);
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`https://unusualscoops.onrender.com/api/${scoop._id}`);
      onDelete();
      setIsDeleting(false);
    } catch (error) {
      console.error('Error deleting scoop:', error);
      setIsDeleting(false);
    }
  };

  useEffect(()=>{
    console.log(formData)
  },[formData])

  return (
    <>
      <Box
        bg="#ff5f96"
        width="20vw"
        borderRadius="50px"
        padding="2vw"
        boxShadow="#ffee6e -13px 8px 0 2px,black -13px 8px 0 8px"
        border="6px solid black"
      >

        {scoop.image && <Image src={scoop.image} borderRadius="25px" width="15vw" height="25vh" />}
        <br />
        <Text fontSize="20px" as="b">
          {scoop.name}
        </Text> <br />
        <Text fontSize="18px" as="b">
          Origin: {scoop.origin}
        </Text>
        <Flex align="center" justifyContent='space-between' mt="2">
          <Text fontSize="30px" as="b">
            {scoop.rating}
          </Text>
          {!isUpdating && !isDeleting ? (
            <>
              <Button colorScheme="blue" onClick={() => setIsOpen(true)} disabled={isDeleting}>Update</Button>
              <Button onClick={handleDelete} colorScheme="red" disabled={isUpdating}>Delete</Button>
            </>
          ) : (
            <Text>{isUpdating ? 'Updating...' : 'Deleting...'}</Text>
          )}
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Scoop</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Ingredient</FormLabel>
              <Input type="text" name="ingredient" value={formData.ingredient} onChange={handleChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Origin</FormLabel>
              <Input type="text" name="origin" value={formData.origin} onChange={handleChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input type="text" name="rating" value={formData.rating} onChange={handleChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input type="text" name="image" value={formData.image} onChange={handleChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate} isLoading={isUpdating}>
              Save
            </Button>
            <Button colorScheme="red" onClick={() => setIsOpen(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateDeleteScoop;
