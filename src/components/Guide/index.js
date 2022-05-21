import React from "react";
import { Link } from "react-router-dom";
import { GuideMain } from "./GuideStyles";

const Guide = () => {
    return (
        <GuideMain>
         <Link className="btn-link" to={`/trending`}>
            Trending
         </Link>
         <Link className="btn-link" to={`/top`}>
            Populares
         </Link>
         <Link className="btn-link" to={`/horror`}>
            Terror
         </Link>
         <Link className="btn-link" to={`/documentary`}>
            Documentario
         </Link>
         <Link className="btn-link" to={`/romance`}>
            Romance
         </Link>
         <Link className="btn-link" to={`/comedy`}>
            Comédia
         </Link>
         <Link className="btn-link" to={`/action`}>
            Ação
         </Link>
        </GuideMain>
    )
}

export default Guide;