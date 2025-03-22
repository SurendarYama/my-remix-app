import type { ActionFunctionArgs } from "react-router";
import type { Route } from "./+types/user";

export async function loader({ params }: Route.LoaderArgs) {
  return {
    name: "Surendar Yama",
    age: 32,
    userId: params.userId,
  };
}

export async function action({ request }: ActionFunctionArgs) {
  switch (request.method) {
    case "POST": {
      const payload = await request.json();
      return { payload, method: "POST" };
    }
    case "PUT": {
      /* handle "PUT" */
      const payload = await request.json();
      return { payload, method: "PUT" };
    }
    case "PATCH": {
      /* handle "PATCH" */
      const payload = await request.json();
      return { payload, method: "PATCH" };
    }
    case "DELETE": {
      /* handle "DELETE" */
      const payload = await request.json();
      return { payload, method: "DELETE" };
    }
  }
}
