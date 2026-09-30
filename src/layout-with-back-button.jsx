import { Outlet } from "react-router";
import Link from "./components/link";

function LayoutWithBackButton() {
  return (
    <>
      <div className="mb-4 flex">
        <Link
          className="hover:bg-link-hover hover:text-bg hover:outline-link-hover rounded-md px-3 py-1 outline transition-colors duration-150"
          to=".."
        >
          ← Back
        </Link>
      </div>
      <div className="m-auto max-w-2xl">
        <Outlet />
      </div>
    </>
  );
}

export default LayoutWithBackButton;
