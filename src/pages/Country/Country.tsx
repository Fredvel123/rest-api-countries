import { useLocation } from "react-router-dom";

export default function Country() {
  const location = useLocation();
  return <div>coutry {location.pathname}</div>;
}
