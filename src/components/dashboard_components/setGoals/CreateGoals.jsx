import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Oval } from 'react-loader-spinner'
import ActiveSec from "./ActiveSec";
import AddGoals from "./AddGoals";
import EditGoals from "./EditGoals";
import { useSelector, useDispatch } from 'react-redux';
import { openPopup, closePopup } from '../../../reducers/PopupReducer';
import InActiveSec from "./InActiveSec";
import { readGoals, deleteGoal, archiveGoal, unarchiveGoal, editGoal } from "../../../reducers/GoalsReducer";

const CreateGoals = () => {
  const [editGoals, setEditGoals] = useState(false);
  const [archivedGoals, setArchivedGoals] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const isPopupOpen = useSelector(state => state.popup.isPopupOpen);
  const { users, loading } = useSelector(state => state.goals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readGoals());
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setArchivedGoals(users.filter(user => user.isArchived));
    }
  }, [users]);

  const handleOpenPopup = () => {
    dispatch(openPopup());
  };

  const handleClosePopup = () => {
    dispatch(closePopup());
    setEditGoals(false);
    setSelectedGoal(null);
  };

  const handleArchive = () => {
    toggleActiveCombined();
  };

  const toggleActiveCombined = () => {
    setIsActive(!isActive);
  };

  const archiveGoals = (id) => {
    dispatch(archiveGoal(id));
  };

  const unarchiveGoals = (id) => {
    dispatch(unarchiveGoal(id));
  };

  const deleteGoals = (id) => {
    dispatch(deleteGoal(id));
  };

  const startEdit = (goal) => {
    setSelectedGoal(goal);
    setEditGoals(true);
    handleOpenPopup();
  };

  const handleEditGoal = (updatedGoal) => {
    dispatch(editGoal({ id: selectedGoal.id, data: updatedGoal }));
    handleClosePopup();
  };

  if (loading) {
      return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center h-screen bg-popup_bg">
        <Oval
      visible={true}
      height="50"
      width="50"
      color="#ffffff"
      ariaLabel="oval-loading"
      />
      </div>);
  }

  return (
    <div className="font-Roboto w-full h-screen">
      <div className="text-xl font-semibold pt-3 pl-4 text-neutral-700">
        Set Your Goals
        <h2 className="text-[12px] font-Inter font-light pl-3 text-[#475467]">
          Share your job position and company details with the AI to create intelligent interview plans.
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
          onClick={handleOpenPopup}
        >
          Create
        </button>
      </div>

      {isPopupOpen && !editGoals && <AddGoals onClose={handleClosePopup} />}
      {isPopupOpen && editGoals && <EditGoals goal={selectedGoal} onSave={handleEditGoal} onClose={handleClosePopup} />}

      <div className="font-Manrope flex flex-col justify-start mx-8 my-4 rounded-lg h-auto md:shadow-2xl shadow-indigo-500/40 bg-opacity-30">
        <div className="flex text-sm gap-16 border-b text-[#475467] border-[#475467] border-opacity-40 py-3 pt-6 px-4 font-semibold">
          <p>Position</p>
          <p>Company</p>
          <p>Location</p>
          <p>Programming Language</p>
        </div>

        <div className="flex flex-col overflow-y-auto h-72 !important">
          {isActive && users && users.filter(user => !user.isArchived).map((data) => (
            <div
              key={data.id}
              className="flex gap-24 text-[#475467] text-xs mx-8 items-center py-5 border-b border-[#475467] border-opacity-40 pb-4"
            >
              <p className="w-7">{data.position}</p>
              <p className="w-7">{data.companyName}</p>
              <p className="w-7">{data.location}</p>
              <p className="w-7">{data.programmingLanguage}</p>
              <div className="flex flex-grow justify-end">
                <ActiveSec
                  startEdit={() => startEdit(data)}
                  archiveGoals={() => archiveGoals(data.id)}
                />
              </div>
            </div>
          ))}
          {archivedGoals.length > 0 && !isActive && archivedGoals.map((data) => (
            <div
              key={data.id}
              className="flex gap-24 text-[#475467] text-xs mx-8 items-center py-5 border-b border-[#475467] border-opacity-40 pb-4"
            >
              <p className="w-7">{data.position}</p>
              <p className="w-7">{data.companyName}</p>
              <p className="w-7">{data.location}</p>
              <p className="w-7">{data.programmingLanguage}</p>
              <div className="flex flex-grow justify-end">
                <InActiveSec
                  deleteGoals={() => deleteGoals(data.id)}
                  unarchiveGoals={() => unarchiveGoals(data.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateGoals;
