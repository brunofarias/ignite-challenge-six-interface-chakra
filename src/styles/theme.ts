import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#47585B",
      "800": "##999999",
      "700": "#DADADA",
      "100": "#F5F8FA"
    },
    yellow: {
      "900": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900'
      }
    }
  }
})