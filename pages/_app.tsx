import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import {NextUIProvider} from '@nextui-org/react';

export default function MyApp({Component, pageProps}: { Component: any, pageProps: any }) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <NextUIProvider>
                    <Component {...pageProps} />
                </NextUIProvider>
            </Hydrate>
        </QueryClientProvider>
    )
}