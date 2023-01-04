/* eslint-disable */

//import React from "react";
import cafeData from "../cafe";
import Lform from "./form_list";

function Container() {
  return (
    <>
      {cafeData.map((v) => {
        return (
          <Lform
            name={v.name}
            th={v.theme}
            a={v.area}
            gu={v.gu_si}
            d={v.dong}
            p={v.parking}
            off={v.off}
          />
        );
      })}
    </>
  );
}
export default Container;
