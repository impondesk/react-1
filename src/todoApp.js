import React from 'react'

import TodoDS from './todoDS'

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient()


export default function TodoApp() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <TodoDS />
            </QueryClientProvider>
        </>
    )
}
