import type { Route } from "./+types/home";

type User = {
  name:string,
  age:number,
  isAuthenticated: boolean,
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader (){
  try {
    const data = await fetch("/users");
    return await data.json();
  } catch(error) {
    return {error: "error thrown..."};
  }
}

export default function Home({loaderData}: Route.ComponentProps){

  return (<>
    {loaderData.map((user:User) => {
      return (
          <div className="p-10 flex flex-col bg-emerald-300 space-y-2" key={crypto.randomUUID()}>
            <span>Name : {user.name}</span>
            <span>Age: {user.age}</span>
            <span>IsAuthenticated : {user.isAuthenticated ? "Yes" : "No"}</span>
          </div>
      )
    })}
  </>)
}

