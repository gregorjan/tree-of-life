import * as React from "react";
import { useApi } from "../../hooks";

import { Parents, Current, Children } from "../../molecules";

import { UnitWrapper } from "./styled";

interface Parent {
  name: string;
  id: string;
}

export const Unit: React.FC = () => {
  const { data, error, setId } = useApi();
  if (!data && !error) return <div>loading</div>;
  if (error) return <div>error</div>;
  const {
    root: { children, parent, ...rest },
  } = data;

  return (
    <UnitWrapper>
      <Parents key={parent} parent={parent} setId={setId} />
      <Current {...rest} />
      <Children children={children} setId={setId} />
    </UnitWrapper>
  );
};
