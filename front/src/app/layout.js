import localFont from "next/font/local";
import {Kanit} from 'next/font/google';
import { Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/FooterComponent";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const kanit = Kanit({
  weight: ['100','200','300','400','500','600','700','800'], //`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  weight: ['400','500','600','700','800'], //`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        
        {children}
        
      </body>
    </html>
  );
}
