import React from "react";
import ReactMarkdown from "react-markdown";
import "../styles/markdown.css";

const markdownContent = `
# Accommodation for External Anokha Participants

* Accommodation for participants is available in the hostels, but there is limited availability.
* Accommodation with minium facilities will be provided on a first-come, first-serve basis.
* The accommodation charge is Rs. 200 per day.
* Payment for accommodation must be made in cash at the registration counter.
* Participants should ensure they receive a receipt for their payment.
* The receipt should be presented at the designated hostels to secure accommodation.
* Students from other Amrita campuses who are already availing hostel facilities in those campuses are exempt from paying the accommodation charge. The exemption will be verified through their college ID card.
* Mess facility will not be available in the hostels. Participants can pay for their meals at the canteen or the food stalls available on campus.
`;

const Accommodation = () => {
  return (
    <div style={{ padding: "0 20%"}}>
      <ReactMarkdown className="mb-16 text-left my-markdown min-h-100vh text-babyPowder">
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default Accommodation;
