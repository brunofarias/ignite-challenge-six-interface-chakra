import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      justify="center"
      w="100%"
      h={["165px", "335px"]}
      bgImage="url('/banner.jpg')"
      bgPosition={["100% 10%", "100% 0%", "100% 25%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex justify={['center', 'space-between']} align="center" w="100%" maxW={1160} px={4}>
        <Flex maxW={["100%", "550px"]} direction="column">
          <Heading color="gray.100" fontWeight="500" fontSize={["xl", "2xl", "4xl"]}>
            5 continentes,<br />infinitas possibilidades.
          </Heading>
          <Text color="gray.300" mt="5" fontSize={["0.8rem","xl"]} >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image
          display={["none", "none", "block"]}
          w={["300px", "430px"]}
          src="/airplane.svg"
          alt="Avião amarelo voando com algumas nuvens ao redor."
          transform="translateY(48px)"
        />
      </Flex>
    </Flex>
  )
}