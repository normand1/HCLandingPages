import React from 'react';
import Header from './Header';
import Footer from './FooterCrypto';
import RetroGrid from "@/components/magicui/retro-grid";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <RetroGrid />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;