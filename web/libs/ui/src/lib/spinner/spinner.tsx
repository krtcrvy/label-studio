import { cn } from "@humansignal/shad/utils";
import type { CSSProperties } from "react";
import styles from "./spinner.module.scss";

export type SpinnerProps = {
  className?: string;
  style?: CSSProperties;
  size?: number;
  stopped?: boolean;
};

export const Spinner = ({ className, style, size = 32, stopped = false }: SpinnerProps) => {
  const fullClassName = cn(styles.spinner, stopped && styles.stopped, className);
  const sizeWithUnit = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={fullClassName}
      style={{
        ...(style ?? {}),
        "--spinner-size": sizeWithUnit,
      }}
    />
  );
};
