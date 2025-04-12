import { Itask } from "./types/tasks";

const baseUrl = "http://localhost:3001";
export const getTodo = async (): Promise<Itask[]> => {
  const res = await fetch(`${baseUrl}/tasks`); //tasks is aim to key at db.json, not the file called tasks.ts
  const todos = await res.json();
  return todos;
};
