import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Image,
  UnorderedList,
  useColorModeValue,
  Container,
  Grid,
} from "@chakra-ui/react";

const Info = () => {
  const formats = [
    { name: "MP4", image: "/windows.svg" },
    { name: "MP3", image: "/apple.svg" },
    { name: "3GP", image: "/android.svg" },
    { name: "WEBM", image: "/linux.svg" },
  ];

  return (
    <Box
      maxW="1140px"
      mx="auto"
      p={6}
      mt={"50px"}
      color="gray.800"
      borderRadius="lg"
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center" fontWeight={"400"}>
        Supported Platforms:
      </Heading>

      <Flex justify="center" wrap="wrap" gap={"30px"} my={8}>
        {formats.map((format) => (
          <Box key={format.name}>
            <Image src={format.image} alt={format.name} mx="auto" w={"145px"} />
          </Box>
        ))}
      </Flex>

      <Box
        p={4}
        color={useColorModeValue("gray.800", "white")}
        borderRadius="md"
      >
        <UnorderedList spacing={2} styleType="disc">
          <ListItem>
            Experience the best YouTube video downloading with our top-rated
            tool - completely free.
          </ListItem>
          <ListItem>
            Download content in your preferred quality: from MP4 to MP3,
            standard to Full HD resolution.
          </ListItem>
          <ListItem>
            Perfect compatibility across all devices - grab your favorite videos
            on desktop or mobile.
          </ListItem>
          <ListItem>
            Convert YouTube videos with just a few simple clicks using our
            streamlined platform.
          </ListItem>
          <ListItem>
            Get lightning-fast downloads and unlimited video access without
            spending a dime.
          </ListItem>
          <ListItem>
            Master YouTube downloading with our comprehensive guide and expert
            tips.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box maxW="1140px" py={'45px'} centerContent>
        <Heading as="h1" fontSize={'32px'} textAlign="center" mb={'34px'}>
        Easily Download YouTube Videos: A Step-by-Step Guide
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={4}
          mb={6}
        >
          <Box  p={4} >
            <Image
              alt="Step 1: Paste Link"
              src="/howto2.png"
              w={'100%'}
            />
            <Text textAlign="center" mt={2}>
              Follow these simple steps to download YouTube videos for offline
              viewing:
            </Text>
          </Box>
          <Box  p={4} >
          <Image
              alt="Step 1: Paste Link"
              src="/howto3.png"
              w={'100%'}
            />
            <Text textAlign="center" mt={2}>
              Locate your video on YouTube and copy the link from your browser
              address bar.
            </Text>
          </Box>
          <Box  p={4} >
          <Image
              alt="Step 1: Paste Link"
              src="/howto4.png"
              w={'100%'}
            />
            <Text textAlign="center" mt={2}>
              Paste the YouTube link into the provided box on our website.
            </Text>
          </Box>
        </Grid>

        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          How to Download YouTube Videos Without an Add-on
        </Heading>
        <Text textAlign="center" mb={4}>
          Learn how to download a YouTube video without a video downloader
          add-on! Simply add ss to the video URL to quickly save the video to
          your device.
        </Text>

        <Box bg="gray.200" p={4} >
          <Text fontWeight="bold">Here’s an example:</Text>
          <Text>
            Original URL:{" "}
            <Text as="span" color="blue.500">
              https://youtube.com/watch?v=YOcmSsBfafg
            </Text>
          </Text>
          <Text>
            Modified URL with ss:{" "}
            <Text as="span" color="blue.500">
              https://sssyoutube.com/watch?v=YOcmSsBfafg
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
