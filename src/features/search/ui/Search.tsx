import SearchIcon from "@/shared/assets/search.svg";
import { filterPlace, useSearch } from "../model/useSearch";
import { useRef, useState, type ChangeEvent } from "react";

export function Search() {
  const { isOpen, toggleSearch, closeSearch } = useSearch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    const filtered = filterPlace(value);
    setResults(filtered);
    if (!isOpen) toggleSearch();
  };

  const handleClick = () => {
    if (!isOpen) toggleSearch();
  };

  return (
    <div className="relative flex w-full md:w-72 items-center">
      <input
        // ref={inputRef}
        value={keyword}
        onChange={handleInput}
        onClick={toggleSearch}
        placeholder="장소를 입력해 주세요"
        className="z-1000 w-full hidden md:block bg-zinc-700 h-12 md:w-72 rounded-3xl placeholder:text-zinc-400 pl-4 outline-none text-zinc-300"
      />
      {isOpen ? (
        <div className="flex flex-col inset-0 z-200 bg-zinc-700 fixed md:w-72 md:h-96 md:top-[50%] md:rounded-b-3xl md:absolute">
          <input
            onChange={handleInput}
            placeholder="장소를 입력해 주세요"
            className="h-14 pt-10 placeholder:text-zinc-400 pl-10 outline-none text-zinc-300 md:hidden"
          />
          {/* <p className="mt-8 ml-10 md:ml-4 h-7 text-zinc-500">최근 검색</p> */}
          <ul className="z-1200 mt-8 text-zinc-300 ml-10 md:ml-4 flex flex-col gap-2 overflow-y-auto scrollbar-hide">
            {results.map((item, idx) => (
              <li key={idx} className="z-1200">
                {item.split("-").join(" ")}
              </li>
            ))}
          </ul>
          <div className="flex-1 flex items-center justify-center text-zinc-400">
            {/* <p className="">최근 검색어가 없습니다</p> */}
          </div>
          <button
            className="mb-10 self-end mr-10 md:mb-4 md:mr-4 text-zinc-400"
            onClick={closeSearch}
          >
            닫기
          </button>
        </div>
      ) : (
        ""
      )}

      <img
        className="relative md:absolute -right-2 md:right-4 z-1500"
        src={SearchIcon}
        onClick={handleClick}
      />
    </div>
  );
}
