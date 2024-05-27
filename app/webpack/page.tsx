import {Accordion, Box} from "@chakra-ui/react"
import {ChevronDown} from "lucide-react"

// Also fails with default runtime, just in the client rather than server
export const runtime = "edge";


//  ⨯ TypeError: (0 , _styled_system_create_style_context_mjs__WEBPACK_IMPORTED_MODULE_0__.createStyleContext) is not a function
//     at __webpack_require__ (/path/to/next-app/.next/server/edge-runtime-webpack.js:37:33)
//     at fn (/path/to/next-app/.next/server/edge-runtime-webpack.js:288:21)
//     at eval (./app/a/page.tsx:7:74)
//     at (rsc)/./app/a/page.tsx (/path/to/next-app/.next/server/app/a/page.js:5102:1)
//     at __webpack_require__ (/path/to/next-app/.next/server/edge-runtime-webpack.js:37:33)
//     at Function.fn (/path/to/next-app/.next/server/edge-runtime-webpack.js:288:21)
// digest: "778862165"
//  ⨯ TypeError: (0 , _styled_system_create_style_context_mjs__WEBPACK_IMPORTED_MODULE_0__.createStyleContext) is not a function
//     at __webpack_require__ (/path/to/next-app/.next/server/edge-runtime-webpack.js:37:33)
//     at fn (/path/to/next-app/.next/server/edge-runtime-webpack.js:288:21)
//     at eval (./app/a/page.tsx:7:74)
//     at (rsc)/./app/a/page.tsx (/path/to/next-app/.next/server/app/a/page.js:5102:1)
//     at __webpack_require__ (/path/to/next-app/.next/server/edge-runtime-webpack.js:37:33)
//     at Function.fn (/path/to/next-app/.next/server/edge-runtime-webpack.js:288:21)
// digest: "778862165"
//  ⨯ TypeError: (0 , _styled_system_create_style_context_mjs__WEBPACK_IMPORTED_MODULE_0__.createStyleContext) is not a function
//     at __webpack_require__ (/path/to/next-app/.next/server/edge-runtime-webpack.js:37:33)
//     at fn (/path/to/next-app/.next/server/edge-runtime-webpack.js:288:21)
//     at eval (./app/a/page.tsx:7:74)
//     at (rsc)/./app/a/page.tsx (/path/to/next-app/.next/server/app/a/page.js:5102:1)
//     at __webpack_require__ (/path/to/next-app/.next/server/edge-runtime-webpack.js:37:33)
//     at Function.fn (/path/to/next-app/.next/server/edge-runtime-webpack.js:288:21)
// digest: "3021769049"
//  [Error: (0 , _styled_system_create_style_context_mjs__WEBPACK_IMPORTED_MODULE_0__.createStyleContext) is not a function] {
//   digest: '3021769049'
// }
//  ⨯  [Error: (0 , _styled_system_create_style_context_mjs__WEBPACK_IMPORTED_MODULE_0__.createStyleContext) is not a function] {
//   digest: '3021769049'
// }
//  ⨯ [TypeError: Cannot read properties of null (reading 'default')]

const items = [
    {value: "a", title: "First Item", text: "Some value 1..."},
    {value: "b", title: "Second Item", text: "Some value 2..."},
    {value: "c", title: "Third Item", text: "Some value 3..."},
]


export default async function Page() {
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
