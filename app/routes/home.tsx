import type { Route } from "./+types/home";
import { useOutletContext } from "react-router";

type User = {
  name: string;
  age: number;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Yama Shop App | Home Page" },
    { name: "description", content: "Welcome to Yama Shop App!" },
  ];
}

export async function clientLoader() {
  try {
    const data = await fetch("/users");
    return await data.json();
  } catch (error) {
    return { error: "error thrown..." };
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const contextValue: number = useOutletContext();
  return (
    <>
      <h1> {contextValue} </h1>
      {loaderData.map((user: User) => {
        return (
          <div
            className="p-10 flex flex-col bg-emerald-300 space-y-2"
            key={crypto.randomUUID()}
          >
            <span>Name : {user.name}</span>
            <span>Age: {user.age}</span>
          </div>
        );
      })}
    </>
  );
}
