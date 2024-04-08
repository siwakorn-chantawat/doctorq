"use client";

import React, { useEffect } from "react";

const LineAddButton = () => {
  return (
    <>
      <div
        className="line-it-button"
        data-lang="en"
        data-type="friend"
        data-env="REAL"
        data-lineId="@lineteamjp"
      ></div>
      <script
        src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js"
        async={true}
        defer={true}
      ></script>
    </>
  );
};

export default LineAddButton;
