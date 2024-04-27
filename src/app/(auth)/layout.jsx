"use client";

import Link from "next/link";
// import { useState } from "react";

export default function authLayout({ children }) {
  const navLInk = [
    { name: "register", href: "/register" },
    { name: "login", href: "/login" },
    { name: "forgot-password", href: "/forgot-password" },
  ];

  return (
    <div>
      {children}
      {navLInk.map((item) => {
        return (
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
