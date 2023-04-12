const makeColor = () => {
  // 흰색에 가까운 색이 나오지 않게 200으로 설정
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);

  return `rgb(${r}, ${g}, ${b})`;
};

export default makeColor;
