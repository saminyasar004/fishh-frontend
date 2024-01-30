import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MessageSender = ({ message, avatarImg }) => {
    return (
        <div className="bg-gray-100 rounded-md mt-16 ml-8 px-4 py-3 flex flex-col space-y-2 mr-auto relative">
            <div className="chatBox absolute top-[-10px] right-[-5px] w-2 h-2 bg-foreground" />
            <span className="text-sm font-semibold text-gray-600">
                <Avatar>
                    <AvatarImage src={avatarImg} alt="AB" />
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
            </span>
            <p className="text-background">{message}</p>
        </div>
    );
};

export default MessageSender;

// const MessageReceiver = ({ message, avatarImg }) => {
//     return (
//         <div className="bg-gray-100 rounded-md px-4 py-3 flex flex-col space-y-2 ml-auto relative">
//             <div className="chatBox absolute top-[-10px] left-[-5px] w-2 h-2 bg-foreground" />
//             <span className="text-sm font-semibold text-gray-600">
//                 <Avatar>
//                     <AvatarImage src={avatarImg} alt="AB" />
//                     <AvatarFallback>AB</AvatarFallback>
//                 </Avatar>
//             </span>
//             <p className="text-background">{message}</p>
//         </div>
//     );
// };

// export default MessageReceiver;
