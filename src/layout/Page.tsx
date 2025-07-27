// src/layout/Page.tsx
import React from 'react';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Page;
