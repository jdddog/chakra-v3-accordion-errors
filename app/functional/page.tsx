import {AccordionUseClientUseState} from "../../components/accordion-use-client-use-state";

// No errors
// Also works in default runtime
export const runtime = "edge"


export default async function Page() {
    return (
        <AccordionUseClientUseState/>
    )
}
