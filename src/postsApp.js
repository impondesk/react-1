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

// https://tanstack.com/query/v4/docs/react/examples/react/basic

export default function PostsApp() {

    const [postId, setPostId] = React.useState(-1);



    return (
        <>
            <QueryClientProvider client={queryClient}>

                <div className="overflow-hidden">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Posts</h3>
                        <p className="mt-1 max-w-7xl text-sm text-gray-500">
                            {/* <Posts setPostId={setPostId} /> */}
                            {postId > -1 ? (
                                <Post postId={postId} setPostId={setPostId} />
                            ) : (
                                <Posts setPostId={setPostId} />
                            )}
                        </p>
                    </div>
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
                "https://jsonplaceholder.typicode.com/posts/?_limit=10"
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
                                <p key={post.id} className="flex items-center justify-between py-1 pl-0 pr-0 text-md">
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





const getPostById = async (id) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
};

function usePost(postId) {
    console.log(postId);

    return useQuery({
        queryKey: ["post", postId],
        queryFn: () => getPostById(postId),
        enabled: !!postId,
    });
}

function Post({ postId, setPostId }) {
    const { status, data, error, isFetching } = usePost(postId);

    return (
        <div className="flex items-center justify-between py-1 pl-0 pr-0 text-md">
            <div>
                <a onClick={() => setPostId(-1)} href="#">
                    Back
                </a>
            </div>
            {!postId || status === "loading" ? (
                "Loading..."
            ) : status === "error" ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <span>he;llo!</span>
                    <h1>{data.title}</h1>
                    <div>
                        <p>{data.body}</p>
                    </div>
                    <div>{isFetching ? "Background Updating..." : " "}</div>
                </>
            )}
        </div>
    );
}
