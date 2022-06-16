import React from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

const Layout = (props: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <LayoutHeader />
      <main>{props.children}</main>
      <LayoutFooter />
    </React.Fragment>
  );
};
export default Layout;
