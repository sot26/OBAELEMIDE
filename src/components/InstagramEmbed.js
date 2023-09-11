import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramEmbed = ({ url }) => {
  const [embedHtml, setEmbedHtml] = useState("");

  useEffect(() => {
    // Define the Instagram oEmbed API endpoint
    const apiUrl = `https://graph.facebook.com/v12.0/instagram_oembed?url=${url}&access_token=IGQWRPdjhObWpMbTFoMW9IOUV0S3o1aGZAjYnFybWRLdXlFQnZAtYkhYeXR4NGQ2N01ab19qV3VhVW9yYlpsVjViZAlpzY0E4LUc0WkFsa2xYVXdrdEttcFJCZAzMtMWFobEFQd2FEb1B5b0RnVG1XZAFU1ZAWQwbGpmRE0ZD`;

    // Make a GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        setEmbedHtml(response.data.html);
      })
      .catch((error) => {
        console.error("Error fetching Instagram embed:", error);
      });
  }, [url]);

  return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />;
};

export default InstagramEmbed;
