import "./GalleryMenu.css";
import bigImg from "../../assets/mak-drink-6.png";

const categories = [
  { id: "00", label: "Ultra" },
  { id: "01", label: "Food" },
  { id: "02", label: "DRINKS" },
  { id: "03", label: "Portraits" },
  { id: "04", label: "Monsters" },
];

const GalleryMenu = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-left">
        {categories.map((cat) => (
          <div className="gallery-item" key={cat.id}>
            <span className="gallery-id">({cat.id})</span>
            <span className="gallery-label">{cat.label}</span>
          </div>
        ))}
      </div>
      <div className="gallery-right">
        <img src={bigImg} alt="Gallery Big" />
      </div>
    </div>
  );
};

export default GalleryMenu;