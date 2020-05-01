import Link from 'next/link';

const SiteLayout = ({ children }) => (
  <div className='bg-dark-gray h-screen antialiased'>
    <div className='max-w-full'>
      <nav className='flex items-center justify-between flex-wrap bg-gray-900 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <span className='font-semibold text-xl tracking-tight'>Neox</span>
        </div>
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
            <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4'>
              Home
            </a>
            <a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4'>
              Create project
            </a>
            <a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400'>
              Blog
            </a>
          </div>
          <div>
            <input
              className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white'
              placeholder='Search...'
            />
          </div>
        </div>
      </nav>
    </div>
    <div className='mt-6 sm:mt-0 sm:py-12'>{children}</div>
  </div>
);

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
