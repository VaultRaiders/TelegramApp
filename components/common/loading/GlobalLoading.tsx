import { useLoadingStore } from "@/store/loading";
import React from "react";
import styled from "styled-components";
import Loader from "./ApiLoading";

const GlobalLoader = () => {
  const { loading }: any = useLoadingStore();
  return (
    loading && (
      <>
        <Loader />
        <BlurLayer />
      </>
    )
  );
};

const BlurLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 700px;
  z-index: 30;
  background-color: black;
  opacity: 0.7;
  overflow: hidden;
`;

export default GlobalLoader;
