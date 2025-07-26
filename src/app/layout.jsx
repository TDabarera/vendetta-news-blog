import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx"; // Import our new Header component


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vendetta",
  description: "A news blog promoting diverse perspectives and critical discussion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> 
        {children}
        {/*Footer*/}
      </body>
    </html>
  );
}
