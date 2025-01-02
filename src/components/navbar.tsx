'use client';
import testFunction from '@/actions/main';

export default function Navbar() {
   return (
      <nav className='flex flex-col justify-between w-5/6 gap-4 p-4 m-auto place-items-center md:flex-row md:w-3/6'>
         <h1 className='text-2xl md:text-base'>Company Name</h1>
         <ul className='flex gap-6'>
            <li className='transition-colors cursor-pointer hover:text-red-500'>
               Home
            </li>
            <li className='transition-colors cursor-pointer hover:text-red-500'>
               About
            </li>
            <li className='transition-colors cursor-pointer hover:text-red-500'>
               Contact
            </li>
         </ul>
         <button onClick={() => testFunction()}>Click me</button>
      </nav>
   );
}
