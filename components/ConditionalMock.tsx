import React from "react";
import getConfigFlag from "../utils/getConfigFlag";

function ConditionalMock() {
  const shouldShowPage = getConfigFlag("shouldShowPage", "");
  const userName = getConfigFlag("userName", "");

  return (
    <div>
      <h1>Unpredictable Configurations</h1>
      {shouldShowPage ? <span>Page is shown by {userName}</span> : null}
    </div>
  );
}

export default ConditionalMock;
