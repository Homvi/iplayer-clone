interface NavMenuElementProps {
  url: string;
  title: string;
}

const NavMenuElement = ({ url, title }: NavMenuElementProps) => {
  return (
    <a href={url} className="flex flex-col group mx-3 cursor-pointer">
      <div className="flex h-full  font-semibold py-3 items-center">{title}</div>
      <div className="h-[2px] flex w-5 opacity-0 bg-white group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>
    </a>
  );
};

export default NavMenuElement;
