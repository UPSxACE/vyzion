import { twMerge } from "tailwind-merge";
import "./style.css";

export default function Spinner({ className }: { className?: string }) {
  return (
    <div className={twMerge("spinner", className)}>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
}
