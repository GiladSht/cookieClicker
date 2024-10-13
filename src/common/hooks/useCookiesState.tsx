import { useState, useCallback } from "react";

export function useCookieState() {
  const [cookiesPerSecond, setCookiesPerSecond] = useState<number>(0);
  const [cookies, setCookies] = useState<number>(0);
  const handleClick = useCallback(() => {
    setCookies((prevClicks) => prevClicks + 1);
  }, []);

  return { cookiesPerSecond, cookies, handleClick };
}
