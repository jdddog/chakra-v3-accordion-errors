import {AccordionUseClient} from "../../components/accordion-use-client";

// Works in default runtime
export const runtime = "edge";

//  ⨯ Internal error: TypeError: Cannot read properties of undefined (reading 'length')
//     at coarseValue (./node_modules/@ark-ui/react/node_modules/@zag-js/accordion/dist/index.mjs:17:7109)
//     at Machine.eval [as executeActions] (./node_modules/@zag-js/core/dist/index.mjs:17:13126)
//     at Machine.eval [as _created] (./node_modules/@zag-js/core/dist/index.mjs:17:6233)
//     at eval (./node_modules/@zag-js/react/dist/index.mjs:168:18)
//     at useConstant (./node_modules/@zag-js/react/dist/index.mjs:157:12)
//     at useService (./node_modules/@zag-js/react/dist/index.mjs:165:21)
//     at useMachine (./node_modules/@zag-js/react/dist/index.mjs:180:21)
//     at useAccordion (./node_modules/@ark-ui/react/dist/components/accordion/use-accordion.js:33:84)
//     at eval (./node_modules/@ark-ui/react/dist/components/accordion/accordion-root.js:35:86)
//     at renderWithHooks (./node_modules/next/dist/compiled/react-dom/cjs/react-dom-server.edge.development.js:9675:16)

export default async function Page() {
    return (
        <AccordionUseClient/>
    )
}
