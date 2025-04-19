import { Box, Text, Card, CardBody } from '@chakra-ui/react';

export default function VideoList({ videos }) {
  if (videos.length === 0) return null;

  return (
    <Box w="full">
      <Text fontSize="lg" fontWeight="bold">Search Results:</Text>
      {videos.map((video) => (
        <Card key={video.id} p={4} mt={2}>
          <CardBody>
            <Text fontWeight="bold">{video.title}</Text>
            <Box as="iframe" 
                 width="100%" 
                 height="315" 
                 src={`https://www.youtube.com/embed/${video.id}`} 
                 title={video.title} 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen>
            </Box>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
