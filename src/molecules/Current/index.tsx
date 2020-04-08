import * as React from "react";

import { CurrentWrapper, Description } from "./styled";

interface Props {
  name: string;
  description: string;
}

export const Current: React.FC<Props> = (props) => {
  const { name, description } = props;

  return (
    <CurrentWrapper>
      <h1>{name}</h1>
    </CurrentWrapper>
  );
};
