import React, { createContext, useContext, useState } from "react";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { LogOut } from "lucide-react";
import { UserAuth } from "../context/AuthContext";

const SideBarContext = createContext();
export default function SideBar({ children }) {
  
  const [expanded, setExpanded] = useState(true);
  const { user, logOut } = UserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="h-screen h-full bg-violet-400">
      <nav className="h-full flex flex-col bg-white border-r shadow-md">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all duration-300 ${expanded ? "w-32 opacity-100" : "w-0 opacity-0 absolute left-full"}`}
            alt=""
          ></img>
          <button
            onClick={() => {
              setExpanded((curr) => !curr);
            }}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SideBarContext.Provider>
        <div className="flex p-4 border-t bg-amber-50 justify-between gap-2">
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"
            alt=""
            className="w-10 h-10 rounded-lg"
          ></img>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ml-3 duration-300 ${expanded ? "w-32 opacity-100" : "w-0 opacity-0"
              } `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{user?.displayName}</h4>
              <span className="text-xs text-gray-600">{user?.email}</span>
            </div>
          </div>
          {expanded ?
            <button onClick={handleLogOut} className="">
              <LogOut />
            </button> : <></>
          }

        </div>
      </nav>
    </aside>
  );
}

export function SideBarItem({ icon, text }) {
  const { expanded } = useContext(SideBarContext);
  return (
    <>
      <li className="relative flex items-center py-2 px-3 my-2 font-medium cursor-pointer group">
        {icon}
        <span className={`overflow-hidden transition-all duration-100 ${expanded ? "w-32 opacity-100 m-3" : "w-0 opacity-0"
          }`}>{text}</span>

        {!expanded && (
          <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-rose-100 text-rose-800 text-sm invisible
      opacity-20  -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`
      }>
          {text}
        </div>)}
      </li>
    </>
  );
}
