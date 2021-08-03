import { useState } from "react";
import "./header.css";
import { Images } from "./helper";

const Header = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const length = Images.length;
  console.log(slideNumber);

  const handlePreBtnClick = () => {
    setSlideNumber(slideNumber === 0 ? length - 1 : slideNumber - 1);
  };
  const handleNextBtnClick = () => {
    setSlideNumber(slideNumber === length - 1 ? 0 : slideNumber + 1);
  };

  return (
    <>
      <header className='header'>
        <div className='header_slider '>
          <img src={Images[slideNumber].img} alt='header img' />
          <div className='slider_content'>
            <h2>{Images[slideNumber].title} </h2>
            <p>{Images[slideNumber].subtitle}</p>
          </div>
        </div>
        <div className='navigatioBtn'>
          <div className='pre' onClick={handlePreBtnClick}>
            Pre
          </div>
          <div className='next' onClick={handleNextBtnClick}>
            Next
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
