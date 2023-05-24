import { useEffect, useRef, useState } from "react";

interface MutableRefObject<T> {
  current: T;
}

interface RefObject<T> {
  readonly current: T | null;
}

// 1️⃣ function useRef<T>(initialValue: T): MutableRefObject<T>;

export default function Type1() {
  const idRef = useRef<string>("");

  idRef.current = "test";

  return <div>test</div>;
}

// 2️⃣ function useRef<T>(initialValue: T | null): RefObject<T>;

function Type2() {
  const idRef = useRef<string>(null);

  // idRef.current = "test";
  return <div>type 2</div>;
}

function TypeDom2() {
  const domRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (domRef.current) domRef.current.focus();
  }, []);

  return <input ref={domRef} />;
}

// 3️⃣ function useRef<T = undefined>(): MutableRefObject<T | undefined>;

function Type3() {
  const idRef = useRef<string>();

  idRef.current = undefined;
  idRef.current = "string";
  return <div>test</div>;
}
