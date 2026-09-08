import { useTaskStore } from "../Store/useTaskStore";

export default function Form({ close, createAll }) {
  const title = useTaskStore((state) => state.title);
  const summary = useTaskStore((state) => state.summary);

  const setSummary = useTaskStore((state) => state.setSummary);
  const isDark = useTaskStore((state) => state.isDark);

  return (
    <div
      className="fixed inset-0 z-40 bg-black/50"
 
    >

      <div
        className={`w-100 h-100 space-y-2.5 fixed inset-0 m-auto z-50 rounded-[20px] p-10 ${
          isDark ? "bg-white" : "bg-[rgb(32,33,34)]"

        }`}
      >


        <form className="flex flex-col gap-5 mt-10">

          

          <label
            className={
              isDark ? "text-gray-800" : "text-gray-300"
            }
          >
            Summary  
          </label>

          <input
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className={`px-20 border py-1 rounded rounded-[8px] ${
              isDark
                ? "bg-gray-100 text-gray-800"
                : "bg-zinc-900 text-gray-300"
            }`}
            placeholder="Task Summary"
            type="text"
          />

        </form>

        <div className="flex justify-between mt-8.75">

          <button
            onClick={close}
            className="px-8 py-2 hover:bg-blue-300 rounded rounded-[8px] transition duration-300 text-blue-700"
          >
            Cancel
          </button>

          <button
            disabled={!title.trim()}
            onClick={createAll}
            className="px-8 py-2 bg-blue-500 rounded rounded-[8px] hover:bg-blue-900 
            transition duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Task
          </button>

        </div>

      </div>
    </div>
  );
}