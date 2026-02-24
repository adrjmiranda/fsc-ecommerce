const Logo = () => {
  return (
    <div className="rounded-sm px-8 py-1 font-medium ring-2 ring-gray-500 select-none">
      <p className="flex items-center justify-center gap-4 text-center tracking-[1rem] uppercase after:-mr-8 after:content-['']">
        <span className="text-primary text-sm sm:text-base md:text-lg">
          FSC
        </span>
        <span className="text-primary-text text-sm sm:text-base md:text-lg">
          Store
        </span>
      </p>
    </div>
  );
};

export default Logo;
