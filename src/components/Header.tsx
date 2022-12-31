import React from "react";

export interface Props {
  title: string;
  color?: string;
}

const Header = (props: Props) => {
  return (
    <>
      <h1 style={{ color: props.color ? props.color : "blue" }}>
        {props.title}
      </h1>
      <h1>Free react + typescript setup</h1>
    </>
  );
};

export default Header;
