import * as React from "react";
import { MemoryCard } from "../component/MemoryCard";

type GameProps = {};

export const Game = (prop: GameProps) => {
  const [hasShuffled, setHasShuffled] = React.useState(false);
  const [gameArea, setGameArea] = React.useState<MemoryCard[]>([
    { face: "X", isTurned: false, isLocked: false },
    { face: "X", isTurned: false, isLocked: false },
    { face: "Y", isTurned: false, isLocked: false },
    { face: "Y", isTurned: false, isLocked: false },
    { face: "Z", isTurned: false, isLocked: false },
    { face: "Z", isTurned: false, isLocked: false },
    { face: "A", isTurned: false, isLocked: false },
    { face: "A", isTurned: false, isLocked: false },
    { face: "B", isTurned: false, isLocked: false },
    { face: "B", isTurned: false, isLocked: false },
    { face: "C", isTurned: false, isLocked: false },
    { face: "C", isTurned: false, isLocked: false },
    { face: "D", isTurned: false, isLocked: false },
    { face: "D", isTurned: false, isLocked: false },
    { face: "E", isTurned: false, isLocked: false },
    { face: "E", isTurned: false, isLocked: false },
    { face: "F", isTurned: false, isLocked: false },
    { face: "F", isTurned: false, isLocked: false },
    { face: "G", isTurned: false, isLocked: false },
    { face: "G", isTurned: false, isLocked: false }
  ]);

  const [areaLocked, setAreaLocked] = React.useState(false);

  React.useEffect(() => {
    if (!hasShuffled) {
      setHasShuffled(bool => {
        setGameArea(area => shuffleGameArea(area));
        return true;
      });
    }
  });

  React.useEffect(() => {
    // get all turned

    const turned = gameArea.filter(item => item.isTurned);
    if (turned.length > 1) {
      setAreaLocked(true);
      setTimeout(() => {
        setAreaLocked(bool => {
          if (turned.length > 1) {
            if (turned.every(item => turned[0].face === item.face)) {
              // othewiase locvk
              const face = turned[0].face;
              setGameArea(area => {
                let tempArea = [...area];
                tempArea = tempArea.map(item => ({
                  ...item,
                  isTurned: false,
                  isLocked: item.face === face ? true : item.isLocked
                }));
                return tempArea;
              });
            } else {
              // reet if not match
              setGameArea(area => area.map(item => ({ ...item, isTurned: false })));
            }
          }
          return false;
        });
      }, 900);
    }
  }, [gameArea]);

  const shuffleGameArea = (a: MemoryCard[]) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const _handleCardClick = (index: number) => {
    if (!areaLocked) {
      setGameArea(area => {
        const tempArea = [...area];
        tempArea[index].isTurned = true;
        return tempArea;
      });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "lightgrey"
      }}
    >
      {gameArea.map((card, index) => (
        <MemoryCard
          key={index}
          {...card}
          handleClick={() => {
            _handleCardClick(index);
          }}
        ></MemoryCard>
      ))}
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexBasis: "33%"
        }}
      >
        <span
          onClick={() => {
            window.location.reload();
          }}
        >
          ➡
        </span>
      </div>
    </div>
  );
};
