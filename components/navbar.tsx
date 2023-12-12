"use client";

import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Home,
  Group,
  Pen,
  Users,
  ShoppingCart,
  Luggage,
  PartyPopper,
} from "lucide-react";

const Navbar = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.userId}/friends`,
      label: "Contacts",
      active: pathname === ``,
      icon: <Users/>,
    },
    {
      href: `/${params.userId}/groups`,
      label: "Groups",
      active: pathname === ``,
      icon: <Group/>,
    },
    {
      href: `/${params.userId}/events`,
      label: "Events",
      active: pathname === ``,
      icon: <PartyPopper/>,
    },
    {
      href: `/${params.userId}/marketplace`,
      label: "Marketplace",
      active: pathname === ``,
      icon: <ShoppingCart/>,
    },
    {
      href: `/${params.userId}/real-estate`,
      label: "Real Estate",
      active: pathname === ``,
      icon: <Home/>,
    },
    {
      href: `/${params.userId}/traveling`,
      label: "Traveling",
      active: pathname === ``,
      icon: <Luggage/>,
    },
    {
      href: `/${params.userId}/blogs`,
      label: "Blogs",
      active: pathname === ``,
      icon: <Pen/>,
    },
  ];

  return (
    <nav className="space-y-8">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-md fint-medium transition-colors hover:text-primary block",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
              <p className="flex items-center gap-2"> {route.icon}{route.label}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
