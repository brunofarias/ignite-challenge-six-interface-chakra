import Link from 'next/link'
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Slider() {
  return (
    <Flex w="100%" h="450px" maxW={1240} mx="auto" mb={["5", "10"]}>
      <Swiper
        className="mySwiper"        
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/europa">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="600">Europa</Heading>
                <Text fontWeight="600" color="white" fontSize={["1xl", "2xl"]} mt={[2, 4]}>O continente mais antigo.</Text>
              </a>
            </Link>

          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('https://images.unsplash.com/photo-1584117992567-a84ca619bb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/asia">
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="600">Ásia</Heading>
                <Text fontWeight="600" color="white" fontSize={["1xl", "2xl"]} mt={[2, 4]}>O maior continente.</Text>
              </a>
            </Link>

          </Flex>
        </SwiperSlide>

      </Swiper>
    </Flex>
  )
}