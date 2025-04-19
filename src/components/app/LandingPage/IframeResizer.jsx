"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";
import { Box } from "@chakra-ui/react";

const IframeResizer = ({ src }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("iframe-resizer/js/iframeResizer").then(({ iframeResizer }) => {
        if (iframeRef.current) {
          // iframeResizer({ log: false }, iframeRef.current);
        }
      });
    }
  }, [src]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"
        strategy="lazyOnload"
      />
      {src && (
        <Box width="100%" maxW="738px" margin="0 auto">
          <iframe
            ref={iframeRef}
            id="cardApiIframe"
            src={src}
            width="100%"
            height="500px"
            style={{ border: "none" }}
            allowTransparency="true"
          />
        </Box>
      )}
    </>
  );
};

export default IframeResizer;
