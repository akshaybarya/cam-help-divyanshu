import React from "react";
import AllPagesPDFViewer from "../../components/pdf/all-pages";

import samplePDF from "../../CH3.pdf";

export default function AllPages(props) {
  return (
    <div className="all-page-container">
      <AllPagesPDFViewer pdf={samplePDF} />
    </div>
  );
}
