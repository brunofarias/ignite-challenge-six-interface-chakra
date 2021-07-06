import { Flex, Image, Text } from "@chakra-ui/react";

interface TypesProps {
  icon: string;
  text: string;
}

export default function Types({icon, text}: TypesProps) {
  return (
    <Flex align="center" direction="column" w={["100%", "160px"]}>
      <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb={6} alt="Icone"  />
      <Text fontSize={["md", "2xl"]} fontWeight="600">{text}</Text>
    </Flex>   
  )
}
