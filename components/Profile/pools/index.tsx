'use client';
import React from "react";
import PoolVault from "./PoolVault";

const PoolsProfile = () => {
  return (
    <div className="flex justify-between mt-10">
        <PoolVault />
        <PoolVault />
        <PoolVault />
        <PoolVault />
  </div>
  );
};

export default PoolsProfile;
