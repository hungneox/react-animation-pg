import Link from 'next/link';
import { getLayout } from '../components/layouts/SiteLayout';
import ProfileSection from '../components/sections/ProfileSection';
import ProjecsSection from '../components/sections/ProjectsSection';

const Index = () => (
  <div className='mt-1 max-w-full mx-auto px-8'>
    <div class='px-2'>
      <div class='flex -mx-2'>
        {/* column 1 */}
        <div class='w-1/4 px-2'>
          <ProfileSection/>
        </div>
        {/* column 2 */}
        <div class='w-1/2 px-2'>
          <div class='h-12'>
            <ProjecsSection/>
          </div>
        </div>
        {/* column 3 */}
        <div class='w-1/4 px-2'>
          <div class='bg-black h-12'></div>
        </div>
      </div>
    </div>
  </div>
);

Index.getLayout = getLayout;

export default Index;
