"use client";

import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";

const FAQAccordion = () => {
  const faqs = [
    { question: "What is SSYouTube and What Does It Do?" },
    { question: "How Do I Download YouTube Videos with SSYouTube?" },
    { question: "Which Video Formats Does SSYouTube Support?" },
    { question: "Can I Download YouTube Playlists and Channels with SSYouTube?" },
    { question: "Is SSYouTube Safe?" },
  ];

  return (
    <Box width="1140px" maxW="100%" mx="auto" py={10}>
      <Accordion allowMultiple>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} border="none" mb={'25px'}>
            <h2>
              <AccordionButton
                bg="#07002b"
                color="white"
                _hover={{ bg: "#07002b" }}
                borderRadius="md"
                p={'30px 20px'}
                
              >
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="medium">
                    {faq.question}
                  </Text>
                </Box>
                <AccordionIcon color="white" />
              </AccordionButton>
            </h2>
            <AccordionPanel  white color="black" borderRadius="md">
           
            SSYouTube is a free online YouTube video downloader that allows you to download videos in multiple formats and resolutions.  Enjoy fast downloads, high-quality video and audio, and convenient offline viewing.
                            
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQAccordion;
