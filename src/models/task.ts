import mongoose, { Document } from 'mongoose';

/**
 * タスクを表すインターフェース。
 * タスクに必要な属性を定義する。
 *
 * id の定義は不要。MongoDB ではデータ登録時に自動的に ID が付与されるため。
 */
export interface Task {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

/**
 * Task のプロパティと Document のプロパティを持つインターフェース。
 *
 * extends 元の Document クラスは MongoDB のデータが一般的に持つプロパティを含んだクラス。
 * id もこのドキュメントクラス内で定義されている。
 *
 * これに作成日と更新日のプロパティを追加している。
 */
export interface TaskDocument extends Task, Document {
  createdAt: Date;
  updatedAt: Date;
}

/**
 * MongoDB で扱う task のデータ構造を定義するスキーマ。
 * フィールド名、データ型、制約、デフォルト値などを設定する。
 */
const taskSchema = new mongoose.Schema<TaskDocument>(
  // 第一引数: スキーマ定義オブジェクト
  // 各フィールドの名前とそのデータ型、オプション（必須かどうか、デフォルト値など）を指定する。
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  // 第二引数: スキーマオプションオブジェクト
  // ここではドキュメントが作成された日時 (createdAt) と更新された日時 (updatedAt) を自動的に管理する設定を行っている。
  {
    timestamps: true,
  },
);

/**
 * Task モデルの定義。
 *
 * 既に Task モデルが作製されている場合は `mongoose.models.Task` で取得する。
 * モデルの中に Task が存在しない場合は `mongoose.model('Task', taskSchema)` でモデルを新規作成する。
 */
export const TaskModel =
  mongoose.models.Task || mongoose.model('Task', taskSchema);
