import { Flex, Heading } from '@chakra-ui/react'

export default function ContinentBanner() {
  return (
    <Flex
      align={["center", "center", "flex-end"]}
      w="100%"
      h={["150px", "250px", "500px"]}
      pb={[0, 0, 16]}
      bgImage="url('https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Heading        
        w="100%"
        maxW={1160}
        mx="auto"  
        px="1rem"      
        color="gray.100"
        fontWeight="500"
        fontSize={["xl", "5xl"]}
        textAlign={["center", "center", "left"]}
      >
        Europa
      </Heading>
    </Flex>
  )
}
