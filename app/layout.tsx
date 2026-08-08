import type { Metadata } from "react";
import "./globals.css"; // <-- This links your stylish CSS to the whole app!
import PlayBlocksEditor from "./page"; // <-- This links your TypeScript editor component

export const metadata: Metadata = {
  title: "PlayBlocks (Blocks++) Editor",
  description: "Visual block programming to native C++ compiler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-white">
        {/* Renders your TypeScript editor workspace */}
        <PlayBlocksEditor />
      </body>
    </html>
  );
}
