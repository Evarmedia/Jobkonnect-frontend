import { FaEnvelope, FaSuitcase } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Overview = () => {
  return (
    <div>
      {/* Overview */}
      <div className='p-5 flex flex-col space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          <div className='bg-white border rounded-lg p-5 flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-sm text-gray-400'>
            <FaEnvelope className="text-lg" />
              <span>Applications</span>
            </div>
            <span className='text-lg font-semibold text-gray-700'>22</span>
          </div>
          <div className='bg-white border rounded-lg p-5 flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-sm text-gray-400'>
            <FaSuitcase className="text-lg" />
              <span>Jobs</span>
            </div>
            <span className='text-lg font-semibold text-gray-700'>12</span>
          </div>
          <div className='bg-white border rounded-lg p-5 flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-sm text-gray-400'>
            <IoNotifications className="text-lg"/>

              <span>Notification</span>
            </div>
            <span className='text-lg font-semibold text-gray-700'>8</span>
          </div>
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
