import { useEffect, useContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../authentications/providers/AuthProvider";

const EditTask = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`/userTasks/${user?.email}`).then((res) => {
      setTasks(res?.data);
    });
  }, [axios, user?.email]);

  // console.log(tasks);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-center my-5 text-xl font-semibold">All Tasks</h1>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
     {tasks?.map((task) => {
        return (
          <div key={task?._id}>
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
              <div className="p-6">
                <header className="mb-4">
                  <h3 className="text-xl font-medium text-slate-700">
                  {task?.title}
                  </h3>
                  <div>
                  <p className="text-sm text-slate-400">
                    {task?.deadline}
                  </p>
                  <p className="text-sm text-slate-400">
                    {task?.priority}
                  </p>
                  </div>
                </header>
                <p className="h-24">
                  {task?.description.slice(0,15)}
                </p>
                <button>hello</button>
              </div>
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default EditTask;
