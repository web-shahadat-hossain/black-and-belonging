import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Shear/Loading";
import Mixtape from "./Mixtape";

const Mixtapes = () => {
  const [Loadings, isLoading] = useState(true);
  const [mixtape, setMactape] = useState([]);
  const [mixtapeOB, setMactapeOB] = useState({});

  useEffect(() => {
    fetch("https://blackandbelonging.com/wp-json/wp/v2/stm-courses").then(
      (res) =>
        res.json().then((data) => {
          setMactape(data);
        })
    );
  }, []);
  useEffect(() => {
    fetch("https://blackandbelonging.com/wp-json/wp/v2/media/10551").then(
      (res) =>
        res.json().then((data) => {
          setMactapeOB(data);
          isLoading(false);
        })
    );
  }, []);

  return (
    <>
      {/* <!-- ===== Mix tapes Header ===== --> */}
      <section className="mixtapes-page">
        <div className="container">
          <div className="mixtapes-page-header">
            <div className="head">
              <h1>Mixtapes</h1>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Mix tapes ===== --> */}
      <section className="tape-section">
        <div className="container">
          <div className="tape">
            {Loadings ? (
              <Loading />
            ) : (
              <div className="row">
                {mixtape.map((data) => (
                  <Mixtape
                    mixtapeOB={mixtapeOB}
                    key={data.id}
                    Loadings={Loading}
                    data={data}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mixtapes;
