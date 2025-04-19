import { Box, Heading, Text, Code, Link, Container } from "@chakra-ui/react";

const VideoDownloaderInfo = () => {
  return (
    <Box bg="#08003a" color="gray.900" p={6} rounded="lg" shadow="md">
        <Container maxW={'1140px'} p={'48px 15px'}>

        <Heading as="h2" size="lg" mb={4} color={'white'}>
        Download Videos From Other Websites
      </Heading>
      <Text mb={2} color={'white'}>
        Want to download YouTube shorts from sites other than YouTube? The
        SSYouTube downloader supports video downloads from 99% of websites! Just
        add{" "}
        <Code  color={'white'} p={1} rounded="md" bg={'transparent'}>
          sfrom.net
        </Code>{" "}
        or{" "}
        <Code  color={'white'} p={1} rounded="md" bg={'transparent'}>
          savefrom.net
        </Code>{" "}
        before the website URL and press Enter.
      </Text>
      <Text mb={4} color={'white'}>
        You will get a list of direct links to download all available videos
        from that website.
      </Text>
      <Text color={'white'}>
        For example:{" "}
        <Link
          href="http://sfrom.net/http://www.freethechildren.com/"
          color={'white'}
          _hover={{ textDecoration: "underline" }}
          isExternal
          
        >
          sfrom.net/http://www.freethechildren.com/
        </Link>
      </Text>
        </Container>
      
    </Box>
  );
};

export default VideoDownloaderInfo;
