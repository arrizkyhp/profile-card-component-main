import HeaderImage from "assets/images/bg-pattern-card.svg"
import ProfilImage from "assets/images/image-victor.jpg";

const Card = () => {
    return (
      <div className="card">
        <div className="card__header">
          <img src={HeaderImage} alt="blue pattern" />
        </div>

        <div className="card__body">
          <img src={ProfilImage} alt="profile" />
          <div className="card__body__name">
            <h1>Victor Crest </h1>
            <p> 26</p>
          </div>
          <span>London</span>
        </div>

        <div className="card__footer">
          <div className="card__footer__stats">
            <div className="card__footer__stats__info">
              <h2>80K</h2>
              <span>Followers</span>
            </div>
            <div className="card__footer__stats__info">
              <h2>803K</h2>
              <span>Likes</span>
            </div>
            <div className="card__footer__stats__info">
              <h2>1.4K</h2>
              <span>Photos</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;