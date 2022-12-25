import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import SidebarWithHeader from '../layout/layout'


export default function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ChakraProvider>
                    <SidebarWithHeader>
                        <Component {...pageProps} />
                    </SidebarWithHeader>
                </ChakraProvider>
            </Hydrate>
        </QueryClientProvider>
    )
}