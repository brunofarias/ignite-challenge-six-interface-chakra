import { Flex, Image, Box, Text,useBreakpointValue } from "@chakra-ui/react";

interface TypesProps {
  icon: string;
  text: string;
}

export default function Types({icon, text}: TypesProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Flex align="center" justify="center" direction={["row", "column"]} >
      {isMobile 
        ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb={6} alt="Icone"  />
        : <Box w="8px" h="8px" mr={2} borderRadius="50%" bg="yellow.900" />
      }      
      <Text fontSize={["md", "xl", "2xl"]} fontWeight="600">{text}</Text>
    </Flex>   
  )
}
