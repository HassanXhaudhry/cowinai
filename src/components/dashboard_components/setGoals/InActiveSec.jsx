import React from 'react';

const InActiveSec = ({ deleteGoals, unarchiveGoals }) => {

  const handleUnArchive = () => {
    unarchiveGoals();
  };

  return (
    <div className='flex gap-2 font-Roboto'>
      <button 
        className="w-[85px] h-7 flex text-xs hover:bg-red-600 hover:text-white items-center justify-center gap-1 rounded-[5px] text-neutral-500 bg-zinc-300" 
        onClick={deleteGoals} 
      >
        Delete
      </button>
      <button 
        className="w-[85px] h-7 flex text-xs hover:bg-blue-600 hover:text-white items-center justify-center gap-1 rounded-[5px] text-neutral-500 bg-zinc-300" 
        onClick={handleUnArchive}
      >
        Unarchive
      </button>
    </div>
  );
};

export default InActiveSec;
