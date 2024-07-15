import { TaskDocument, TaskModel } from '@/models/task';
import { connectDb } from '@/utils/database';
import { NextResponse } from 'next/server';

export const GET = async () => {
  // new Date() で取得した現在時刻を日本時間の `yyyy-mm-dd` の形式に変換する
  const currentDate = new Date()
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-');

  try {
    await connectDb();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      // タスクが未完了 かつ タスクの期限が現在の日付より小さい
      isCompleted: false,
      dueDate: { $lt: currentDate }, // $lt: 値より小さい
    });

    return NextResponse.json({
      message: 'タスク取得成功',
      tasks: completedTasks,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'タスク取得失敗' }, { status: 500 });
  }
};

export const dynamic = 'force-dynamic';
