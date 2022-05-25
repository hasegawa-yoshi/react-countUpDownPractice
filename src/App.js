import { useCallback, useState } from "react";
import { Button } from "./components/Button";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const countUp = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const countDown = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  return (
    <div className="App">
      <h1>カウントアップダウンアプリケーション</h1>
      <h2>{count}</h2>
      <Button onClick={countUp}>アップ</Button>
      <br />
      <br />
      <Button onClick={countDown}>ダウン</Button>
    </div>
  );
}
