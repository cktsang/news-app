import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className='grid grid-cols-3 mx-auto max-w-6xl items-center px-4 py-10 md:px-10'>
        <Link
          href='/'
          prefetch={false}
          className='col-start-1 md:col-start-2 justify-self-start md:justify-self-center'
        >
          <h1 className='font-serif text-4xl whitespace-nowrap'>
            The{" "}
            <span className='underline decoration-6 decoration-orange-400'>
              News
            </span>{" "}
            Hub
          </h1>
        </Link>
        {/*dark mode */}
        <div className='col-start-3 justify-self-end'>
          <DarkModeButton />
        </div>
      </div>
      {/*navigation links*/}
      <NavLinks />
      {/*search bar*/}
      <SearchBox />
    </header>
  );
}

export default Header;
