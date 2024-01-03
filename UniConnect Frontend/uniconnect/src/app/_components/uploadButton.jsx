"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
 
import { UploadButton } from "@uploadthing/react";
 
export default function UploadButtonComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => {
          alert("Upload Completed");
        }}
      />
    </main>
  );
}