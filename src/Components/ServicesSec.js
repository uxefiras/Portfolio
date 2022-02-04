import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";

function ServicesSec() {
  return (
    // Section Holder
    <div className="services-section">
      {/* Section holder 2 */}
      <div className="services">
        {/* Section holder 3 */}
        <div className="tittle">
          <h3>Services Tittle</h3>
        </div>
        {/* Section holder 4 */}
        <div className="sevices-itself">
          {/* Section holder 5 */}
          <div className="itmes-container">
            {/* Item holder 1 */}
            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faMoneyCheck} />
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore aliquam asperiores voluptate.
                </p>
              </div>
            </div>
            {/* Item holder 2 */}
            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faMoneyCheck} />
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore aliquam asperiores voluptate.
                </p>
              </div>
            </div>
            {/* Item holder 3 */}
            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faMoneyCheck} />
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore aliquam asperiores voluptate.
                </p>
              </div>
            </div>
            {/* Item holder 4 */}
            <div className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={faMoneyCheck} />
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore aliquam asperiores voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1643924023026-c745844a98ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="Girl"
        />
      </div>
    </div>
  );
}

export default ServicesSec;
