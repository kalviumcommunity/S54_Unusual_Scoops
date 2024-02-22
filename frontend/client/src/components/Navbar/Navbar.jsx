import { useState } from 'react'
import logo from '../../Assets/1996511.png'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Image,
  Link as ChakraLink
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  const [isLoggedIn, setIsLoggedIn] = useState(false) // State to track login status

  const handleLogout = () => {
    // Implement logout logic here, such as clearing user session, removing tokens, etc.
    setIsLoggedIn(false)
  }

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
          <Image src={logo}
            boxSize={'20'}
            ml='8'
          />
          {/* Desktop */}
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
            </Button></ChakraLink></Link>


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
            </Button></ChakraLink></Link>
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
            </Button></ChakraLink></Link>
            
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
{isLoggedIn ? (
              <>
                <Button
                  colorScheme='pink'
                  as="a"
                  variant="ghost"
                  aria-label='Logout'
                  my={5}
                  w='20%'
                  fontSize='xl'
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <ChakraLink>
                    <Button
                      colorScheme='pink'
                      as="a"
                      variant="ghost">LOGIN</Button></ChakraLink></Link>
                <Link to='/signup'>
                  <ChakraLink>
                    <Button
                      colorScheme='pink'
                      as="a"
                      variant="ghost">SIGN UP</Button></ChakraLink></Link>
              </>
            )}
          {/* Mobile */}
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={
              <HamburgerIcon />
            }
            onClick={() => changeDisplay('flex')}
            display={['flex', 'flex', 'none', 'none']}
          /><Link to='/post'>
            <ChakraLink>
              <Button
                colorScheme='pink'
                as="a"
                variant="ghost">POST</Button></ChakraLink></Link>
          <Switch
            isChecked={isDark}
            onChange={toggleColorMode}
          />

        </Flex>

        {/* Mobile Content */}
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
              icon={
                <CloseIcon />
              }
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
  )
}
