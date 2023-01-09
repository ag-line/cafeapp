/* eslint-disable */

import React, { Component, useState } from "react";
import "./App.css";
import CafeInfo from "./data/cafe";
import Area from "./data/area";
import Category from "./C_component/Category";

const AREA = [
  { value: "", name: "Area" },
  { value: "서울", name: "서울" },
  { value: "경기", name: "경기" },
  { value: "인천", name: "인천" },
  { value: "광주", name: "광주" },
  { value: "대전", name: "대전" },
  { value: "강원도", name: "강원도" },
  { value: "전라도", name: "전라도" },
  { value: "충청도", name: "충청도" },
  { value: "경상도", name: "경상도" },
  { value: "제주도", name: "제주도" },
];

const THEME = [
  { value: "", name: "Concept" },
  { value: "디저트", name: "디저트" },
  { value: "무채색", name: "무채색" },
  { value: "포근함", name: "포근함" },
  { value: "힙", name: "힙" },
  { value: "주택개조", name: "주택개조" },
  { value: "대형", name: "대형" },
  { value: "외국", name: "외국" },
  { value: "제주", name: "제주" },
  { value: "한옥", name: "한옥" },
  { value: "갤러리", name: "갤러리" },
  { value: "이색", name: "이색" },
  { value: "드로잉", name: "드로잉" },
];

function movePage(dataurl) {
  location.href = dataurl;
}

function App() {
  const [selectArea, setArea] = useState("");
  const [selectTh, settheme] = useState("");
  const [selectsigu, setsigu] = useState("");

  const GUSI = Area.filter((area) => {
    if (selectArea == "" && selectTh == "") {
      return;
    } else if (area.top.includes(selectArea)) {
      return area;
    }
  }).map((area, index) => {
    return (
      <option key={area.value} value={area.value}>
        {area.name}
      </option>
    );
  });

  const items = CafeInfo.filter((data) => {
    if (selectArea == "" && selectTh == "" && selectsigu == "") return data;
    else if (
      data.area.includes(selectArea) &&
      data.theme.includes(selectTh) &&
      data.gu_si.includes(selectsigu)
    ) {
      return data;
    }
  }).map((data, index) => {
    return (
      <div className="card" key={index} onClick={() => movePage(data.link)}>
        <img src={data.image}></img>
        <h4 className="title">{data.name}</h4>
        <small className="theme"> ({data.theme})</small>
        <br />
        <h6 className="area">{data.area}</h6>
        <h6 className="gu_si">{data.gu_si}</h6>
        <small>
          <h6 className="dong">({data.dong})</h6>
        </small>
        <br />
        <small>
          parking: {data.parking} / off: {data.off}
        </small>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="selectBOx">
        <h1>Cafe</h1>
        <Category
          options={AREA}
          onChange={(e) => setArea(e.target.value)}
        ></Category>
        <select onChange={(e) => setsigu(e.target.value)}>
          <option key="" value="" disabled selected>
            Gu/Si
          </option>
          {GUSI}
        </select>
        <Category
          options={THEME}
          onChange={(e) => settheme(e.target.value)}
        ></Category>
      </div>

      <div className="card_list">{items}</div>
    </div>
  );
}

export default App;
