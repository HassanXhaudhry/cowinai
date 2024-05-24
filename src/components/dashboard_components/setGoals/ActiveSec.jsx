import React from 'react';
import { LuPencilLine } from "react-icons/lu";

const ActiveSec = ({startEdit, archiveGoals }) => {

  const handleArchive = () => {
    archiveGoals();
  };

  return (
    <div className='flex gap-2 font-Roboto'>
      <button className="w-[85px] h-7 flex text-xs items-center justify-center gap-1 rounded-[5px] text-neutral-500 bg-zinc-300"
      onClick={startEdit}>
        Edit <LuPencilLine />
      </button>
      <button className="w-[85px] h-7 flex text-xs items-center justify-center hover:bg-blue-600 hover:text-white gap-1 rounded-[5px] text-neutral-500 bg-zinc-300"
      onClick={handleArchive}>
        Archive
      </button>
    </div>
  );
};

export default ActiveSec;
