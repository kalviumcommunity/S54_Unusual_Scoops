import { useState } from 'react'
import logo from '../../Assets/1996511.png'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Image
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function Navbar () {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <Flex> 
      <Flex
        width= "100%"
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
          display={['none', 'none', 'flex','flex']}
          width='50vw'
        >   
            <Button
              colorScheme='pink'
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              fontSize='xl'
            ><Link to='/'>
              Home</Link>
            </Button>
            
            
            <Button
              colorScheme='pink'
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              fontSize='xl'

            ><Link to="/about">
              About</Link>
            </Button>
            
            <Button
              colorScheme='pink'
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              fontSize='xl'

            ><Link to='/contact'>
              Contact</Link>
            </Button>
            
            <Button
            colorScheme='pink'
            as="a"
            variant="ghost"
            aria-label='contact'
            my={5}
            w='100%'
            fontSize='xl'
            href='https://www.buymeacoffee.com/AbhinavRajeshXD'
            >
                Buy Me a Coffee
            </Button>
        </Flex>

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
        />
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
  )
}