import { useState } from 'react';
import logo from '../../Assets/1996511.png';
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Image,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [display, changeDisplay] = useState('none');
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: 'Logout',
      description: 'You have been logged out.',
      status: 'info',
      duration: 3000,
      isClosable: true,
      position: 'top-right'
    });
    Cookies.remove('User');
    Cookies.remove('token');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const userCookieExists = Cookies.get('User');

  const handlePostClick = (event) => {
    if (!userCookieExists) {
      event.preventDefault();
      toast({
        title: 'Unauthorized',
        description: 'You need to login to access this feature.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
    } else {
      // Navigate to the post page
    }
  };

  return (
    <>
      <Flex>
        <Flex
          width="100%"
          position="absolute"
          padding='1%'
          align="center"
          justifyContent={'space-between'}
          right='2rem'
        >
          <Image src={logo} boxSize={'20'} ml='8' />
          <Flex
            display={['none', 'none', 'flex', 'flex']}
            width='50vw'
            justifyContent='space-between'
          >
            <Link to='/'>
              <ChakraLink>
                <Button
                  colorScheme='pink'
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  my={5}
                  w="100%"
                  fontSize='xl'
                >
                  Home
                </Button>
              </ChakraLink>
            </Link>

            <Link to="/about">
              <ChakraLink>
                <Button
                  colorScheme='pink'
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  my={5}
                  w="100%"
                  fontSize='xl'
                >
                  About
                </Button>
              </ChakraLink>
            </Link>
            <Link to='/contact'>
              <ChakraLink>
                <Button
                  colorScheme='pink'
                  as="a"
                  variant="ghost"
                  aria-label="Contact"
                  my={5}
                  w="100%"
                  fontSize='xl'
                >
                  Contact
                </Button>
              </ChakraLink>
            </Link>
            <Link to='filteredcontent'>
              <ChakraLink>
                <Button
                colorScheme='pink'
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={5}
                w="100%"
                fontSize='xl'>
                  Filter
                </Button>
              </ChakraLink>
            </Link>

            <Button
              colorScheme='pink'
              as="a"
              variant="ghost"
              aria-label='contact'
              my={5}
              w='20%'
              fontSize='xl'
              href='https://www.buymeacoffee.com/AbhinavRajeshXD'
            >
              Buy Me a Coffee
            </Button>
          </Flex>

          <Menu>
            <MenuButton
              as={Button}
              colorScheme="pink"
              variant="ghost"
              aria-label="Menu"
              my={5}
              fontSize='xl'
            >
              User
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to='/login'>Login</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/signup'>Sign Up</Link>
              </MenuItem>
              {userCookieExists && (
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              )}
            </MenuList>
          </Menu>

          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay('flex')}
            display={['flex', 'flex', 'none', 'none']}
          />
          <Link to='/post' onClick={handlePostClick}>
            <ChakraLink>
              <Button
                colorScheme='pink'
                as="a"
                variant="ghost"
              >
                POST
              </Button>
            </ChakraLink>
          </Link>
          <Switch
            isChecked={isDark}
            onChange={toggleColorMode}
          />
        </Flex>

        <Flex
          w='100vw'
          display={display}
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay('none')}
            />
          </Flex>

          <Flex
            flexDir="column"
            align="center"
          >
            <Button
              colorScheme='pink'
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>

            <Button
              colorScheme='pink'
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              About
            </Button>

            <Button
              colorScheme='pink'
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
