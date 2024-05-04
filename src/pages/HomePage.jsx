import Thumbnail from "../components/Thumbnail";
import HeroImage from "../components/HeroImage";

const HomePage = () => {
  return (
    <>
      <HeroImage />
      <div className="thumbnailWrapper">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </>
  );
};

export default HomePage;
