import React from "react";
import { Script } from "gatsby"

const LiveChat = (props) => {
    const pageurl = `https://www.petergreatorex.co.uk/`
    return (
        <React.Fragment>
            <Script src={`https://clients.yomdel.com/tools/chat_script.js?url=${pageurl}`} strategy="idle" />
        </React.Fragment>
    )
}

export default LiveChat