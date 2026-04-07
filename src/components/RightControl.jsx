// 



import React from 'react'

function RightControl() {
    return (
        <div className="w-[80px] h-[180px] border-4 border-solid  relative bg-red-500">

            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-14 h-14 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 border-2 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 border-2 rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 border-2 rounded-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 border-2 rounded-full"></div>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 border-4 rounded-full"></div>

        </div>
    )
}

export default RightControl