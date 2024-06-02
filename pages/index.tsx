import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/home/hero';
import Features from '@/components/home/features';
import Products from '@/components/home/products';
import LoginRegisterPage from './LoginRegisterPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      {/* <LoginRegisterPage focus="register" />*/}
      <Hero />
      <Features />
      <Products /> 
    </div>
  );
}
