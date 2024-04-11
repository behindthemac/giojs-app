"use client";

import { useEffect, useRef } from "react";
import * as GIO from "giojs";

const initCountry = "JP";

const GioComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    const controller = new GIO.Controller(ref.current, {
      control: {
        initCountry,
      },
    });

    controller.init();
  }, []);

  return <div style={{ width: 1440, height: 800 }} ref={ref} />;
}

export default GioComponent;