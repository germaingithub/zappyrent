import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box, Text, Button, LinkBox} from '@chakra-ui/react';
import Property from '../components/Property';
import Modal from '../components/modal'
import { fetchApi, baseUrl} from './utils/fetchApi';

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl' bg="blue.300" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);


const Home = ({ propertiesForRent })  => (
  
  <Box>
   
    <Flex flexWrap='wrap'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>

  </Box>
);


export async function  getStaticProps () {
  const propertiesForRent = await fetchApi(`${baseUrl}`);
console.log(propertiesForRent);
  return {
    props: {
      propertiesForRent: propertiesForRent,
    }
  }
  }

  export default Home;
 

