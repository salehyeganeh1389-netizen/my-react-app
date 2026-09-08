import { useTaskStore } from "../Store/useTaskStore";
import { useEffect } from "react";

export default function Todo({ add }) {
  const All = useTaskStore((state) => state.All);
  const deleteAll = useTaskStore((state) => state.deleteAll);
  const isDark = useTaskStore((state) => state.isDark);
  const toggleTheme = useTaskStore((state) => state.toggleTheme);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="w-auto h-auto mt-10.5">
      <div className="flex justify-between">

        <div className="space-y-2">
          <div className="w-120 flex justify-between">
          <p
            className={`text-[30px] font-bold ${
              isDark ? "text-black" : "text-white"
            }`}
          >
            My Tasks
          </p>
          <button
          onClick={toggleTheme}
          className={`px-5 py-2 rounded-[10px]  transition duration-300 ${
            isDark
              ? "bg-white text-black hover:bg-gray-300"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {isDark ? " ☀️" : " 🌙"}
        </button>
        </div>

          {All.length > 0 && (
            All.map((task, index) => (
              <div
                key={index}
                className={`w-[125 h-25 rounded-[11px]  shadow-2xl shadow-gray-400  border border-gray-200 p-4 ${
                  isDark
                    ? "bg-white"
                    : "bg-[rgb(32,33,34)] rounded-b-[20px]"
                    
                }`}
              >
                <div className="flex justify-between ">

                  <p
                    className={`font-bold text-[25px] ${
                      isDark ? "text-black" : "text-white"
                    }`}
                  >
                    {task.title}
                  </p>

                  <button
                    onClick={() => deleteAll(index)}
                    className="text-red-600 text-[20] hover:bg-red-100 px-2 rounded rounded-[10px] transition duration-300
                     cursor-pointer hover:text-red-700 shadow-red-400 shadow-md"
                  >
                  <i class="bi bi-x-lg"></i>
                  </button>

                </div>

                <p
                  className={
                    isDark
                      ? "text-gray-700"
                      : "text-gray-300"
                  }
                >
                  {!task.summary
                    ? "No summary was provided for this task"
                    : task.summary}
                </p>

              </div>
            ))
          )}

        </div>

        

      </div>

      <button
        onClick={add}
        className="bg-blue-500 text-white cursor-pointer px-50 py-1.5 rounded-lg hover:bg-blue-900 transition duration-300 mt-10"
      >
        New Task
      </button>

    </div>
  );
}
