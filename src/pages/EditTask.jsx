import { useEffect, useContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../authentications/providers/AuthProvider";
import Swal from 'sweetalert2';

const EditTask = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`/userTasks/${user?.email}`).then((res) => {
      setTasks(res?.data);
    });
  }, [axios, user?.email]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  // console.log(tasks);
  const handleDelete = (id) => {
    axios.delete(`/delete-task/${id}`)
      .then((res) => {
        console.log(res);
        Toast.fire({
          icon: "success",
          title: "Task Deleted"
        });
      })
      .catch((err) => {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "Failed Delete Task"
        });
      }) 

    // refetch data
    axios.get(`/userTasks/${user?.email}`).then((res) => {
      setTasks(res?.data);
    });
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-center my-5 text-xl font-semibold">All Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {tasks?.map((task) => {
          return (
            <div key={task?._id}>
              <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                <div className="p-6">
                  <header className="mb-4 h-24">
                    <h3 className="md:text-xl font-medium text-slate-700">
                      {task?.title}
                    </h3>
                    <div>
                      <p className="text-sm text-slate-400">{task?.deadline}</p>
                      <p className="text-sm text-slate-400">{task?.priority}</p>
                    </div>
                  </header>
                  <p className="h-24">{task?.description.slice(0, 15)}</p>
                  <div>
                    <button onClick={() => handleDelete(task?._id)} className="inline-flex h-10  items-center justify-center gap-2 whitespace-nowrap rounded bg-red-500 p-2 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                      <span>Delete Task</span>
                    </button>
                  </div>
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
