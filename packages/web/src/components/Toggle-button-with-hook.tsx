import React from "react";
import { Button } from "@winuall/components";
import { useState } from "react";

export const ToggleButtonWithHook = () => {
  const [isToggled, setToggled] = useState(true);

  return (
    <Button
      primary={true}
      backgroundColor={isToggled ? "darkblue" : "green"}
      label={
        isToggled
          ? "Have you changed something in the components package?"
          : "run 'yarn build-lib' and see your changes in this App"
      }
      onClick={() => setToggled(!isToggled)}
    ></Button>
  );
};
