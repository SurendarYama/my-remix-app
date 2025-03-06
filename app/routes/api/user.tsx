import type {ActionFunctionArgs} from "react-router";

export async function loader(){
    return {
        name: "Surendar Yama",
        age:32,
        isAuthenticated: true,
    }
}

export async function action({request} :  ActionFunctionArgs ) {
    switch (request.method) {
        case "POST":{
            const payload = await request.json();
            return {payload, method: "POST"};
        }
        case "PUT": {
            /* handle "PUT" */
            const payload = await request.json();
            return {payload, method: "PUT"};
        }
        case "PATCH": {
            /* handle "PATCH" */
            const payload = await request.json();
            return {payload, method: "PATCH"};
        }
        case "DELETE": {
            /* handle "DELETE" */
            const payload = await request.json();
            return {payload, method: "DELETE"};
        }
    }
}