"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const LinkComponent: React.FC<Props> = ({ children, href, className }) => {
  const { locale } = useParams();

  return (
    <Link href={`/${locale}/${href}`} className={className}>
      {children}
    </Link>
  );
};

export default LinkComponent;
