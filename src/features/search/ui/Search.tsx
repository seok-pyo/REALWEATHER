import SearchIcon from "@/shared/assets/search.svg";
import { useSearch } from "../model/useSearch";

export function Search() {
  const { isOpen, toggleSearch, closeSearch } = useSearch();

  const handleClick = () => {
    if (!isOpen) toggleSearch();
  };

  return (
    <div className="relative flex w-full md:w-72 items-center">
      <input
        onClick={toggleSearch}
        placeholder="장소를 입력해 주세요"
        className="z-1000 w-full hidden md:block bg-zinc-700 h-12 md:w-72 rounded-3xl placeholder:text-zinc-400 pl-4 outline-none text-zinc-300"
      />
      {isOpen ? (
        <div className="flex flex-col inset-0 z-200 bg-zinc-700 fixed md:w-72 md:h-96 md:top-[50%] md:rounded-b-3xl md:absolute">
          <input
            placeholder="장소를 입력해 주세요"
            className="h-14 pt-10 placeholder:text-zinc-400 pl-10 outline-none text-zinc-300 md:hidden"
          />
          <p className="mt-8 ml-10 md:ml-4 h-7 text-zinc-500">최근 검색</p>
          <div className="flex-1 flex items-center justify-center text-zinc-400">
            <p className="">최근 검색어가 없습니다</p>
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
        className="relative md:absolute -right-2 md:right-4 z-15"
        src={SearchIcon}
        onClick={handleClick}
      />
    </div>
  );
}
