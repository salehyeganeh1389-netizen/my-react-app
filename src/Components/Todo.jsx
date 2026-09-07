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
    <div className="w-auto h-auto mt-[42px]">
      <div className="flex justify-between">

        <div className="space-y-2">
          <div className="w-120 flex justify-between">
          <p
            className={`text-[30px] font-bold ${
              isDark ? "text-black" : "text-gray-700"
            }`}
          >
            My Tasks
          </p>
          <button
          onClick={toggleTheme}
          className={`px-5 py-2 rounded-[10px] transition duration-300 ${
            isDark
              ? "bg-white text-black hover:bg-gray-300"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {isDark ? " Light" : " Dark"}
        </button>
        </div>

          {All.length > 0 && (
            All.map((task, index) => (
              <div
                key={index}
                className={`w-[500px] h-[100px] rounded-[20px] border-1 p-4 ${
                  isDark
                    ? "bg-white"
                    : "bg-[rgb(32,33,34)]"
                    
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
                    className="text-red-600 text-[40px]"
                  >
                    -
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
        className="bg-blue-500 text-white px-50 py-1 rounded-[12px] hover:bg-blue-900 transition duration-300 mt-10"
      >
        New Task
      </button>

    </div>
  );
}