import React from "react";
import Layout from "../../components/layout/layout";
import DigitalClock from "../../widgets/Clocks/DigitalClock/DigitalClock";
import SimpleClock from "../../widgets/Clocks/SimpleClock";

function WidgetsClocks() {
  return (
    <Layout>
      {/* <h1>Clock Widgets Page</h1> */}
      {/* <SimpleClock /> */}
      <DigitalClock />
    </Layout>
  );
}

export default WidgetsClocks;
