import {
  FavoriteBorderOutlined,
  LocalMallOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-10 py-5 border-y-[1px] border-black">
        <div className="w-1/3">
          <div className="w-fit border-2 border-black rounded-3xl overflow-hidden">
            <input
              type="text"
              placeholder="Search your product..."
              className="placeholder:text-sm placeholder:font-semibold placeholder:text-neutral-900 text-black px-4 py-1.5 outline-none"
            />
            <button className="px-4 py-1.5 bg-black text-white">
              <SearchOutlined />
            </button>
          </div>
        </div>
        <div className="w-1/3 text-center">
          <h1>Logo</h1>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <button className="mx-3">
            <PersonOutlined fontSize="medium" />
            <span>Login</span>
          </button>
          <button className="mx-3">
            <FavoriteBorderOutlined fontSize="medium" />
          </button>
          <button className="mx-3">
            <LocalMallOutlined fontSize="medium" />
          </button>
        </div>
      </div>
      <ul className="flex justify-center items-center py-3">
        <li className="mx-2 font-semibold text-lg">
            <Link href="/">
                Home
            </Link>
        </li>
        <li className="mx-2 font-semibold text-lg">
            <Link href="/about">
                About
            </Link>
        </li>
        <li className="mx-2 font-semibold text-lg">
            <Link href="/contact">
                Contact
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
