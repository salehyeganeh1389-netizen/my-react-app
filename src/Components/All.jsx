import { useState } from "react";
import Todo from "./Todo";
import Form from "./Form";
import { useTaskStore } from "../Store/useTaskStore";

export default function All() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const All = useTaskStore((state) => state.All);
  const setTitle = useTaskStore((state) => state.setTitle);
  const setSummary = useTaskStore((state) => state.setSummary);
  const createAll = useTaskStore((state) => state.createAll);
  const deleteAll = useTaskStore((state) => state.deleteAll);

  const add = () => {
    setIsOpenForm(true);
  };

  const close = () => {
    setIsOpenForm(false);
  };

  const handleCreateAll = () => {
    createAll();
    setIsOpenForm(false);
  };

  return (
    <div>
      <Todo
        All={All}
        add={add}
        deleteAll={deleteAll}
      />

      {isOpenForm && (
        <Form
          createAll={handleCreateAll}
          setSummary={setSummary}
          setTitle={setTitle}
          close={close}
        />
      )}
    </div>
  );
}