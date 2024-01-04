"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import Tesseract from "tesseract.js";
import { UploadButton } from "@uploadthing/react";
 
export default function UploadButtonComponent() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ",res[0].url);
          alert("Upload Completed");

          Tesseract.recognize(
            res[0].url,
            'eng',
          ).then(({ data: { text } }) => {
            console.log(text);
          })
          
        }}
      />
    </main>
  );
}