import type { ReactNode } from "react";

/** macOS-style window bar header used inside glass cards. */
export default function WBar({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div className="wbar">
      <div className="wd dr" />
      <div className="wd dy" />
      <div className="wd dg" />
      {title && <span className="wt">{title}</span>}
      {children}
    </div>
  );
}
