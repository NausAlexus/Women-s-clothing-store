import "./Info.css";
import React, { useState } from "react";
import { LuBus } from "react-icons/lu";
import { FaInbox } from "react-icons/fa";
import { MdOutlineCompost } from "react-icons/md";
import { TiLeaf } from "react-icons/ti";

const Info = () => {
  const [activeToggle, setActiveToggle] = useState(null);
  const handleToggle = (toggle) => {
    setActiveToggle(activeToggle === toggle ? null : toggle);
  };

  return (
    <>
      <div className="info">
        <div
          className={`info-details ${activeToggle === "details" ? "open" : ""}`}
        >
          <input
            id="details-toggle"
            name="toggle-group"
            className="toggle"
            onClick={() => handleToggle("details")}
          />
          <label htmlFor="details-toggle" className="toggle-label">
            <strong>Details</strong>
            <img
              src="https://img.icons8.com/?size=100&id=41193&format=png&color=737373"
              alt="arrow"
            />
          </label>
          <div
            className={`toggle-content ${
              activeToggle === "details" ? "open" : ""
            }`}
          >
            <p>100 % Polyester</p>
            Wrap up against the elements in this contemporary cardigan. A chic
            layer made from vitamin-infused fabric to increase your wellbeing.
            <ul>
              <li>
                Boxy cardigan with dropped shoulder and front button placket
              </li>
              <li>Fluffy look and warm feeling</li>
              <li>The first layers are infused with R-Vital Multivitamin</li>
              <li>Dropped shoulders and fully fashioned rib elements</li>
            </ul>
            OEKO-TEX® STANDARD 100, 22.0.22419 Hohenstein HTTI
            <p>
              <strong>Item Nr.: 10221469 (7613109767533)</strong>
            </p>
          </div>
        </div>
        <div
          className={`info-delivery ${
            activeToggle === "delivery" ? "open" : ""
          }`}
        >
          <input
            id="delivery-toggle"
            name="toggle-group"
            className="toggle"
            onClick={() => handleToggle("delivery")}
          />
          <label htmlFor="delivery-toggle" className="toggle-label">
            <strong>Delivery</strong>
            <img
              src="https://img.icons8.com/?size=100&id=41193&format=png&color=737373"
              alt="arrow"
            />
          </label>
          <div
            className={`toggle-content ${
              activeToggle === "delivery" ? "open" : ""
            }`}
          >
            <div className="delivery-content">
              <LuBus />
              <div className="delivery-container">
                <p>Delivery to address</p>
                <ul>
                  <li>
                    <div className="delivery-info-price">
                      <div>
                        Standard delivery in 4-6 working days
                        <br />
                        <span className="text-color-brandyRose">
                          Free standard delivery for MyTriumph members
                        </span>
                      </div>

                      <div className="delivery-price">£ 4.99</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="delivery-content">
              <FaInbox />
              <div className="delivery-container">
                <p>EVRi PARCELSHOP</p>
                <ul>
                  <li>
                    <div className="delivery-info-price">
                      <div>
                        Standard delivery in 4-6 working days
                        <br />
                        <span className="text-color-brandyRose">
                          Free standard delivery for MyTriumph members
                        </span>
                      </div>

                      <div className="delivery-price">£ 4.99</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`info-returns ${activeToggle === "returns" ? "open" : ""}`}
        >
          <input
            id="returns-toggle"
            name="toggle-group"
            className="toggle"
            onClick={() => handleToggle("returns")}
          />
          <label htmlFor="returns-toggle" className="toggle-label">
            <strong>Returns</strong>
            <img
              src="https://img.icons8.com/?size=100&id=41193&format=png&color=737373"
              alt="arrow"
            />
          </label>
          <div
            className={`toggle-content ${
              activeToggle === "returns" ? "open" : ""
            }`}
          >
            <div className="returns-container">
              <MdOutlineCompost className="icons-returns" />

              <p>
                <strong>RETURNS</strong>
              </p>
              <ul>
                <li>
                  Returns are free of charge. You have 30 days from the delivery
                  date to return your online purchase.
                </li>
                <li>
                  For every online order on Triumph.com that does not generate a
                  return, we help plant trees in{" "}
                  <a href="https://uk.triumph.com/together-we-grow">
                    Our Forest
                  </a>
                </li>
                <li>
                  We reserve the right to deduct any discounts from the refund
                  value if the discount offer was subject to minimum purchase
                  quantities or values that are not warranted after the return.
                </li>
              </ul>
            </div>

            <div className="returns-container">
              <TiLeaf className="icons-returns" />
              <p>
                <strong>Sustainbale return process</strong>
              </p>
              <ul>
                <li>
                  <b>Our returns process is now paperless</b>
                  <br />
                  Your package will no longer include a return label, a printed
                  invoice or a return form to fill out.
                </li>
                <li>
                  Please <a href="https://uk.triumph.com/returns">register</a>{" "}
                  your return online.
                </li>
                <li>
                  For further information about our returns process, please
                  visit our{" "}
                  <a href="https://uk.triumph.com/on/demandware.store/Sites-GB-Site/en_GB/Page-Show?cid=Contact_Rescission">
                    return policy page
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`info-care ${activeToggle === "care" ? "open" : ""}`}>
          <input
            type="checkbox"
            id="care-toggle"
            name="toggle-group"
            className="toggle"
            onClick={() => handleToggle("care")}
          />
          <label htmlFor="care-toggle" className="toggle-label">
            <strong>Care</strong>
            <img
              src="https://img.icons8.com/?size=100&id=41193&format=png&color=737373"
              alt="arrow"
            />
          </label>
          <div
            className={`toggle-content ${
              activeToggle === "care" ? "open" : ""
            }`}
          >
            <div className="care-container">
              <ul>
                <li>Delicate wash cycle up to 30°C</li>
                <li>Do not bleach</li>
                <li>Do not tumble dry</li>
                <li>Iron steam or dry with low heat</li>
                <li>Do not dryclean</li>
                <li>Keep away from fire</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
