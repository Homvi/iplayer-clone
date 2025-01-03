import { User } from 'lucide-react';

const SignInButton = () => {
  return (
    <button className="flex group items-center">
      <div className="flex flex-col group ml-3 w-fit">
        <div className="flex gap-3 h-full py-3 cursor-pointer font-semibold items-center min-w-52">
          <User /> Sign in
        </div>
        <div className="h-[2px] flex w-5 opacity-0 bg-blue-400 group-hover:w-full group-hover:opacity-100 transition-all max-w-[95%] duration-300 group-focus:opacity-100  group-focus:w-full"></div>
      </div>
      <div className="bg-white/20 h-7 my-auto w-[0.5px]"></div>
    </button>
  );
};

export default SignInButton;
