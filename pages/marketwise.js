import Link from "next/link";

function MarketWise() {
  return (
    <div className="flex flex-col h-full mx-10 my-5 font-bold items-left">
      <h1 className="font-bold text-blue-600 hover:text-blue-800 visited:text-purple-600 text-[25px]">
        <Link href="https://getMarketwise.io">
          <a target="_blank">MarketWise</a>
        </Link>
      </h1>

      <h3 className="my-5 font-semibold">
        MarketWise is a SaaS application for capital markets and our primary
        focus !
      </h3>

      <p className="my-5 font-semibold text-justify">
        {" "}
        MarketWise helps customers stay on top of all their information in the
        financial markets in one place On top of looking at stock, bond and
        other financial market data. Customers can create and access custom
        data. For example, the customer can request their counterpart to share
        valuation of a specific trade or inflation forecasts through the api or
        the excel addin. They can then instantly track this on the webapp{" "}
      </p>

      <p className="my-5 font-semibold">
        {" "}
        The MarketWise Excel Addin can be downloaded from the AppSource{" "}
        <Link href="https://appsource.microsoft.com/en-us/product/office/WA200003731?tab=Overview">
          <a
            className="font-bold text-blue-600 hover:text-blue-800 visited:text-purple-600"
            target="_blank"
          >
            here
          </a>
        </Link>
      </p>

      <p className="my-5"> Watch the video to find out more !</p>

      <video
        playsInline
        autoPlay
        controls
        width="60%"
        source
        src="/marketwise-video.mp4"
        type="video/mp4"
      />
    </div>
  );
}

export default MarketWise;
