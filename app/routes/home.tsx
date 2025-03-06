import type { Route } from "./+types/home";
import {useLoaderData} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader (){
  try {
    const data = await fetch("http://localhost:5173/user");
    return await data.json();
  }catch(error){
    return {error: "error thrown..."};
  }
}

export default function Home(){
  const {name,age,isAuthenticated} = useLoaderData();

  return (<>
    <div className="flex flex-col bg-purple-200 text-black p-10 space-y-5">
      <span>Name : {name}</span>
      <span>Age: {age}</span>
      <span>isAuthenticated: {isAuthenticated ? "Yes" : "No"}</span>
    </div>
  </>)
}

