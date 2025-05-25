export type Status = "todo" | "inprogress" | "done";

export interface IconProps {
  size?: number;
  color?: string;
}
export interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
}

export type Column = {
  id: Status;
  title: string;
};
