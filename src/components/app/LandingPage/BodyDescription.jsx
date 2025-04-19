import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";



const FeatureCard = ({ icon, title, description }) => (
  <Box bg="#011936"  borderRadius="lg" boxShadow="md">
    <Image
      src={`https://openui.fly.dev/openui/100x100.svg?text=${icon}`}
      alt={title}
      mx="auto"
      mb={4}
    />
    <Heading as="h2" size="md" mb={2} textAlign={'center'} color={'white'}>
      {title}
    </Heading>
    <Text color={'white'} textAlign={'center'} mb={'35px'} >{description}</Text>
  </Box>
);

const BodySection = () => {
  return (
    <Container
      maxW="1140px"
     my={'45px'}
      px={4}
      bg="gray.50"
      borderRadius="lg"
      py={'0'}
     
    >
      {/* <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Best YouTube Video Downloader
      </Heading> */}
      {[
        'SSYouTube is your go-to online video downloader, crafted to bypass YouTubes download restrictions. We bridge the gap by offering a fast and reliable way to download YouTube videos. With our user-friendly interface, accessing your favorite content has never been easier.'
      ].map((text, index) => (
        <Text key={index} color="gray.600" mb={4} fontSize="18px">
        
          {text}
        </Text>
      ))}
     
    </Container>
  );
};

export default BodySection;
