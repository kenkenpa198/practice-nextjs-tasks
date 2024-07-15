'use client';

import { FormState, updateTask } from '@/actions/task';
import { TaskDocument } from '@/models/task';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

interface EditTaskFormProps {
  task: TaskDocument;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const updateTaskWithId = updateTask.bind(null, task._id);
  const initialState: FormState = { error: '' };
  const [state, formAction] = useFormState(updateTaskWithId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full rounded-md bg-gray-800 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 disabled:bg-gray-400"
      >
        Edit
      </button>
    );
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-sm">
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">
            期限
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min="2020-01-01"
            max="2999-12-31"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            className="mr-2 h-4 w-4"
          />
          <label htmlFor="isCompleted" className="text-sm">
            タスクを完了にする
          </label>
        </div>
        <SubmitButton />
        {state.error !== '' && (
          <p className="mt-2 text-sm text-red-500">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default EditTaskForm;
