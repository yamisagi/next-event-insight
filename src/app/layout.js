import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Event Insight',
  description: 'Next Event Insight',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <header>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
          crossorigin=''
        />
      </header>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
