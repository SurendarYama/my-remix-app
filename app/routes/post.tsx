import type { Route } from "./+types/post";
export function meta({params}: Route.MetaArgs){
    console.log(params);
    return [
        {title: `Post title for ${params.postId}`},
        { name: "description", content: `Post description for ${params.postId}` },
    ]
}
export async function loader({params}:Route.LoaderArgs){
    return {postId:params.postId, name: "post name"}
}

export default function Post({loaderData}: Route.ComponentProps){
    return (<>{loaderData.postId}</>);
}