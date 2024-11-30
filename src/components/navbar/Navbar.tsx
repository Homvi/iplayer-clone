import { Ellipsis, Search, X } from 'lucide-react';
import Logo from './Logo';
import NavMenuElement from './NavMenuElement';
import SignInButton from './SignInButton';
import { useEffect, useRef, useState, useMemo } from 'react';

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
  const [visibleItems, setVisibleItems] = useState(navMenuElements);
  const [overflowItems, setOverflowItems] = useState<typeof navMenuElements>(overflowNavMenuElement);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleExtraLineOfMenus(): void {
    setIsDropdownOpen((prev) => !prev);
  }

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

          <button onClick={toggleExtraLineOfMenus} className="flex flex-col group mx-3 cursor-pointer mr-6">
            <div className="flex h-full font-semibold py-3 items-center">
              <Ellipsis size={35} />
            </div>
            <div className="h-[2px] flex w-5 opacity-0 bg-white group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>
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
    backdrop-blur-sm
    overflow-hidden
    transition-all
    duration-300
    ease-linear
    ${isDropdownOpen ? 'h-fit opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-3'}
  `}
      >
        <div
          className="max-w-7xl  border-t-[0.5px]
    border-white/20 mx-auto flex justify-between items-center p-3"
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
    </nav>
  );
};

export default Navbar;
