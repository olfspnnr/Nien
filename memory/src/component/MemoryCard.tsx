import * as React from "react";

export type MemoryCard = {
  face: string;
  isTurned: boolean;
  isLocked: boolean;
};

export const MemoryCard = (props: MemoryCard & { handleClick: () => void }) => {
  return (
    <div
      style={{
        flex: 1,
        flexBasis: "33%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={props.handleClick}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
          maxWidth: "50px",
          height: "50px",
          border: "1px solid whitesmoke",
          backgroundColor: props.isLocked ? "yellow" : props.isTurned ? "limegreen" : "white"
        }}
      >
        {props.isTurned || props.isLocked ? props.face : "O"}
      </div>
    </div>
  );
};
