import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter, Roboto_Slab } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-roboto-slab'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${roboto_slab.variable} font-sans flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
