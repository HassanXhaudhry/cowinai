import React from 'react';
import { LuPencilLine } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { apiWithToken } from "../../../api";
import { API_URLS } from "../../../utils/API_URLS";
import { setToken } from '../../../reducers/user.reducer';

const TodoWrapper2 = ({startEdit, archiveTodo }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.token);

  const archiveFunc = () => {
    apiWithToken(user).get(API_URLS.user.archiveGoals).then(res => {
      console.log(JSON.stringify(res))
    })
  };

  const handleArchive = () => {
    archiveFunc();
    archiveTodo();

    apiWithToken(user)
      .get(API_URLS.user.archiveGoals)
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

export default TodoWrapper2;
