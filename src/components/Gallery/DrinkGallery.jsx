import "./DrinkGallery.css";

import mainImg from "../../assets/mak-drink-7.png";
import drink8 from "../../assets/mak-drink-8.png";
import drink9 from "../../assets/mak-drink-9.png";
import drink10 from "../../assets/mak-drink-10.png";
import drink11 from "../../assets/mak-drink-11.png";
import drink12 from "../../assets/mak-drink-12.png";

const drinksData = [
  { id: "01", title: "karamel drinks lemon", subtitle: "its a special drink for lemon girls that taste like lemon", img: drink8 },
  { id: "02", title: "karamel drinks lemon", subtitle: "its a special drink for lemon girls that taste like lemon", img: drink9 },
  { id: "03", title: "karamel drinks cheery", subtitle: "its a special drink for lemon girls that taste like lemon", img: drink10 },
  { id: "04", title: "lemon drinks test cheery", subtitle: "its a special drink for lemon girls that taste like lemon", img: drink11 },
  { id: "05", title: "lemon drinks test cheery", subtitle: "its a special drink for lemon girls that taste like lemon", img: drink12 },
];

const DrinkGallery = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row g-4">

        {/* Left Column: Main Image */}
        <div className="col-lg-5 col-md-12">
          <img
            src={mainImg}
            alt="drinks"
            className=" mb-2 drink-main-image"
          />
        </div>

        {/* Right Column: Drink List */}
        <div className="col-lg-7 col-md-12">
          {drinksData.map((drink) => (
            <div
              key={drink.id}
              className="d-flex align-items-center border-bottom"
              style={{ width: "100%" }}
            >
              {/* ID */}
              <div style={{ width: "50px", textAlign: "center" }}>
                <span className="danger">({drink.id})</span>
              </div>

{/* Title + Subtitle */}
<div style={{ flex: 1, textAlign: "center" }}>
  <div style={{ display: "inline-block", textAlign: "left" }}>
    <h5 className="mb-1">{drink.title}</h5>
    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
      {drink.subtitle}
    </p>
  </div>
</div>


              {/* Image */}
              <div style={{ width: "120px", textAlign: "center" }}>
                <img
                  src={drink.img}
                  alt={drink.title}
                  style={{ width: "120px", height: "100px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DrinkGallery;
