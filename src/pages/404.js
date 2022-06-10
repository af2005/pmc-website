import * as React from "react";
import notfound from "../img/icons/undraw/undraw_not_found_-60-pq.svg";
import { Link } from "gatsby";
import PMCButton from "../components/PMCButton";
// markup
export default function NotFoundPage() {
  return (
    <>
      <div className="container m-auto   text-center">
        <img className="w-80" src={notfound} alt="Not found" />

        <div className="py-20">
          <h2 className="pmc-h2 py-10">
            Wir können diese Seite momentan nicht finden.
          </h2>

          <Link to="/">
            <PMCButton className="btn btn-apple">Zur Startseite</PMCButton>
          </Link>
        </div>
      </div>
    </>
  );
}
