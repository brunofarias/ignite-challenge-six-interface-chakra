import { Flex, Heading, HStack, Text, Popover, PopoverTrigger, Icon, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent } from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'

export default function Infos() {
  return (
    <HStack justify="space-between">
      <Flex align={["flex-start", "flex-start", "center"]} direction="column">
        <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.900">50</Heading>
        <Text fontSize={["md", "md", "xl", "2xl"]} fontWeight="600">países</Text>
      </Flex>
      <Flex align={["flex-start", "flex-start", "center"]} direction="column">
        <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.900">60</Heading>
        <Text fontSize={["md", "md", "xl", "2xl"]} fontWeight="600">línguas</Text>
      </Flex>
      <Flex align={["flex-start", "flex-start", "center"]} direction="column">
        <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.900">27</Heading>
        <Text fontSize={["md", "md", "xl", "2xl"]} fontWeight="600">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon as={RiInformationLine} cursor="pointer" ml="1" color="gray.900" w={["10px", "16px"]} h={["10px", "16px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.900" color="white">
              <PopoverArrow bg="gray.900" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="md">
                Paris, Londres, Roma, Praga
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </HStack>
  )
}
