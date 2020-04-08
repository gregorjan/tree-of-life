import * as React from "react";
import useSWR from "swr";

const fetchData = async (Id: string, depth: number) => {
  const response = await fetch(
    `https://tree.phylogenyexplorerproject.com/clades/tree/${Id}/depth/${depth}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    return response.json();
  } else {
    throw response;
  }
};

export const useApi = (id?: string, depth?: number) => {
  const [Id, setId] = React.useState(id || "55ae8ce9343108fa191058d2");
  const { data, error } = useSWR([Id, depth], fetchData);

  return { data, error, setId };
};
