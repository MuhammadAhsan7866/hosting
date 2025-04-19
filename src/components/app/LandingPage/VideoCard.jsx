// components/VideoCard.jsx
import { Box, Text, Image, Flex } from "@chakra-ui/react";

export default function VideoCard({ video }) {
  return (
    <Flex bg="white" p={4} mb={4} borderRadius="lg" boxShadow="md">
      <Image
        src={video.thumbnail}
        alt={video.title}
        boxSize="160px"
        objectFit="cover"
        borderRadius="md"
        mr={4}
      />
      <Box>
        <Text fontSize="lg" fontWeight="bold">{video.title}</Text>
        <Text fontSize="sm" color="gray.600">{video.channel}</Text>
        <Text fontSize="sm" color="gray.600">Duration: {video.duration}</Text>
        <Text fontSize="sm" color="gray.600">Views: {Number(video.views).toLocaleString()}</Text>
      </Box>
    </Flex>
  );
}
