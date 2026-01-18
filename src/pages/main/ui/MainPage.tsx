import { CurrentBoard, Header, TimeBoard } from "@/widgets";
import { FavoriteList } from "@/widgets";
import { useEffect, useState } from "react";

export function MainPage() {
  const [toggle, setToggle] = useState(true);
  const toggleFavorite = () => {
    setToggle((prev) => !prev);
  };

  // 모바일 화면 스크롤 방지
  useEffect(() => {
    if (!toggle) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}`;
      document.body.style.width = "100%";
    } else {
      const scollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scollY || "0") * -1);
    }
  }, [toggle]);

  return (
    <div
      className={`${
        toggle ? "" : "h-screen overflow-hidden"
      } md:m-10 grid grid-cols-1 gap-4 grid-rows-[auto_1.5fr_3fr] min-h-screen w-full md:grid-cols-5 md:w-[80vw]  md:mx-auto  scrollbar-hide`}
    >
      <div className="md:col-span-5 w-full">
        <Header toggleFavorite={toggleFavorite} />
      </div>
      <div className="md:col-span-3 bg-zinc-900 md:rounded-2xl">
        <CurrentBoard />
      </div>
      <div className="md:col-span-3 bg-zinc-900 md:rounded-2xl">
        <TimeBoard />
      </div>
      <div
        className={`${
          toggle ? "hidden" : "fixed top-24 inset-0 z-0 bg-zinc-800 block"
        } md:static md:col-span-2 md:block md:row-span-2 md:row-start-2 md:col-start-4 bg-zinc-900 md:rounded-2xl flex flex-col`}
      >
        <FavoriteList />
      </div>
    </div>
  );
}
