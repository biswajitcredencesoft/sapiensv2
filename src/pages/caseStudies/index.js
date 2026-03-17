import React from "react";
import Head from "next/head";
import Seer1 from "../../assets/images/client_glassons.png";
// import Seer2 from "../../assets/images/client_animates.png";
import Seer3 from "../../assets/images/client_hallensteins.png";

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <Head>
        {/* Before */}
        {/* <title>Case Studies — Sapiens v2</title>
        <meta name="description" content="Case studies — examples of how Sapiens v2 helped retailers automate returns, forecasting, and stock optimization." />
        <link rel="canonical" href="https://sapiensv2.com/caseStudies" />
        <meta property="og:title" content="Case Studies — Sapiens v2" />
        <meta property="og:description" content="Case studies — examples of how Sapiens v2 helped retailers automate returns, forecasting, and stock optimization." />
        <meta property="og:image" content="https://sapiensv2.com/images/uploads/social-share.svg" />
        <meta name="twitter:card" content="summary_large_image" /> */}

        {/* After */}
          <title>AI Demand Forecasting & LS Central Case Studies | Sapiens v2</title>
          <meta 
            name="description" 
            content="Discover how Stock Seer demand planning software drives results for retail and hospitality brands. Real-world case studies in demand forecasting and inventory ROI." 
          />
          <link rel="canonical" href="https://sapiensv2.com/caseStudies" />
          <meta property="og:title" content="How Retail Brands Transformed Inventory with Stock Seer AI | Sapiens v2" />
          <meta property="og:description" content="Discover how Stock Seer demand planning software drives results for retail and hospitality brands." />
          <meta property="og:url" content="https://sapiensv2.com/caseStudies" />
          <meta property="og:image" content="https://sapiensv2.com/images/uploads/social-share.svg" />
          <meta property="og:type" content="website" />
          <meta name="keywords" content="Demand forecasting case studies, AI inventory management results, Stock Seer AI, retail demand planning, LS Central implementation, demand forecasting ROI, hospitality inventory management, fashion retail AI, demand planning software results, supply chain forecasting" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AI Demand Forecasting Case Studies | Sapiens v2" />
          <meta name="twitter:description" content="Real-world results from retail brands using Stock Seer AI demand planning software. ROI data included." />
          <meta name="twitter:image" content="https://sapiensv2.com/images/twitterimage.jpg" />
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sapiensv2.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Case Studies",
                  "item": "https://sapiensv2.com/caseStudies"
                }
              ]
            }`}
          </script>
      </Head>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center pb-6 bg-[#edeeff]">
          <img
            src={Seer1}
            alt="Glassons"
            className="w-[250px] h-[38px] sm:w-[200px] sm:h-[38px] md:w-[250px] md:h-[38px] max-w-md mt-20 -mb-4"
          />
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal mt-4 p-4 sm:ml-16 sm:mr-16 text-[#000000] "
          >
            Glassons are renowned in Australia and New Zealand for delivering
            youthful  women’s fashion at  great value, across 60 vibrant stores
            . Giving their customers exactly what they want, when they want,
            they pride themselves as a destination for trending, must have
            pieces, wardrobe staples and everything in between.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16  text-[#000000]"
          >
            Glassons epitomises “fast fashion”. Most styles sell out within days
            or weeks of hitting stores. New lines appear each day and customers
            know that, if they don’t buy a desired item today, they will likely
            miss out tomorrow. With 25% of sales transacted online however, and
            a proportion returned or exchanged in store, a typical week can see
            up to 100 already sold out items returned to each store.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16 text-[#000000]"
          >
            To avoid polluting the store with out of stock items, the store
            racks the returns in the stock room and advises head office of the
            items and quantities. Head office manually reviews returns across
            all stores, runs reports to identify stock and sales by store, and
            applies operational rules to determine where each store should send
            its returns. The process is time consuming and error prone,
            resulting in many thousands of items languishing on racks in stock
            rooms or transferred to suboptimal  locations.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16 text-[#000000]"
          >
            Glassons chose Sapiens v2 to automate and improve outcomes for this
            manual process. Each Sunday the  stores scan returns for the week.
            Using Sapiens v2’s API, the returns are uploaded to the Sapiens v2
            cloud and analysed by Stock Seer to determine the optimum selling
            stores, and propose transfers accordingly.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16 text-[#000000]"
          >
            The results are: dramatically reduced man hours at store and head
            office, items spending less time out of circulation, and optimal
            movements across stores that maximise sell through, saving
            approximately $1,900,000 in the last year.
          </p>
        </div>

        <div className="flex flex-col items-center  bg-[#303e58] text-white mb-[-80px] pb-24">
          <img
            src="/images/uploads/client_animates_white.svg"
            alt="Animates"
            className="w-[250px] h-[38px] sm:w-[250px] sm:h-[38px] md:w-[250px] md:h-[38px] max-w-md mt-20 -mb-4"
          />
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal mt-4 p-4 sm:ml-16 sm:mr-16"
          >
            With over 50 pet and vet stores throughout New Zealand, Animates are
            passionate about providing the best pet supplies, pet products, pet
            care, advice and services for pets across New Zealand.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16"
          >
            Operational complexities at Animates derive from ensuring both the
            right range of products, and appropriate store stock levels per
            product, to meet customer demand. Promotions are also a key part of
            their marketing strategy and, when combined with seasonal demand
            fluctuations, require merchandisers to spend entire days, weekly,
            maintaining re-order points and safety stock to support accurate
            weekly vendor re-orders (often by gut-feel).
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16"
          >
            Given more than 5,000 products across 50 stores, it is impossible
            for merchandisers to accurately forecast sales and infer optimum
            stock levels for every product-store combination. The result is
            under and over-stocked items, and a merchandise team constrained by
            excessive repetitive tasks, impacting financial performance and
            customer satisfaction.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16"
          >
            Animates chose Sapiens v2 to eliminate this complex manual process
            and optimize stock levels across their store network. We deployed
            Stock Seer to determine optimal re-order points and safety stock
            levels that robustly factor seasonal fluctuations and planned
            promotions. Initial trials have shown the potential to save
            $6,000,000+, principally from reductions in working capital (excess
            stock and labour).
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#edeeff]  mb-[-80px] pb-32">
          <img
            src={Seer3}
            alt="Animates"
            className="w-[250px] h-[88px] sm:w-[250px] sm:h-[38px] md:w-[250px] md:h-[88px] max-w-md mt-20 -mb-4"
          />
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal mt-4 p-4 sm:ml-16     sm:mr-52  text-[#000000]"
          >
            A 46-store-strong, Australia/New Zealand-based chain, Hallensteins
            provides quality clothing that's both stylish and affordable,
            catering to the modern man's evolving tastes.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16 text-[#000000]"
          >
            For Hallensteins, a compelling in store experience demands an
            optimum balance between stock quantity and space conservation,
            presenting visual appeal and choice without clutter. Their central
            warehouse is key, replenishing stores daily, and enabling the store
            to carry just the right stock to meet anticipated sales up to the
            next replenishment.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16 text-[#000000]"
          >
            However, determining the ideal stock levels, week on week, for some
            276,000 product-store combinations, is an impossible task for the
            human stock controller. A lack of resource, and the inability of the
            human mind to accurately forecast evolving sales, forces a reliance
            on crude averages that tend to over-allocate to mitigate risk of
            stock-outs. The result: cluttered stores and lost sales as the
            season progresses, with faster moving stores selling out while
            product languishes in the quieter store. Costly inter-store
            movements ensue.
          </p>
          <p
            style={{ fontFamily: "roboto" }}
            className="text-left text-lg leading-7 tracking-normal p-4 sm:ml-16 sm:mr-16 text-[#000000]"
          >
            Once again, we deployed Stock Seer to automate this manual process,
            generating an accurate, weekly sales forecast with seasonal
            fluctuations and planned promotions accounted for. The forecast was
            used, in conjunction with standard business rules, to determine more
            sensible target stock levels and safety stock buffers, with respect
            to the predicted demand. Thus far, we have saved $500,000 thanks to
            mitigations in out-of-stocks and overstocks via the A.I.-driven
            process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
