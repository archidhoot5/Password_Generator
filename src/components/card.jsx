import React from 'react'

export function Card({channel, btnText}) {
    // console.log("props", props);
  return (
    // rem to align center here
    <div className="w-[400px] rounded-md border flex items-center justify-center ">
      <img
        src="adg logo.jpeg"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover items-center justify-center"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">About {channel} </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button
          type="button" 
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {btnText || "Can't view" }
        </button>
      </div>
    </div>
  )
}