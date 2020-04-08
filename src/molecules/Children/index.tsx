import * as React from "react";

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
    <ul>
      {children.map((child: any) => (
        <li key={child._id}>
          <button onClick={() => setId(child._id)}>{child.name}</button>
        </li>
      ))}
    </ul>
  ) : null;
};
