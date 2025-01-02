import Demo from '@/components/dropdown';
import Navbar from '@/components/navbar';
import { Alert } from 'flowbite-react';
export default function Home() {
   return (
      <>
         <Navbar />
         <Alert className='w-4/5 m-auto'>Alert</Alert>
         <Demo />
      </>
   );
}
