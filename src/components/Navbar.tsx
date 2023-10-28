const Navbar = () => {
  return (
    <div className="w-full h-48 sticky top-0 flex bg-black items-end">
      <div className="w-2/5 h-[70%] bg-white flex justify-center items-center bottom-0">
        <h1 className="text-8xl">STEM</h1>
      </div>
      <div className="w-3/5 h-[40%] bg-blue-600 flex justify-center items-center gap-16 bottom-0">
        <button className="text-xl text-white">Science</button>
        <button className="text-xl text-white">Technology</button>
        <button className="text-xl text-white">Engineering</button>
        <button className="text-xl text-white">Mathematics</button>
      </div>
    </div>
  );
};

export default Navbar;
