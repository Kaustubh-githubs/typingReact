

import React, { useEffect } from "react";

function QuoteFetcher(props) {
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        props.handleQuoteFetched(data);
      });
  }, [props]);

  return <p>Loading quote...</p>;
}

export default QuoteFetcher;