"use client";

import { useEffect, useRef } from "react";
import * as GIO from "giojs";
import data from "./sampleData";

const initCountry = "JP";

const GioComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    const controller = new GIO.Controller(ref.current, {
      control: {
        initCountry,
      },
    });

    controller.addData(data);

    controller.init();
  }, []);

  return <div style={{ width: '100%', height: '100vh' }} ref={ref} />;
}

export default GioComponent;