"use client";
import { useState } from "react";
import { VStack, Input, Button, Text, Box, Flex } from "@chakra-ui/react";
import IframeResizer from "./IframeResizer";

const VideoConverter = () => {
  const [url, setUrl] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!url) {
      alert("Please enter a URL or search keyword");
      return;
    }

    const youtubeRegex = /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/;
    const match = url.split(youtubeRegex);

    // If it's a YouTube URL
    if (match[2] && match[2].length > 10) {
      const finalUrl = `https://www.youtube.com/watch?v=${
        match[2].split(/[^0-9a-z_\-]/i)[0]
      }`;
      setUrl(finalUrl);
      setIframeSrc(
        `https://loader.to/api/card2/?url=${finalUrl}&adUrl=https://myAdurl.com`
      );
      setDownloadUrl(
        `https://loader.to/api/button/?url=${finalUrl}&format=mp4`
      );
      setSearchResults([]);
    } else {
      // It's a keyword search
      const encodedQuery = encodeURIComponent(url);
      try {
        const response = await fetch(`https://apiyoutube.cc/?q=${encodedQuery}&color=1c1c1c`);

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid response format (not JSON)");
        }

        const data = await response.json();
        console.log("Search results:", data);

        setSearchResults(data.results || []);
        setIframeSrc(""); // You may remove or update this if not needed
      } catch (error) {
        console.error("Search failed:", error.message);
        alert("Search failed. Please try again later.");
      }
    }
  };

  return (
    <Box p={{ base: "50px 16px 22px", md: "200px 16px 22px" }}>
      <Text fontSize={{ base: "24px", md: "30px" }} fontWeight="500" textAlign="center" color="white">
        Download Video and Audio from YouTube
      </Text>

      <Flex
        p={5}
        justify="center"
        alignItems="center"
        gap={"15px"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          bg="white"
          w={{ base: "100%", md: "60%" }}
          p={"7px"}
          borderRadius={"12px"}
          alignItems="center"
        >
          <Input
            flex={1}
            placeholder="Enter YouTube URL or search keyword"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            border="none"
            outline="none"
            _focusVisible={{ outline: "none" }}
          />
          <Button
            colorScheme="#e91700"
            bg={"#F20A51"}
            borderRadius={"12px"}
            h={{ base: "48px", md: "56px" }}
            onClick={handleSearch}
            px={{ base: "20px", md: "33px" }}
            boxShadow={'0 4px 10px rgba(255,86,63,.4)'}
            _hover={{ bg: "grey" }}
          >
            Convert
          </Button>
        </Flex>
      </Flex>

      <Text textAlign="center" color="white">
        By using our service you are accepting our Terms of use.
      </Text>

      {/* Show search results if available */}
      {searchResults.length > 0 && (
        <Box mt={6}>
          <Text color="white" mb={3} fontSize="lg" textAlign="center">Search Results</Text>
          <VStack spacing={4}>
            {searchResults.map((video, idx) => (
              <Box
                key={idx}
                bg="whiteAlpha.100"
                borderRadius="lg"
                p={4}
                w="100%"
                maxW="720px"
                color="white"
              >
                <Text fontWeight="bold">{video.title}</Text>
                <Text fontSize="sm">{video.description || "No description available."}</Text>
                <a href={video.url || "#"} target="_blank" rel="noopener noreferrer">
                  <Button mt={2} size="sm" colorScheme="pink">
                    Watch
                  </Button>
                </a>
              </Box>
            ))}
          </VStack>
        </Box>
      )}

      <IframeResizer src={iframeSrc} />
    </Box>
  );
};

export default VideoConverter;
