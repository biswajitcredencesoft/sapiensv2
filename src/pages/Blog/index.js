import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

import blog from "../../assets/images/blog.jpg";

const Blog = () => {
  const [content, setContent] = useState(false);

  const handleButtonClick = () => {
    // Change the content when the button is clicked
    setContent(true);
  };
  const handleButtonClickFalse = () => {
    setContent(false);
  };

  return (
    <div className="BlogContainer bg-[#edeeff]">
      {content == false ? (
        <div className="">
          <div className="BlogTopText pb-4">
            <h1
              className="text-[#000000]"
              style={{ fontFamily: "gothic-book, sans-serif" }}
            >
              Blog
            </h1>
            <p
              style={{ fontFamily: "gothic-book, sans-serif" }}
              className="text-lg lg:text-2xl font-light py-4 text-[#000000]"
            >
              All the latest on what’s happening in retail plus some useful tips
              and trends to help streamline your business.
            </p>
          </div>
          <div className="BlogBottomText">
            <p
              style={{ fontFamily: "gothic-book, sans-serif" }}
              className="text-lg lg:text-2xl font-semibold py-4  text-[#000000]"
            >
              How can artificial intelligence help retailers forecast demand?
            </p>
            <p className="py-2 text-[#000000]" style={{ fontFamily: "roboto" }}>
              Are retailers on the verge of extinction? Confronted by supply
              chain issues, labour shortages, fickle demand, inflationary
              pressures and ri…{" "}
              <span
                className="underline font-bold text-[#000000]"
                style={{ cursor: "pointer", fontFamily: "roboto" }}
                onClick={handleButtonClick}
              >
                Read More
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="lg:px-20 md:px-20 sm:px-2 ">
          <p
            style={{ fontFamily: "gothic-book" }}
            className="lg:text-5xl md:text-4xl text-xl font-bold text-center lg:px-40 md:px-20 sm:px-2 text-[#000000]"
          >
            How can artificial intelligence help retailers forecast demand?
          </p>
          <div>
            <p
              style={{ fontFamily: "gothic-book" }}
              className="lg:text-3xl text-lg font-bold  text-left pt-8 text-[#000000]"
            >
              Are retailers on the verge of extinction?
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left py-6 text-[#000000]"
            >
              Confronted by supply chain issues, labour shortages, fickle
              demand, inflationary pressures and rising interest rates,
              retailers are scrambling to cope with the immensity of the
              challenges they face.
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left text-[#000000]"
            >
              Consider a retailer with 20,000 SKUs and 50 stores (potentially 1
              million store / SKU combinations) and the latter’s implications
              for the inventory planner. The sheer volume of data is mind
              boggling. Every stage of the stock life cycle, from building the
              range to end of line sell through, calls for a level of detail in
              execution that is constrained by available resource and the
              capacity of the human mind to process the myriad of data points
              simultaneously. Invariably, the planner compromises. They may
              apply approximations such as calculating at aggregate and
              extrapolating across individual SKUs, rely on intuition or focus
              on the top performing lines at the expense of the others. The
              outcome is stock imbalances leading to costly inter-store stock
              movements, markdowns and lost sales.
            </p>
          </div>
          <div>
            <p
              style={{ fontFamily: "gothic-book" }}
              className="lg:text-3xl text-xl font-bold text-left py-6 text-[#000000]"
            >
              AI for retailers
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left pb-6 text-[#000000]"
            >
              Enter AI with its potential to alleviate all the above. When we
              speak of AI, we mean deep learning. But what is deep learning? How
              does it work? And how can you apply it in your business?
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl md:text-lg text-sm text-[#000000]"
            >
              Deep learning replicates the human mind’s ability to perceive
              underlying, often subtle patterns in data. Consider predicting the
              age of a person standing in front of you. Your eyes absorb
              millions of bits of information, and your brain easily maps them
              to a notion of age based on a lifetime of experience or
              “training”. Now imagine if you could just as easily predict sales
              for all your SKUs across all stores by simply glancing at millions
              of rows sales history. This is the mind enhancing power of deep
              learning. Like the brain, deep learning algorithms learn from
              historical examples, but they aren’t overwhelmed by large volumes
              of numerical data. In fact, they require it.
            </p>
          </div>
          <div className="py-4">
            <img src={blog} alt="Logo" className="image rounded-2xl" />
          </div>
          <div>
            <p
              style={{ fontFamily: "gothic-book" }}
              className="lg:text-3xl text-xl font-bold text-left py-6 text-[#000000]"
            >
              Demand forecasting
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left text-[#000000]"
            >
              Knowing what will sell, where and when underpins all stock
              optimization problems in retail. Deep learning is the panacea for
              demand forecasting, and by extension is the ultimate approach to
              accurate, autonomous stock optimization.
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left text-[#000000]"
            >
              Retailers invariably have rich transactional history and master
              data which should be capitalized using AI. Companies like Sapiens V2
              offer artificial intelligence as a cloud service, allowing
              retailers to: -
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left pt-4  text-[#000000] "
            >
              1. Circumvent the cost and complexity of establishing their own AI
              teams and infrastructure.
              <br />
              2. Benefit from the considerable increases in efficiency and
              outcomes that AI brings.
              <br />
              3. Free up teams to focus on core business.
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left py-4  text-[#000000]"
            >
              An AI implementation entails identifying a problem typically a
              labour intensive or inaccurate process. Pertinent data is
              replicated to a secure cloud using APIs, the algorithm is trained,
              and predictions are made which are autonomously applied to address
              the problem. The process can then be repeated.
            </p>

            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left pb-4  text-[#000000]"
            >
              An AI enabled business will not merely survive but thrive and will
              be prepared to face the challenges the future will inevitably
              pose.
            </p>
            {/* <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left pb-4 text-[#000000]"
            >
              An AI enabled business will not merely survive but thrive and will
              be prepared to face the challenges the future will inevitably
              pose.
            </p>
 */}

            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left  text-[#000000]"
            >
              <Link to="/caseStudies" className="mr-2">
                Contact
              </Link>
              the team at Sapiens V2 to learn more about how an AI retail solution
              could work for your organisation.
            </p>
            <p
              style={{ fontFamily: "roboto" }}
              className="lg:text-xl text-sm text-left "
            >
              <span
                className="underline font-bold text-[#000000]"
                style={{ cursor: "pointer", fontFamily: "roboto" }}
                onClick={handleButtonClickFalse}
              >
                Less
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
