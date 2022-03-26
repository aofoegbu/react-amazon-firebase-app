import React, { useContext } from "react";
import "./App.css";
import Home from "../Components/Home/Home";
import Checkout from "../Components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./../Components/Header/Header";
import Login from "./../Components/Login/Login";

import { StateContext, StateProvider } from "./../Context/StateProvider";

function App() {
  const state = useContext(StateContext);

  return (
    <StateProvider value={state}>
      <Router>
        <div className="app">
          {/* <Route path="/header" element={<Header />} /> */}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  {/* carousel */}
                  <Home />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;

// currency converter
// .react-router-dom
// npm i firebase
// material ui
// material ui icon
// ]
// npm i @stripe/ stripe-js
// npm i moment

// cloud function
// npm i express
// npm i cors
// npm i stripe
// firebase blaze

// BEM

// amazonlogo-  "https://kfinancial.com/wp-content/uploads/2019/02/amazon-logo-vector-png-vector-png-free-amazon-logos-705.jpg"

// background img - "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
// laptop- "https://m.media-amazon.com/images/I/718V0aqaE1L._AC_SX679_.jpg"
// macbook- "https://m.media-amazon.com/images/I/51KhexN7YkL._AC_SY450_.jpg"
// iphone - "https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P5ZZH8D/?_encoding=UTF8&pd_rd_w=G4BTU&pf_rd_p=a424a707-7b70-4cc8-8e86-14651aa9290f&pf_rd_r=1QSF8QPPNT8V93Q25F21&pd_rd_r=c578433f-c316-4fdc-b581-154a3ff37e33&pd_rd_wg=hzbPx&ref_=pd_gw_exports_top_sellers_unrec"
// tv-"https://images-na.ssl-images-amazon.com/images/I/81skFI+vYiS._AC_UL160_SR160,160_.jpg"
// shirt - "https://www.amazon.com/Twosday-2022-Shirt-Teacher-2-22-2022/dp/B09QK6WVKG/?_encoding=UTF8&pd_rd_w=rQMwl&pf_rd_p=dd0720ad-821b-4f77-a747-366caa64eda9&pf_rd_r=1QSF8QPPNT8V93Q25F21&pd_rd_r=c578433f-c316-4fdc-b581-154a3ff37e33&pd_rd_wg=hzbPx&ref_=pd_gw_exports_top_sellers_unrec"
// watch - 'https://www.amazon.com/Apple-Watch-GPS-44mm-Aluminum/dp/B08KZYMNJC/?_encoding=UTF8&pd_rd_w=G4BTU&pf_rd_p=a424a707-7b70-4cc8-8e86-14651aa9290f&pf_rd_r=1QSF8QPPNT8V93Q25F21&pd_rd_r=c578433f-c316-4fdc-b581-154a3ff37e33&pd_rd_wg=hzbPx&ref_=pd_gw_exports_top_sellers_unrec'
// sneakers - 'https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A06791603GK5D98WK2QR5&url=%2FTSIODFO-Sneakers-Running-Breathable-Athletic%2Fdp%2FB08KPW4WX5%2Fref%3Dsr_1_4_sspa%3Fkeywords%3Dmen%2Bsneakers%26qid%3D1647506547%26sr%3D8-4-spons%26psc%3D1&qualifier=1647506547&id=1180352526530457&widgetName=sp_atf'
// necklace - 'https://www.amazon.com/Sterling-Silver-Diamond-Pendant-Necklace/dp/B00COY0ALO/ref=sr_1_16?crid=2UCV6THTYM5O3&keywords=necklace&qid=1647506850&sprefix=necklace%2Caps%2C504&sr=8-16'
// cap-'https://www.amazon.com/Gaiam-Running-Hat-Women-Men/dp/B07SH3LFM2/ref=sr_1_22?keywords=cap&qid=1647507025&sr=8-22'
// headset - 'https://www.amazon.com/New-Apple-AirPods-Max-Space/dp/B08PZHYWJS/ref=pd_rhf_se_s_gcx-rhf_2/133-4720678-1542033?pd_rd_w=MAGdy&pf_rd_p=2ae4ccb1-7034-4114-8654-5ba995870d70&pf_rd_r=D4D3W3S6GNA9EC5JH6PV&pd_rd_r=2a2a0e4e-9284-4523-97c2-31d89bbf5604&pd_rd_wg=43V37&pd_rd_i=B08PZHYWJS&psc=1'
// bicycle - 'https://www.amazon.com/Eurobike-Mountain-Inches-Suspension-Folding/dp/B07BXD5HL1/ref=sr_1_10?crid=2GC00ZK0ICE3N&keywords=bike&qid=1647507121&sprefix=bike%2Caps%2C927&sr=8-10'
