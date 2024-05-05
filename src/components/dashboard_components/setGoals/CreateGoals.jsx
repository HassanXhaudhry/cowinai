import React, { useState,useEffect } from "react";
import TodoWrapper from "./GoalsWrapper";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import EditTodo from "./EditGoals";
import TodoWrapper2 from "./GoalsWrapper2";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { apiWithToken } from "../../../api";
import { useSelector,useDispatch } from "react-redux";
import { API_URLS } from "../../../utils/API_URLS";
import { setToken } from '../../../reducers/user.reducer';

const CreateGoals = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.token);

  const archiveFunc = () => {
    apiWithToken(user).post(API_URLS.user.archiveGoals).then(res => {
      console.log(JSON.stringify(res))
    })
  };
  const handleArchive = () => {
    toggleActiveCombined()
    archiveFunc();

    apiWithToken(user)
      .post(API_URLS.user.archiveGoals)
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
  const userToken = useSelector((state)=>state.user.token);
  const [getGoal,setGetGoal] = useState([]);
  debugger;
  useEffect(()=>{
    apiWithToken(userToken).get(API_URLS.user.getGoals).then(res=>{
      console.log(res.data)
      setGetGoal(res.data);
    })
  },[])


  const [todos, setTodos] = useState([]);
  const [archivedTodos, setArchivedTodos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [isActive, setIsActive] = useState(true);

  const addTodo = (todoArray) => {
    const [position, companyName, location, programmingLanguage] = todoArray;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuidv4(),
        position,
        companyName,
        location,
        programmingLanguage,
        isActive: true,
      },
    ]);
  };

  const toggleActiveCombined = () => {
    setIsActive(!isActive);
  };

  const editTodo = (id, todoArray) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...todoArray } : todo
      )
    );
    setEditTodoId(null);
  };

  const deleteTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  const archiveTodo = (id) => {
    const archivedTodo = todos.find((todo) => todo.id === id);
    setTodos(todos.filter((todo) => todo.id !== id));
    setArchivedTodos((prevArchivedTodos) => [
      ...prevArchivedTodos,
      archivedTodo,
    ]);
  };

  const unarchiveTodo = (id) => {
    const unarchivedTodo = archivedTodos.find((todo) => todo.id === id);
    setArchivedTodos((prevArchivedTodos) =>
      prevArchivedTodos.filter((todo) => todo.id !== id)
    );
    setTodos((prevTodos) => [...prevTodos, unarchivedTodo]);
  };

  return (
    <div className="font-Roboto w-full h-screen">
      <div className="text-xl font-semibold pt-3 pl-4 text-neutral-700">
        Set Your Goals
        <h2 className="text-[12px] font-Inter font-light pl-3 text-[#475467]">
          Share your job position and company details with the AI to create
          intelligent interview plans.
        </h2>
      </div>
      <div className="flex justify-between mt-6 mx-9 text-[#353535]">
        <div className="flex w-5">
          {isActive ? (
            <p
              className="text-[16px] font-normal underline cursor-pointer"
              onClick={handleArchive}
            >
              Active
            </p>
          ) : (
            <div className="flex gap-1">
              <HiOutlineArrowNarrowLeft className="h-6 w-5 pt-1" />
              <p
                className="text-[16px] font-normal underline cursor-pointer"
                onClick={toggleActiveCombined}
              >
                Inactive
              </p>
            </div>
          )}
        </div>
        <button
          className="w-24 h-7 text-xs cursor-pointer rounded-[5px] text-white bg-gradient-to-r from-orange to-yellow"
          onClick={() => setIsPopupOpen(true)}
        >
          Create
        </button>
      </div>

      {isPopupOpen && (
        <TodoForm addTodo={addTodo} setIsPopupOpen={setIsPopupOpen} />
      )}

      <div className="font-Manrope flex flex-col justify-start mx-8 my-4 rounded-lg h-auto md:shadow-2xl shadow-indigo-500/40 bg-opacity-30">
        <div className="flex text-sm gap-16 border-b text-[#475467] border-[#475467] border-opacity-40 py-3 pt-6 px-4 font-semibold">
          <p>Position</p>
          <p>Company</p>
          <p>Location</p>
          <p>Programming Language</p>
        </div>

        <div className="flex flex-col overflow-y-auto h-72 !important">
          {isActive &&

            getGoal.map((todo, index) => (
              <div
                key={index}
                className="flex gap-24 text-[#475467] text-xs mx-8 items-center py-5 border-b border-[#475467] border-opacity-40 pb-4"
              >
                <p className="w-7">{todo.position}</p>
                <p className="w-7">{todo.company_name}</p>
                <p className="w-7">{todo.location}</p>
                <p className="w-7">{todo.programing_language}</p>
                <div className="flex flex-grow justify-end">
                  <TodoWrapper2
                    startEdit={() => setEditTodoId(todo.id)}
                    archiveTodo={() => archiveTodo(todo.id)}
                  />
                </div>
              </div>
            ))}
          {archivedTodos.length > 0 &&
            !isActive &&
            archivedTodos.map((todo, index) => (
              <div
                key={index}
                className="flex gap-24 text-[#475467] text-xs mx-8 items-center py-5 border-b border-[#475467] border-opacity-40 pb-4"
              >
                <p className="w-7">{todo.position}</p>
                <p className="w-7">{todo.companyName}</p>
                <p className="w-7">{todo.location}</p>
                <p className="w-7">{todo.programmingLanguage}</p>
                <div className="flex flex-grow justify-end">
                  <TodoWrapper
                    task={todo}
                    deleteTodo={() => deleteTodo(todo.id)} 
                    unarchiveTodo={() => unarchiveTodo(todo.id)}
                  />
                </div>
              </div>
            ))}

        </div>

      </div>
      {editTodoId && (
        <EditTodo
          task={todos.find((todo) => todo.id === editTodoId)}
          editTodo={editTodo}
        />
      )}
    </div>
  );
};

export default CreateGoals;
