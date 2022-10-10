import React from "react";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="main-layouts">
      <>{children}</>
    </div>
  );
};

export default MainLayout;
