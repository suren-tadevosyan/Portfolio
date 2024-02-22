import "./globals.css";
import { Inter } from "next/font/google";
import AnimationProv from './components/motion';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <AnimationProv>{children}</AnimationProv>
      </body>
    </html>
  );
}
