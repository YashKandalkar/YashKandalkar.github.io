import { useEffect } from "react";
import "./Quotes.css";
import quotes from "../../assets/quotes.json";

const Quotes = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector("#quote-container").style.display = "none";
      document.body.style.overflowY = "auto";
      document.querySelector("html").style.overflowY = "auto";
    }, 11000);
    const waifuTimer = setTimeout(() => {
      document.querySelector("#waifu").style.display = "block";
    }, 9000);
    return () => {
      clearTimeout(timer);
      clearTimeout(waifuTimer);
    };
  }, []);
  const idx = Math.floor(Math.random() * quotes.length);

  return (
    <div
      id="quote-container"
      style={{
        fontFamily: "'Yuji Syuku', serif",
        zIndex: 999,
      }}
      className="top-0 left-0 fixed w-full h-full z-50 bg-transparent flex text-sm sm:text-base md:text-lg justify-center items-center flex-col"
    >
      <div
        id="quote-top"
        className="flex-grow px-4 h-full text-center bg-gray-50 w-full flex-col justify-end items-center flex"
      >
        <p>{quotes[idx].quote}</p>
        <p className="mb-4">- {quotes[idx].author}</p>
      </div>
      <div className="flex-grow px-4 bg-gray-50 w-full h-full">
        <div
          id="quote-line"
          className="flex flex-row justify-center items-center"
        >
          <span className="mt-0" />
          <span className="bg-gray-900 flex justify-center items-center" />
          <span className="mt-0" />
        </div>
        <div
          id="quote-bottom"
          className="flex items-center text-center flex-col"
        >
          <p
            style={{
              fontFamily: "'Yuji Syuku', serif",
            }}
            className="mt-4"
          >
            {quotes[idx].japanese}
          </p>
          <p>- {quotes[idx].japaneseAuther}</p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
