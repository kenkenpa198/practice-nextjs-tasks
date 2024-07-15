'use client';

import { deleteTask, FormState } from '@/actions/task';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { FaTrashAlt } from 'react-icons/fa';

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = { error: '' };
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  // タスク削除ボタンにはエラーメッセージを表示するためのスペースが無いため
  // useEffect を使用してアラートで通知する
  useEffect(() => {
    if (state && state.error !== '') {
      alert(state.error);
    }
  }, [state]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer text-lg hover:text-gray-700 disabled:bg-gray-400"
      >
        <FaTrashAlt />
      </button>
    );
  };

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
};

export default TaskDeleteButton;
