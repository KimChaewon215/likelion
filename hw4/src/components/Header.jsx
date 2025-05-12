const Header = ({ query, setQuery, handleSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="
    w-full
    flex
    bg-black
    justify-center 
    items-center 
    gap-2 
    mt-8 
    relative">
      <div className="absolute top-0 left-16 text-[32px] text-white font-serif">Movie Archive</div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for..."
        className="bg-black border-black text-white px-[16px] py-[8px] rounded-md 
        w-1/3
        focus: outline-none
        focus:ring-0
        focus: border-black"
      />
      <button
        onClick={handleSearch}
        className="
        border border-black
        text-white
        rounded-md
        bg-black 
        px-[16px]
        py-[8px]"
      >
        Go
      </button>
    </div>
  );
};

export default Header;
