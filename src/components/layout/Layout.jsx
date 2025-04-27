import { Suspense } from "react";
import { AppBar } from "../appBar/AppBar";
import Loader from "../loader/Loader";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
