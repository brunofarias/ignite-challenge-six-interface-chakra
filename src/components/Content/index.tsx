import { Flex, Text } from '@chakra-ui/react';
import Infos from './Infos';


export default function Content() {
  return (
    <Flex justify="space-between" mb={[10, 20]}>
      <Text
        maxW={["100%", "600px"]}
        fontSize={["xl", "2xl"]}
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>    

      <Infos/>
     
    </Flex>
  )
}
