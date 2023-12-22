import { NavLink } from "react-router-dom";
import useAxios from '../hooks/useAxios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../authentications/providers/AuthProvider';

const DashHome = () => {
  const axios = useAxios();
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`/userTasks/${user?.email}`)
         .then(res => {
          setTasks(res?.data);
         })
  }, [axios, user?.email])
  
  console.log(tasks);

  return (
    <main className="">
      <div >
        <NavLink to="/dashboard/addTask">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-red-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
            <span>Add New Task</span>
          </button>
        </NavLink>
      </div>
    </main>
  );
};

export default DashHome;
