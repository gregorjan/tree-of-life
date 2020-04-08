import * as React from "react";
import { useApi } from "../../hooks";
import {
  ParentWrapper,
  ParentLine,
  ParentButton,
  TimelinePoint,
} from "./styled";

interface ParentProps {
  setId: (arg0: string) => void;
  addParent: (arg0: string) => void;
  parent: string;
  index: number;
}
const Parent: React.FC<ParentProps> = ({ addParent, setId, parent, index }) => {
  const { data } = useApi(parent, 1);
  const name = data?.root?.name;

  React.useEffect(() => {
    const grandParent = data?.root?.parent;
    if (grandParent) {
      addParent(grandParent);
    }
  }, [data]);

  return parent ? (
    <ParentButton index={index} onClick={() => setId(parent)}>
      <TimelinePoint />
      {name ? name : "parent"}
    </ParentButton>
  ) : null;
};

interface Props {
  setId: (arg0: string) => void;
  parent: string;
}

export const Parents: React.FC<Props> = ({ parent, setId }) => {
  const [parents, setParents] = React.useState([parent]);

  const addParent = (id: string) => {
    setParents((prevParents) => {
      if (!prevParents.includes(id)) {
        return [id, ...prevParents];
      }
      return prevParents;
    });
  };
  console.log(parents);
  return (
    <ParentWrapper>
      {parents
        .filter((parent) => parent)
        .map((parent, i) => (
          <Parent
            key={parent}
            setId={setId}
            parent={parent}
            index={i}
            addParent={addParent}
          />
        ))}
      <ParentLine />
    </ParentWrapper>
  );
};
