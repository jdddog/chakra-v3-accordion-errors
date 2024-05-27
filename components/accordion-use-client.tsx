// Added "use client";
"use client";

import {Accordion, Box, Icon} from "@chakra-ui/react"
import {ChevronDown} from "lucide-react"
import React from 'react'

const items = [
    {value: "a", title: "First Item", text: "Some value 1..."},
    {value: "b", title: "Second Item", text: "Some value 2..."},
    {value: "c", title: "Third Item", text: "Some value 3..."},
]

export const AccordionUseClient = () => {
    return (
        <Accordion.Root minW="300px" defaultValue={["b"]}>
            {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value}>
                    <h2>
                        <Accordion.ItemTrigger>
                            <Box flex="1" textAlign="start">
                                {item.title}
                            </Box>
                            <Accordion.ItemIndicator>
                                <Icon as={ChevronDown}/>
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    )
}
