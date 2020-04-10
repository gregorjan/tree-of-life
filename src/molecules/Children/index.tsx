import * as React from "react";
import { Wrapper, ChildrenButton } from "./styled";

interface Child {
  _id: string;
  name: string;
}

interface Props {
  children: Child[];
  setId: (arg0: string) => void;
}

export const Children: React.FC<Props> = ({ children, setId }) => {
  return children ? (
    <Wrapper>
      {children.map((child: any) => (
        <li key={child._id}>
          <ChildrenButton onClick={() => setId(child._id)}>
            {child.name}
          </ChildrenButton>
        </li>
      ))}
    </Wrapper>
  ) : null;
};
