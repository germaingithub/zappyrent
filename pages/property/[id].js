import { Button, Flex, Text,Center } from '@chakra-ui/layout';
import millify from 'millify';

import { baseUrl, fetchApi } from '../utils/fetchApi';


const PropertyDetails = ({ propertyDetails: { price,images, title, baths,tenants,beds, description, type,} }) => (
  <Center maxWidth='1000px' margin='auto' p='4' flexDirection='column'>
    <Center borderRadius='lg'>
    <img src={images[0].url}  width={500} height={260} />
  </Center>
  <Center w='full' flexDirection='column' >
    <Flex paddingTop='2' alignItems='center' border='rounded-pill' justifyContent='space-between'>
      <Flex>
        <Text fontWeight='fw-lighter' fontSize='fs-5'> {type}</Text>
      </Flex>
    </Flex>
    <Text fontSize='xl' fontweight='xl' fontFamily='helvetica'>
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
    <Flex>
      <Text fontsize='xl' color="green">Canone d'affitto</Text>
      <Text fontWeight='l' fontSize='s'>€ {price} /mese</Text>
      
    </Flex>
  </Center>

  </Center>
  
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/${id}`);
  console.log(data)
  return {
    props: {
      propertyDetails: data,
    },
  };
}