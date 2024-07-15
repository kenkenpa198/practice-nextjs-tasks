'use server';

import { Task, TaskModel } from '@/models/task';
import { connectDb } from '@/utils/database';
import { redirect } from 'next/navigation';

/**
 * Server Actions 内でエラーが発生した場合の型
 */
export interface FormState {
  /** エラーメッセージ */
  error: string;
}

/**
 * タスクを作成する非同期関数。
 *
 * @param state - FormState 型のオブジェクト。エラーメッセージを含む。
 * @param formData - フォームから送信されるデータを含む FormData 型のオブジェクト。
 * @returns エラーが発生した場合、FormState 型のオブジェクトを返す。
 */
export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
    isCompleted: false,
  };

  // DB 接続とタスク作成時にエラーが発生した場合はエラーメッセージを state に設定して返却する
  try {
    await connectDb();
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = 'タスクの作成に失敗しました';
    return state;
  }

  // 処理が成功したらルートへリダイレクトさせる
  redirect('/');
};
