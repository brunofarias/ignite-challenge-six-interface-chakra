import { Flex, HStack, Box } from '@chakra-ui/react';
import Types from './Types';

export default function Travel() {
  return (
    <Flex direction="column" justify="center" align="center">
      <HStack
        w="100%"
        justify="space-between"
        maxW={1160}
        my={20}
        mx="auto"
      >
        <Types icon="cocktail" text="vida noturna" />
        <Types icon="surf" text="praias" />
        <Types icon="building" text="moderno" />
        <Types icon="museum" text="clássico" />
        <Types icon="earth" text="e mais..." />
      </HStack>

      <Box        
        w="90px"
        borderBottom="2px"
        borderColor="gray.900"
      />
    </Flex>
  )
}
