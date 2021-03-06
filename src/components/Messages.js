import React from 'react'
import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { SendMessages } from './SendMessages'

export const Messages = () => {

    const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div className="msg_history">

                {
                    msgs.map((msg) => (
                    ( msg % 2)
                    ? <IncomingMessage key={ msg } />
                    : <OutgoingMessage key={ msg } />
                    ))
                }


            </div>
            {/* <!-- Historia Fin --> */}

            <SendMessages />

        </div>
    )
}
