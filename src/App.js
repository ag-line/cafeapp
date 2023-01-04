/* eslint-disable */

import React, { Component, useState } from "react";
import "./App.css";
import CafeInfo from "./cafe";
import Popup from "./C_component/pop";

const AREA = [
  { value: "", name: "전국" },
  { value: "서울", name: "서울" },
  { value: "경기", name: "경기" },
  { value: "인천", name: "인천" },
  { value: "광주", name: "광주" },
  { value: "강원", name: "강원" },
  { value: "경북", name: "경북" },
  { value: "경남", name: "경남" },
  { value: "대전", name: "대전" },
  { value: "전북", name: "전북" },
  { value: "전남", name: "전남" },
  { value: "충북", name: "충북" },
  { value: "충남", name: "충남" },
  { value: "제주", name: "제주" },
];

const THEME = [
  { value: "", name: "테마" },
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

const AreaSelect = (props) => {
  return (
    <select onChange={props.onChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

const ThemeSelect = (props) => {
  return (
    <select onChange={props.onChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

function movePage(dataurl) {
  location.href = dataurl;
}

function App() {
  const [selectArea, setArea] = useState("");
  const [selectTh, settheme] = useState("");
  const [selectsigu, setsigu] = useState("");

  const GUSI = CafeInfo.filter((data) => {
    if (selectArea == "" && selectTh == "") {
      return data;
    } else if (data.area.includes(selectArea)) return data;
  })
    .map((data, index) => {
      const gusiSet = [];
      if (!gusiSet.includes(data.gu_si) && data.area.includes(selectArea)) {
        gusiSet.push(data.gu_si);
      }
      return gusiSet;
    })
    .map((gusiSet, index) => {
      return (
        <option key={gusiSet} value={gusiSet}>
          {gusiSet}
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
        <div className="img">
          <img src={data.image}></img>
        </div>
        <b>{data.name}</b>
        <small> ({data.theme})</small>
        <br />
        <h5 className="area">{data.area}</h5>
        <h5 className="gu_si">{data.gu_si}</h5>
        <small>
          <h5 className="dong">({data.dong})</h5>
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
      <div className="App-header">
        <h2>Cafe</h2>
      </div>
      <div className="selectBOx">
        <AreaSelect
          options={AREA}
          onChange={(e) => setArea(e.target.value)}
        ></AreaSelect>

        <select onChange={(e) => setsigu(e.target.value)}>
          <option key="" value="구/시">
            구/시
          </option>
          {GUSI}
        </select>

        <ThemeSelect
          options={THEME}
          onChange={(e) => settheme(e.target.value)}
        ></ThemeSelect>
        <Popup></Popup>
      </div>
      <div className="card_list">{items}</div>
    </div>
  );
}

export default App;
