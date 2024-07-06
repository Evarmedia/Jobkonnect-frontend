const Overview = () => {
  return (
    <div>
      {/* Overview */}
      <div className='flex flex-col space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          <div className='bg-white border rounded-lg p-5 flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-sm text-gray-400'>
              <svg
                className='h-5 w-5'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M7 8h10M7 12h4m-2 8h2' />
              </svg>
              <span>Applications</span>
            </div>
            <span className='text-lg font-semibold text-gray-700'>22</span>
          </div>
          <div className='bg-white border rounded-lg p-5 flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-sm text-gray-400'>
              <svg
                className='h-5 w-5'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M7 8h10M7 12h4m-2 8h2' />
              </svg>
              <span>Jobs</span>
            </div>
            <span className='text-lg font-semibold text-gray-700'>12</span>
          </div>
          <div className='bg-white border rounded-lg p-5 flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-sm text-gray-400'>
              <svg
                className='h-5 w-5'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M7 8h10M7 12h4m-2 8h2' />
              </svg>
              <span>Notification</span>
            </div>
            <span className='text-lg font-semibold text-gray-700'>8</span>
          </div>
          {/* <div className='bg-white border rounded-lg p-5 flex items-center justify-between'>
                <div className='flex items-center space-x-2 text-sm text-gray-400'>
                  <svg
                    className='h-5 w-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M7 8h10M7 12h4m-2 8h2' />
                  </svg>
                  <span>Tasks</span>
                </div>
                <span className='text-lg font-semibold text-gray-700'>15</span>
              </div> */}
        </div>
        <div className='bg-white border rounded-lg p-5'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-lg font-semibold text-gray-700'>
              Recent Activity
            </h2>
            <button className='text-sm text-gray-600 hover:underline'>
              View all
            </button>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center space-x-4 text-sm'>
              <div className='flex items-center justify-center h-8 w-8 rounded-full bg-gray-200'></div>
              <div className='flex-grow'>
                <div className='text-gray-600'>You Recived a new application</div>
                <div className='text-gray-400'>1 hour ago</div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white border rounded-lg p-5'>
          <h2 className='text-lg font-semibold text-gray-700 mb-4'>
            Application Statistics
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
            <div className='bg-gray-100 border rounded-lg p-5 flex items-center justify-between'>
              <div className='text-gray-600'>Total Applications</div>
              <div className='text-lg font-semibold text-gray-700'>120</div>
            </div>
            <div className='bg-gray-100 border rounded-lg p-5 flex items-center justify-between'>
              <div className='text-gray-600'>Pending Application</div>
              <div className='text-lg font-semibold text-gray-700'>20</div>
            </div>
            <div className='bg-gray-100 border rounded-lg p-5 flex items-center justify-between'>
              <div className='text-gray-600'>Approved Applications</div>
              <div className='text-lg font-semibold text-gray-700'>10</div>
            </div>
            <div className='bg-gray-100 border rounded-lg p-5 flex items-center justify-between'>
              <div className='text-gray-600'>Rejected Applications</div>
              <div className='text-lg font-semibold text-gray-700'>130</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
