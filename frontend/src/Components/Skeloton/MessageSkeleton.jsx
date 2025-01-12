import React from 'react';

const MessageSkeleton = ({ color = 'bg-purple-700' }) => {
    return (
        <>
            <div className="flex gap-3 items-center">
                <div className={`${color} w-8 h-8 rounded-full shrink-0 opacity-50`}></div>
                <div className="flex flex-col gap-1">
                    <div className={`${color} h-6 w-36 rounded-lg opacity-50`}></div>
                    <div className={`${color} h-6 w-36 rounded-lg opacity-50`}></div>
                </div>
            </div>
            <div className="flex gap-3 items-center justify-end">
                <div className="flex flex-col gap-1">
                    <div className={`${color} h-6 w-36 rounded-lg opacity-50`}></div>
                    <div className={`${color} h-6 w-36 rounded-lg opacity-50`}></div>
                    <div className={`${color} h-6 w-36 rounded-lg opacity-50`}></div>
                </div>
                <div className={`${color} w-8 h-8 rounded-full shrink-0 opacity-50`}></div>
            </div>
            <div className="flex gap-3 items-center">
                <div className={`${color} w-8 h-8 rounded-full shrink-0 opacity-50`}></div>
                <div className="flex flex-col gap-1">
                    <div className={`${color} h-6 w-36 rounded-lg opacity-50`}></div>
                </div>
            </div>
            


        </>
    );
};

export default MessageSkeleton;
