import { Flex, Heading, Grid } from '@chakra-ui/react'
import City from './City'

export default function Cities() {
  return (
    <Flex direction="column">
      <Heading fontSize={["2xl", "4xl"]} fontWeight="500"> Cidades +100</Heading>

      <Grid      
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        alignItems="center"
        justifyContent="center"
        gap={["20px", "45px"]}
        mb={9}
        px={["30px", "0"]}
      >
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
      </Grid>
    </Flex>
  )
}
