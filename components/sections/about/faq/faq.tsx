import {RefObject} from "react";

export default function FAQ({faqRef}: { faqRef: RefObject<any> }) {
    return (
        <div ref={faqRef}>FAQ Time!</div>
    )
}