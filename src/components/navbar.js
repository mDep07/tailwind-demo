import { useState } from 'react'

function Navbar() {

  const [state, setState] = useState('/home');

  return (
    <nav className="bg-white transition-all ease-in-out duration-200 h-12">
      <ul className="h-full flex items-center gap-8">
        {
          [
            ['Home', '/home'],
            ['About', '/about'],
            ['Contact', '/contact'],
          ].map(([title, url]) => (
            <li className="inline-block relative">
              <a 
                className={`
                  font-semibold p-3
                  ${state === url ? 'text-emerald-500' : 'text-gray-400'}
                `} 
                href="/#"
                onClick={() => setState(url)}
              >
                {title}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
