import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Route = ({ children }) => {
  const router = useRouter();
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") {
      router.push("/home");
    }
  }, []);
  return children;
};

export default Route;
