// 



import React from 'react'

function RightControl({ handleSelection }) {
    return (
        <div className="w-[100px] h-[250px] border-4 border-solid  relative bg-[#ff5d51] rounded-r-3xl">
            <div className="absolute -top-4 right-2 w-20 h-4 bg-black rounded-t-xl"></div>

            <div className="absolute -top-2 left-4 -translate-x-1/2 text-4xl font-extrabold">+</div>

            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-19 h-19 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">X</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">B</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">Y</div>
                <div onClick={handleSelection} className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">A</div>
            </div>

            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-15 h-15 border-4 rounded-full"6</div> */}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-zinc-800  border-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-zinc-400 to-zinc-600"></div>
            </div>

        </div>
    )
}

export default RightControl