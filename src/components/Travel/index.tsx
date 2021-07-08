import { Flex, Grid, Box, GridItem } from '@chakra-ui/react';
import React from 'react';
import Types from './Types';

export default function Travel() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Grid
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        justifyContent="space-between"
        w="100%"
        maxW={1160}
        my={[9, 20]}
        gap={[1, 5]}
      >
        <GridItem>
          <Types icon="cocktail" text="vida noturna" />
        </GridItem>
        <GridItem>
          <Types icon="surf" text="praias" />
        </GridItem>
        <Types icon="building" text="moderno" />
        <GridItem>
          <Types icon="museum" text="clássico" />
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <Types icon="earth" text="e mais..." />
        </GridItem>

      </Grid>

      <Box
        w={["60px", "90px"]}
        borderBottom="2px"
        borderColor="gray.900"
      />
    </Flex>
  )
}
