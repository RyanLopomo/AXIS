import React from "react";
import { navigationItems } from "../../data/navigation";
import { DynamicNavigation } from "../../lightswind/dynamic-navigation";

export function Navbar() {
  return <DynamicNavigation items={navigationItems} logo="/logo-axis.png" />;
}
