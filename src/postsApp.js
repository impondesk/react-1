import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();


export default function PostsApp() {

    const [postId, setPostId] = React.useState(-1);



    return (
        <>
            <QueryClientProvider client={queryClient}>

                <div class="overflow-hidden">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Posts</h3>
                        <p class="mt-1 max-w-7xl text-sm text-gray-500">
                        <Posts setPostId={setPostId} />
                        </p>
                    </div>
                </div>

                <div class="max-w-7xl">
                    
                </div>


            </QueryClientProvider>
        </>
    )
}


function usePosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/?_limit=3"
            );
            return data;
        },
    });
}

function Posts({ setPostId }) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();

    return (
        <div>
            <div>
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (
                    <>
                        <div>
                            {data.map((post) => (
                                <p key={post.id} className="flex items-center justify-between py-2 pl-0 pr-0 text-md">
                                    <a
                                        onClick={() => setPostId(post.id)}
                                        href="#"
                                        style={
                                            // We can access the query data here to show bold links for
                                            // ones that are cached
                                            queryClient.getQueryData(["post", post.id])
                                                ? {
                                                    fontWeight: "bold",
                                                    color: "green",
                                                }
                                                : {}
                                        }
                                    >
                                        {post.title}
                                    </a>
                                </p>
                            ))}
                        </div>
                        <div>{isFetching ? "Background Updating..." : " "}</div>
                    </>
                )}
            </div>
        </div>
    );
}
