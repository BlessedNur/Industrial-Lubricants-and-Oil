
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEB WHOLESALE DISTRIBUTORS INC",
  description: "High Quality Car Oil and Lubricants Distributor",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico?v=3" />
      </Head>

      <Toaster position="top-right" expand={true} richColors />
      <body className={inter.className}>{children}
      <script src="//code.tidio.co/yctln8xzxrvonvybuxecrivtorm69xoh.js" async></script>
      </body>
    </html>
  );
}
