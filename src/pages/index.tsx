import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Travel from "../components/Travel";

export default function Home() {
  return (
    <Flex direction="column">

      <Header />

      <Banner />

      <Travel />

      <Heading
        my={[5, 14]}
        textAlign="center"
        fontWeight="500"
        fontSize={["xl", "4xl"]}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Slider />

    </Flex>
  )
}
