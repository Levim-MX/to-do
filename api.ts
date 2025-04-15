import { METHODS } from "http";
import { Itask } from "./types/tasks";
import { json } from "stream/consumers";
import { promises } from "dns";

const baseUrl = "http://localhost:3001";
export const getTodo = async (): Promise<Itask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" }); //tasks is aim to key at db.json, not the file called tasks.ts
  const todos = await res.json();
  return todos;
};
export const addTodo = async (todo: Itask): Promise<Itask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};
