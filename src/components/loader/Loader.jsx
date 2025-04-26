import { DotLoader } from "react-spinners";

export default function Loader() {
  return (
    <DotLoader
      color="gray"
      cssOverride={{
        margin: "30px auto",
        color: "#007bff",
      }}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
