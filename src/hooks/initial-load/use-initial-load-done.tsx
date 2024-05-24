"use client";
import { useContext } from "react";
import { InitialLoadContext } from "./initial-load-provider";

export default function useInitialLoadDone() {
  const done = useContext(InitialLoadContext);

  return done;
}
