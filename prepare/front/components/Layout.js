import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/routings">
        <a>Routings</a>
      </Link>
      <div>{children}</div>
    </>
  );
};

export default Layout;
