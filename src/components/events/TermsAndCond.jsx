import React from "react";
import ReactMarkdown from "react-markdown";
import "../styles/markdown.css";

const markdownContent = `
# Terms and Conditions

* Please carry your College ID Card for entry
* Attendees are requested to reach the venue 90 minutes before the show, due to security reasons. It will also help us to serve you better.
* Attendees are requested to park their vehicles in the parking area provided by the university.
* The organisers are not responsible for the personal belongings of the attendees or any damage occurring during the time of the event.
* Arms and ammunition, alcohol, cigarettes/e-cigarettes, or any other drugs/banned items are strictly prohibited inside the campus premise. Anyone found carrying or using the same will be liable for legal actions.
* People found under the influence of any kind of prohibited substances like alcohol and drugs will not be given entry to the show. Entry Pass will be cancelled without a refund.
* Entry Pass, once booked, cannot be exchanged or refunded.
* Unlawful resale (or attempted unlawful resale) of an Entry Pass would lead to seizure or cancellation of that Entry Pass without refund or other compensation.
* Eatables, bottled water, or beverages are not allowed from outside. Food and beverages will be available inside the campus on a payment basis.
* Attendees are requested to avoid wearing boxers and shorts
* Free drinking water will be available near the venue.
* Late entry to the venue after the show starts (30 minutes or more) organisers have the right to cancel the Entry Pass.
* Maintain the campus premise clean
* Use the dustbins to put the wastes
* If the show gets cancelled due to unforeseen circumstances beyond the control of the organisers, no refund of the Entry pass fee will be provided.
`;

const TermsAndCond = () => {
  return (
    <div style={{ padding: "0 20%" }}>
      <ReactMarkdown className="mb-16 text-left my-markdown min-h-100vh text-babyPowder">
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default TermsAndCond;
