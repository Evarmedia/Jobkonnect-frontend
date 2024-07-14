import PropTypes from 'prop-types';

const ConfirmDelete = ({ confirmDelete, cancelDelete }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h1 className="font-semibold text-2xl">Confirm Delete</h1>
        <p className='mb-4'>Are you sure you want to delete this?</p>
        <div className="flex justify-around gap-10">
          <button
            onClick={confirmDelete}
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-2'
          >
            Yes😥
          </button>
          <button
            onClick={cancelDelete}
            className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
          >
            No😃
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmDelete.propTypes = {
  confirmDelete: PropTypes.func.isRequired,
  cancelDelete: PropTypes.func.isRequired,
};

export default ConfirmDelete;
