import "./Banner.css";
import drink3 from "../../assets/mak-drink-3.png";
import drink4 from "../../assets/mak-drink-4.png";
import drink5 from "../../assets/mak-drink-5.png";

export default function Banner() {
  return (
    <div className="container-fluid home-wrapper">

      {/* IMAGE GALLERY */}
      <div className="row gallery justify-content-center">

        <div className="col-12 col-md-2 drink drink3">
          <img src={drink3} className="drink-img" alt="drink 3" />
        </div>

        <div className="col-12 col-md-2 drink drink4">
          <img src={drink4} className="drink-img" alt="drink 4" />
        </div>

        <div className="col-12 col-md-3 drink drink5">
          <img src={drink5} className="drink-img" alt="drink 5" />
        </div>

      </div>

      {/* TITLE + QUOTE ROW */}
      <div className="row align-items-center title-quote-row">

        <div className="col-12 col-md-6 text-md-start text-center">
          <h3 className="section-number">(01)</h3>
          <h1 className="drink-title-1">DRINKS</h1>
        </div>

        <div className="col-12 col-md-6 text-md-end text-center px-5">
          <p className="quote-text">
            We make all drinks that make you feel <br /> paradise and feel like heaven.
          </p>
        </div>

      </div>

    </div>
  );
}
