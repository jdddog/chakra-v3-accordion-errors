import {Box, Heading, VStack, Link as ChakraLink} from "@chakra-ui/react"
import NextLink from "next/link";

export const runtime = "edge";


export default async function Page() {
    return (
        <Box textAlign="center" p="2rem">
            <Heading pb="1.5rem">See below for different scenarios</Heading>
            <VStack gap={4}>
                <ChakraLink asChild>
                    <NextLink href="/webpack">1. Webpack Error</NextLink>
                </ChakraLink>

                {/* Need to force server render for error to occur */}
                <a href="/zag">2. Zag Error</a>

                <ChakraLink asChild>
                    <NextLink href="/functional">3. Functional Accordion</NextLink>
                </ChakraLink>
            </VStack>
        </Box>
    )
}
