import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/home/hero';
import Features from '@/components/home/features';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Hero />
      <Features /> 
    </div>
  );
}
