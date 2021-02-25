// Globals
import React from "react";

function Error({myData: {myData}}) {

  const {code, message} = myData
  console.log('myData',message)
  return (
    <div className="aura-page-content">
      {message}
    </div>
  );
}

export { Error };
