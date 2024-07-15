'use client';

import { createTask, FormState } from '@/actions/task';
import { useFormState, useFormStatus } from 'react-dom';

const NewTaskForm = () => {
  // FormState の初期状態
  const initialState: FormState = { error: '' };

  // Server Actions の結果と Server Actions と同じ機能を持つ formAction 関数を取得する
  // state                   : Server Actions の戻り値
  // formAction              : Server Actions と同じ動きをする関数
  // useFormState の第一引数 : Server Actions 本体 (createTask)
  // useFormState の第二引数 : state の初期値 (initialState)
  const [state, formAction] = useFormState(createTask, initialState);

  /**
   * SubmitButton
   *
   * - useFormStatus の戻り値を取得し、送信処理中は非活性 (disabled) にしてボタンを押せなくする
   *
   * @returns - Button の JSX
   */
  const SubmitButton = () => {
    // Server Actions の実行状態を取得する
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full rounded-md bg-gray-800 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 disabled:bg-gray-400"
      >
        Create
      </button>
    );
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-sm">
      {/*
        form の action 属性へ formAction 関数を渡す
        フォームの内容が Server Actions へ送信され、タスクが作成される
      */}
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
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
            required
            className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <SubmitButton />
        {state.error && (
          <p className="mt-2 text-sm text-red-500">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default NewTaskForm;
