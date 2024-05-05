import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { apiWithToken } from "../../../api";
import { API_URLS } from "../../../utils/API_URLS";
import { setToken } from '../../../reducers/user.reducer';

const TodoWrapper = ({ task, deleteTodo, unarchiveTodo }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.token);

  const UnArchiveFunc = () => {
    apiWithToken(user).get(API_URLS.user.setGoals).then(res => {
      console.log(JSON.stringify(res))
    })
  };

  const handleUnArchive = () => {
    UnArchiveFunc();
    unarchiveTodo();

    apiWithToken(user)
      .get(API_URLS.user.unArchiveGoals)
      .then(res => {
        if (res.status === 200) {
          dispatch(setToken(res.data.access));
          console.log(res);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  return (
    <div className='flex gap-2 font-Roboto'>
    
      <button 
        className="w-[85px] h-7 flex text-xs hover:bg-red-600 hover:text-white items-center justify-center gap-1 rounded-[5px] text-neutral-500 bg-zinc-300" 
        onClick={() => deleteTodo(task.id)}
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

export default TodoWrapper;
