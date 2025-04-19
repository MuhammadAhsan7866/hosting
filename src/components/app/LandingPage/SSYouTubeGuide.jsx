import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import FAQAccordion from "./Faq";

const SSYouTubeGuide = () => {
  return (
    <Container maxW="1140px" py={6}  color="gray.900">
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Using SSYouTube's Short Domain to Download Videos
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        mb={8}
      >
        <VStack p={4} bg="white"  spacing={3}>
          <Heading as="h2" size="md">
            Find Your Video
          </Heading>
          <Image
            src="/yt-video-downloader_how-to_1.svg"
            alt="Find Your Video"
          />
          <Text color="gray.600">
            First, find the YouTube video you want to download and copy its URL
            from the address bar.
          </Text>
        </VStack>
        <VStack p={4} bg="white"  spacing={3}>
          <Heading as="h2" size="md">
            Modify the URL
          </Heading>
          <Image
           src="/yt-video-downloader_how-to_1.svg"
            alt="Modify the URL"
          />
          <Text color="gray.600">
            Add "ss" before the video URL. This prefix is how you initiate the
            YouTube download process.
          </Text>
        </VStack>
        <VStack p={4} bg="white"  spacing={3}>
          <Heading as="h2" size="md">
            Download Your Video
          </Heading>
          <Image
            src="/yt-video-downloader_how-to_1.svg"
            alt="Download Your Video"
          />
          <Text color="gray.600">
            Hit Enter. You'll be taken to a new page where your YouTube video
            download will start automatically.
          </Text>
        </VStack>
      </Grid>

      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        FAQ
      </Heading>
       <FAQAccordion/>
    </Container>
  );
};

export default SSYouTubeGuide;
