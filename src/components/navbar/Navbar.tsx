import { Ellipsis, Search, X } from 'lucide-react';
import Logo from './Logo';
import NavMenuElement from './NavMenuElement';
import SignInButton from './SignInButton';
import { useEffect, useRef, useState, useMemo } from 'react';
import IPlayerLogo from './IPlayerLogo';

const Navbar = () => {
  const navMenuElements = useMemo(
    () => [
      {
        href: 'https://www.bbc.com',
        title: 'Home'
      },
      {
        href: 'https://www.bbc.com/news',
        title: 'News'
      },
      {
        href: 'https://www.bbc.com/sport',
        title: 'Sport'
      },
      {
        href: 'https://www.bbc.com/business',
        title: 'Business'
      },
      {
        href: 'https://www.bbc.com/innovation',
        title: 'Innovation'
      },
      {
        href: 'https://www.bbc.com/culture',
        title: 'Culture'
      },
      {
        href: 'https://www.bbc.com/travel',
        title: 'Travel'
      }
    ],
    []
  );

  const overflowNavMenuElement = useMemo(
    () => [
      {
        href: 'https://www.bbc.com/future-planet',
        title: 'Earth'
      },
      {
        href: 'https://www.bbc.com/video',
        title: 'Video'
      },
      {
        href: 'https://www.bbc.com/live',
        title: 'Live'
      }
    ],
    []
  );

  const navbarRef = useRef<HTMLUListElement>(null);
  const threeDotsRef = useRef<HTMLButtonElement>(null);
  const [visibleItems, setVisibleItems] = useState(navMenuElements);
  const [overflowItems, setOverflowItems] = useState<typeof navMenuElements>(overflowNavMenuElement);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleExtraLineOfMenus(): void {
    setIsDropdownOpen((prev) => !prev);
  }

  useEffect(() => {
    if (!isDropdownOpen) {
      threeDotsRef.current?.focus();
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    function handleDynamicNavMenuItems() {
      if (!navbarRef.current) return;

      // Get the total width of the navbar container
      const navbarWidth = navbarRef.current.offsetWidth;

      // Calculate the width of fixed elements (buttons, etc.)
      const fixedElementsWidth = 200;

      // Calculate available width for menu items
      const availableWidth = navbarWidth - fixedElementsWidth;

      let currentWidth = 0;
      const updatedVisibleItems: typeof navMenuElements = [];
      const updatedOverflowItems: typeof navMenuElements = [];

      // Create a copy of the original menu elements to work with
      const remainingElements = [...navMenuElements];

      // Iterate through menu elements and distribute them
      while (remainingElements.length > 0) {
        const element = remainingElements[0];
        const itemWidth = 70;

        if (currentWidth + itemWidth <= availableWidth) {
          updatedVisibleItems.push(element);
          currentWidth += itemWidth;
          remainingElements.shift(); // Remove the first element
        } else {
          // If no more space, move remaining elements to overflow
          updatedOverflowItems.push(...remainingElements);
          break;
        }
      }

      // Merge existing overflow items with any remaining core menu items
      const finalOverflowItems = [...overflowNavMenuElement, ...updatedOverflowItems].filter(
        (item, index, self) => index === self.findIndex((t) => t.title === item.title)
      );

      // Update state
      setVisibleItems(updatedVisibleItems);
      setOverflowItems(finalOverflowItems);
    }

    // Run on mount and resize
    handleDynamicNavMenuItems();
    window.addEventListener('resize', handleDynamicNavMenuItems);

    return () => {
      window.removeEventListener('resize', handleDynamicNavMenuItems);
    };
  }, [navMenuElements, overflowNavMenuElement]);

  return (
    <nav className="w-full mx-auto">
      <div className="max-w-7xl w-full mx-auto flex p-3">
        <Logo />
        <SignInButton />
        <ul ref={navbarRef} className="flex h-fit items-center pl-6 justify-between w-full">
          {/* basic nav elements */}
          <div className="flex justify-around w-full">
            {visibleItems.map((element) => (
              <NavMenuElement key={element.title} title={element.title} url={element.href} />
            ))}
          </div>

          <button
            ref={threeDotsRef}
            onClick={toggleExtraLineOfMenus}
            className="flex flex-col group mx-3 cursor-pointer mr-6"
          >
            <div className="flex h-full font-semibold py-3 items-center bg">
              <Ellipsis size={35} />
            </div>
            <div className="h-[2px] flex w-5 opacity-0 bg-white group-hover:w-full group-hover:opacity-100 group-focus:opacity-100  group-focus:w-full transition-all duration-300"></div>
          </button>
          {/* search */}
          <button
            onClick={() => (window.location.href = 'https://www.bbc.co.uk/iplayer/search?q=')}
            className="bg-transparent xl:bg-white/40 items-center px-3 hover:bg-white/50 flex h-fit py-2 gap-2 ml-auto"
          >
            <Search size={20} className="inline mr-2" />
            <span className="hidden xl:inline whitespace-nowrap">Search iPlayer</span>
          </button>
        </ul>
      </div>

      {/* Dropdown for overflow items */}
      <div
        className={`
    w-full
    bg-black/80
    transition-all
    duration-100
    overflow-hidden
    ease-in
    ${isDropdownOpen ? ' h-20 translate-y-0 opacity-100 ' : ' h-0 -translate-y-5 border-none opacity-0'}
  `}
      >
        <div
          className={`max-w-7xl  
    border-white/20 mx-auto flex transition-opacity duration-500 justify-between items-center p-3 ${
      isDropdownOpen ? ' opacity-100 border-t-[0.5px]' : ' opacity-0 border-0'
    }`}
        >
          <div className="flex flex-wrap">
            {overflowItems.map((element) => (
              <NavMenuElement key={element.title} title={element.title} url={element.href} />
            ))}
          </div>

          <button onClick={toggleExtraLineOfMenus} className="ml-4 mr-3">
            <X size={30} className="cursor-pointer" />
          </button>
        </div>
      </div>
      <div className=" border-t-[0.5px] border-white/20">
        <div className="max-w-7xl mx-auto py-6 flex justify-between items-center px-3">
          <IPlayerLogo className="fill-pink-600 h-7 hover:fill-white transition-colors duration-300 cursor-pointer " />
          <ul className="flex gap-6">
            <li className="cursor-pointer hover:text-pink-600 text-white transition-colors duration-300">Channels</li>
            <li className="cursor-pointer hover:text-pink-600 text-white transition-colors duration-300">Categories</li>
            <li className="cursor-pointer hover:text-pink-600 text-white transition-colors duration-300">A-Z</li>
            <li className="cursor-pointer hover:text-pink-600 text-white transition-colors duration-300">TV Guide</li>
            <li className="cursor-pointer hover:text-pink-600 text-white transition-colors duration-300">Wachlist</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
