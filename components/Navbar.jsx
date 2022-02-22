import Link from 'next/link';
import { Menu, MenuButton, MenuList,Button,MenuOptionGroup,MenuItemOption, MenuItem,MenuDivider, Flex, Box, Spacer } from '@chakra-ui/react';
import Image from 'next/image';
import Logo from '../assets/images/zappyrent.png'
import {useState} from "react";

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box  m='2' fontSize='3xl' color='blue.400' fontWeight='bold'>
    <Image src={Logo } width={170} height={45} />
    </Box>
    <Spacer />
    <Box>
    <Menu closeOnSelect={false}>
  <MenuButton as={Button} m='2' alignContent="left" colorScheme='teal' variant='outline' borderRadius='2xl'>
    Tipologia
  </MenuButton>
  <MenuList minWidth='240px' borderRadius='2xl'>
    <MenuOptionGroup  type='checkbox'>
      <MenuItemOption value='Private room'>Private room</MenuItemOption>
      <MenuItemOption value='Entire Property'>Entire Property</MenuItemOption>
      <MenuItemOption value='Shared room'>Shared room</MenuItemOption>
      <MenuItemOption value='Studio'>Studio</MenuItemOption>
    </MenuOptionGroup>
    
  </MenuList>
  <MenuItemOption value='Disponibile Subito' type='checkbox'>Disponibile Subito</MenuItemOption>
</Menu>
    </Box>
  </Flex>
);
const SearchType = () => {
  const [searchTerme, setsearchTerm] = useState("");
  return (
    <MenuList minWidth='240px' borderRadius='2xl' 
    onChange={(e) => {
      setsearchTerm(e.target.value);
    }}>
    <MenuOptionGroup  type='checkbox'>
      <MenuItemOption value='Private room'>Private room</MenuItemOption>
      <MenuItemOption value='Entire Property'>Entire Property</MenuItemOption>
      <MenuItemOption value='Shared room'>Shared room</MenuItemOption>
      <MenuItemOption value='Studio'>Studio</MenuItemOption>
    </MenuOptionGroup>  
    <tbody>
      {filterData.filter}
    </tbody>
  </MenuList>
  )
}
export default Navbar;