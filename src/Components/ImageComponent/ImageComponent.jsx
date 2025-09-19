import bg from "./Img/bg.jpg";
import "./ImageComponent.css";

const ImageComponent = () => {
  return (
    <div className="ic-container">
      <img src={bg} alt="banner" className="ic-img" />
    </div>
  );
};

export default ImageComponent;
