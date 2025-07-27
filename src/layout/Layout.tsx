//layout
// src/layout/Layout.tsx
import React from 'react';
import SideMenu from './SideMenu';
import Page from './Page';
import Footer from './Footer';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white">
      <SideMenu />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
};

export default Layout;
