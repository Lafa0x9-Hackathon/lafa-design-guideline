// import "./Firspage.css";
import React from "react";
function FirstPage() {
  return (
    // <div id="mainbody">
    <div className="min-h-0 bg-no-repeat ">
      <div className=" h-screen  overflow-hidden border-2 border-red-500 lg:flex lg:flex-col ">
        <div className="w-[35%] h-[30%] border-2 ml-[50px] mt-20 xl:w-[40%] xl:h-[35%]">
          <h1 className="font-MiriamLibre-Bold text-7xl xl:text-8xl">Forms</h1>
          <p className="font-Libre-Franklin text-3xl leading-10 mt-5 xl:text-4xl xl:leading-10">
            Given Textual form controls like input and textarea an upgrade with
            custom styles, sizing , focus states and more.
          </p>
        </div>
        {/* <div id="body2"> */}
        <div className="h-[65%] flex flex-wrap items-center justify-around">
          {/* <div id="sub1"> */}
          <div className="border-2 border-dashed border-purple-800 h-[70%] flex flex-wrap flex-col justify-around w-4/12 mt-20">
            <input
              type="text"
              placeholder="Input here"
              className="w-[90%] border-2 border-solid border-gray-300 p-3.5 ml-5 rounded-md text-xs cursor-pointer hover:bg-orange-200 hover: border-1 hover:border-purple-800 "
            />
            <input
              type="text"
              placeholder="Input here"
              className="w-[90%] border-2 border-solid border-gray-300 p-3.5 ml-5 rounded-md text-xs cursor-pointer hover:bg-orange-200 hover: border-1 hover:border-purple-800 "
            />
            <input
              type="text"
              placeholder="Input here"
              className="w-[90%] border-2 border-solid border-gray-300 p-3.5 ml-5 rounded-md text-xs cursor-pointer hover:bg-orange-200 hover: border-1 hover:border-purple-800 "
              disabled
            />
            <input
              type="text"
              placeholder="Input here"
              className="w-[90%] border-2 border-solid border-gray-300 p-3.5 ml-5 rounded-md text-xs cursor-pointer hover:bg-orange-200 hover: border-1 hover:border-purple-800 "
            />
          </div>
          {/* <div id="sub2"> */}
          <div className="flex flex-wrap  w-[400px] h-[40%] justify-around mr-80 items-center">
            <textarea
              name="textarea"
              id="txt"
              cols="30"
              rows="10"
              placeholder="Input here"
              className="border-2 border-solid border-gray-400 rounded-md w-[80%] p-1.5 hover:bg-orange-200"
            />
            <select
              name="option"
              id="option"
              className="border-2 border-solid border-gray-400 w-[90%] text-xl p-4 mt-4 cursor-pointer"
            >
              <option value="A1">Choose an option</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
              <option value="C">Option C</option>
              <option value="D">Option D</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
