import Link from 'next/link';
import { getLayout } from '../components/SiteLayout';

const Index = () => (
  <div className='mt-1 max-w-full mx-auto px-8'>
    <div class='px-2'>
      <div class='flex -mx-2'>
        <div class='w-1/4 px-2'>
          <div class='bg-gray-400 h-12'></div>
        </div>
        <div class='w-1/2 px-2'>
          <div class='bg-gray-500 h-12'></div>
        </div>
        <div class='w-1/4 px-2'>
          <div class='bg-gray-400 h-12'></div>
        </div>
      </div>
    </div>
  </div>
);

Index.getLayout = getLayout;

export default Index;
