import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
const DeleteUser = ({open}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleDelete = () => {
    // Handle user deletion logic here
    console.log('User deleted');
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 fixed top-0 left-0">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4 text-red-600">Delete User</h2>
          <p className="mb-6">Are you sure you want to delete this user?</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteUser;