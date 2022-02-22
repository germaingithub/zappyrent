import Link from 'next/link';
import Images from 'next/image';
import { Box, Flex, Text, Avatar, Button, Image} from '@chakra-ui/react';
import millify from 'millify';
import Modal from './modal';

const Property = ({ property: {images, tenants,description, price, available,type, title,
baths,beds, id } }) => ( 
  
<Link href={`/property/${id}`} passHref > 
<Flex mt='2' boxShadow='2xl' rounded='md' bg='white'  mr='2' ml='2' mb='3'flexWrap='wrap' w='350px' justifyContent='center' cursor='pointer'>
<Box >{available &&<> <Button colorScheme='teal' marginTop='5' ml='5' position='absolute' variant='solid'>
    Disponibile Subito
  </Button></>}</Box> 
  <Box borderTopRadius='15'> 
    <Image
      object-fit='cover'
      borderTopRadius='lg' src={images[0].url} maxWidth='1000' height={260} />
  </Box>
 
  <Box w='full' marginTop='-10' bg='white'>
    <Flex paddingTop='2' alignItems='center' border='rounded-pill' justifyContent='space-between'>
      <Flex>
        <Text fontWeight='fw-lighter' fontSize='fs-5'> {type}</Text>
      </Flex>
    </Flex>
    <Text fontSize="xl" fontWeight="semibold" lineHeight="short">
      {title}
    </Text>
    <Flex alignItems='center' p='2' justifyContent='space-between'  color='black.400'>
      {tenants} inquilini
      {millify(baths)} bagno
      {millify(beds)} letto

    </Flex>
    <Text fontSize='l'>
    {description.length > 80 ? title.substring(0, 80) + '...' : description}
    </Text>
    <Flex borderTop='solid' p='3' borderTopColor="gray.300">
      <Text fontsize='2xl' color="green.600" mr='1'>Canone d'affitto</Text>
      <Text fontWeight='l' ali fontSize='s'>€ {price} /mese</Text>
    </Flex>

  </Box>
 
</Flex> 

</Link>



);

export default Property;