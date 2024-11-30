import { Ellipsis, Search } from 'lucide-react';
import Logo from './Logo';
import NavMenuElement from './NavMenuElement';
import SignInButton from './SignInButton';

const Navbar = () => {
  const navMenuElements = [
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
  ];

  function toggleExtraLineOfMenus(): void {
    // TODO: Implement menu open behaviour
    console.log('Open menu');
  }

  return (
    <nav className="border-b-[0.5px] border-white/20">
      <div className="min-w-4xl w-fit mx-auto flex p-3">
        <Logo />
        <SignInButton />
        <ul className="h-fit flex items-center my-auto pl-6 gap-6">
          {navMenuElements.map((element) => (
            <NavMenuElement title={element.title} url={element.href} />
          ))}
          <button onClick={toggleExtraLineOfMenus} className="flex flex-col group mx-3 cursor-pointer">
            <div className="flex h-full font-semibold py-3 items-center">
              <Ellipsis size={35} />
            </div>
            <div className="h-[2px] flex w-5 opacity-0 bg-white group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>
          </button>
          <button
            onClick={() => (window.location.href = 'https://www.bbc.co.uk/iplayer/search?q=')}
            className="bg-white/40 flex items-center px-3 hover:bg-white/50 h-fit py-2 gap-2"
          >
            <Search size={20} />
            <span>Search iPlayer</span>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
