import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export const metadata = {
  title: "Sparrow Travels – Sri Lanka's Trusted Travel Partner",
  description:
    'Sparrow Travels offers premium Sri Lanka tours, comfortable vehicles, private vans, and personalized travel experiences across Sri Lanka.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
