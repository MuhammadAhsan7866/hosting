import { Box, Text, Button, Card } from '@chakra-ui/react';

export default function ConvertedFilesList({ files }) {
  if (!files.length) return <Text>No converted files yet.</Text>;

  return (
    <Box w="full">
      <Text fontSize="lg" fontWeight="bold">Converted Files:</Text>
      {files.map((file, index) => (
        <Card key={index} p={4} mt={2}>
          <Text>{file.name}</Text>
          <Button as="a" href={file.url} download>
            Download
          </Button>
        </Card>
      ))}
    </Box>
  );
}
