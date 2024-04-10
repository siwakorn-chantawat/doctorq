import React from "react";

const LineButtonComponent = () => {
  return (
    <div>
      <div>
        <iframe
          data-lang="th"
          data-type="friend"
          data-env="REAL"
          data-count="true"
          data-home="true"
          data-lineid="@doctorqclinic"
          data-line-it-id="6"
          className="line-it-button"
          src="https://social-plugins.line.me/widget/friend?lineId=%40doctorqclinic&amp;count=true&amp;home=true&amp;lang=th&amp;type=friend&amp;id=6&amp;origin=https%3A%2F%2Fdevelopers.line.biz%2Fen%2Fdocs%2Fline-social-plugins%2Finstall-guide%2Fusing-add-friend-buttons%2F%23create-button&amp;title=Using%20Add%20friend%20buttons%20%7C%20LINE%20Developers&amp;env=REAL"
          title="คุณสามารถเพิ่ม Doctor Q Clinic เป็นเพื่อนได้"
        ></iframe>
      </div>
      <script
        async
        defer
        src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js"
      ></script>
    </div>
  );
};

export default LineButtonComponent;
