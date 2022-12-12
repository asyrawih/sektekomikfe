import { Container } from "@nextui-org/react";
import React from "react";
import dynamic from "next/dynamic";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container gap={0}>{children}</Container>
    </>
  );
};

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
