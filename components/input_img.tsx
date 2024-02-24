import Image from "next/image";
import React from "react";

function InputImages() {
  return (
    <>
      <div className=" h-screen flex justify-center items-center bg-slate-400">
        <div className="w-11/12 bg-violet-500">
          <div className="text-white p-2 flex justify-end mb-4">
            <button className="px-5 py-2 rounded-lg bg-blue-500">Add</button>
          </div>
          <table className="table-fixed">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default InputImages;
