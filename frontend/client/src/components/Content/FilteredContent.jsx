import React, { useEffect, useState } from 'react';
import axios from 'axios';
import test from '../../Assets/test.jpg';
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select, // Import Select component from Chakra UI
} from '@chakra-ui/react';
import ratingImg from '../../Assets/ratingIcon.png';
import { useToast } from '@chakra-ui/react';

const FilteredContent = () => {
  const [scoops, setScoops] = useState([]);
  const [users, setUsers] = useState([]); // State to store list of users
  const [selectedUser, setSelectedUser] = useState(''); // State to store selected user
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const toast = useToast();

  // Fetch users data
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://unusualscoops.onrender.com/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch scoops data
  const fetchData = async () => {
    try {
      const response = await axios.get('https://unusualscoops.onrender.com/api/datas');
      setScoops(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
    fetchUsers(); // Fetch users when the component mounts
  }, []);

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleUpdate = async (id) => {
    try {
      setIsUpdating(true);
      await axios.put(`https://unusualscoops.onrender.com/api/${id}`, formData);
      fetchData();
      setIsUpdating(false);
      setIsOpen(false);
      toast({
        position: 'top-right',
        title: 'Success',
        description: 'Scoop updated successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating scoop:', error);
      setIsUpdating(false);
      toast({
        position: 'top-right',
        title: 'Error',
        description: 'Failed to update scoop',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsDeleting(true);
      await axios.delete(`https://unusualscoops.onrender.com/api/${id}`);
      fetchData();
      setIsDeleting(false);
      setIsOpen(false);
      toast({
        position: 'top-right',
        title: 'Success',
        description: 'Scoop deleted successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        colorScheme: 'red',
      });
    } catch (error) {
      console.error('Error deleting scoop:', error);
      setIsDeleting(false);
      toast({
        position: 'top-right',
        title: 'Error',
        description: 'Failed to delete scoop',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Filter scoops based on selected user
  const filteredScoops = selectedUser ? scoops.filter(scoop => scoop.username === selectedUser) : scoops;

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
      <Text textAlign='center' fontFamily='kanit' fontSize='5xl'>Filter By User Submission</Text>
      {/* Dropdown menu to select users */}
      <Select value={selectedUser} onChange={handleChange} placeholder="Select User" mt='2%' w='50%' border='5px solid black' borderRadius='50px' ml='25%' h='7vh'>
        {users.map(user => (
          <option key={user.id} value={user.username}>{user.username}</option>
        ))}
      </Select>

      <Flex flexWrap="wrap" justifyContent="space-around" mt='5%'>
        {filteredScoops.map((scoop) => (
          <Box
            key={scoop._id}
            bg="#ff5f96"
            width="20vw"
            borderRadius="50px"
            padding="2vw"
            boxShadow="#ffee6e -13px 8px 0 2px,black -13px 8px 0 8px"
            border="6px solid black"
            position="relative"
            overflow="hidden"
            _hover={{
              '.update-delete-buttons': {
                opacity: 1,
              },
            }}
            m="20px"
          >
            {scoop.image && <Image src={scoop.image} borderRadius="25px" width="15vw" height="25vh" />}
            <br />
            <Text fontSize="20px" as="b">
              {scoop.name}
            </Text>{' '}
            <br />
            <Text fontSize="18px" as="b">
              Origin: {scoop.origin}
            </Text>
            <Flex>
              <img src={ratingImg} width="40px" />
              <Text fontSize="30px" as="b">
                {scoop.rating}
              </Text>
            </Flex>
            <Flex align="center" justifyContent="space-between" mt="2" position="absolute" bottom="350" left="50%" transform="translateX(-50%)" className="update-delete-buttons" opacity={0} transition="opacity 0.3s ease-in-out" width="14vw">
              {!isUpdating && !isDeleting ? (
                <>
                  <Button colorScheme="blue" onClick={() => { setFormData(scoop); setIsOpen(true); }} disabled={isDeleting}>
                    Update
                  </Button>
                  <Button onClick={() => handleDelete(scoop._id)} colorScheme="red" disabled={isUpdating}>
                    Delete
                  </Button>
                </>
              ) : (
                <Text>{isUpdating ? 'Updating...' : 'Deleting...'}</Text>
              )}
            </Flex>
          </Box>
        ))}
      </Flex>

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
            <Button colorScheme="blue" mr={3} onClick={() => handleUpdate(formData._id)} isLoading={isUpdating}>
              Save
            </Button>
            <Button colorScheme="red" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilteredContent;
