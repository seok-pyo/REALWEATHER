export function TimeTable() {
  return (
    <div className="flex flex-col">
      <h1>행당동 시간별 날씨</h1>
      <div>
        <div className="grid-rows-8">
          <p>오늘</p>
          <p>강수확률</p>
          <p>강수량</p>
          <p>습도</p>
          <p>자외선지수</p>
          <p>구름</p>
        </div>
      </div>
    </div>
  );
}
