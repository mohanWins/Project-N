import React from "react";

type LayoutProps = React.PropsWithChildren;
export default async function Layout(props: LayoutProps) {
  const {children} = props;

  return (
    <div className="h-full flex overflow-hidden">
      <div className="h-full w-full p-4">{children}</div>
    </div>
  );
}
