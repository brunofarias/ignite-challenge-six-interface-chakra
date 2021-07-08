import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react'

export default function City() {
  return (
    <Flex
      direction="column"
      mt={[5, 10]}
      borderRadius="4px"
      overflow="hidden"
    >
      <Image src="https://images.unsplash.com/photo-1610390370064-4890cf703fd1?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMDUzMTU4Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" w="100%" height="170px" objectFit="cover"></Image>

      <Flex
        align="center"
        justify="space-between"
        p={6}
        pt={4}
        bg="white"
        border="1px"
        borderTop="0"
        borderColor="yellow.900"
      >
        <Box>
          <Heading fontSize="xl" fontWeight="500" mb={3}>Londres</Heading>
          <Text as="span" fontSize="md" color="gray.800">Reino Unido</Text>
        </Box>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png" alt="Bandeira" boxSize="30px" borderRadius="50%" objectFit="cover" />
      </Flex>

    </Flex>
  )
}
