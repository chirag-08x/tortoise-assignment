import { v4 as uid } from "uuid";
import {
  NewspaperClipping,
  UsersThree,
  DeviceMobile,
  CalendarDots,
  Notepad,
  Buildings,
  Lifebuoy,
} from "@phosphor-icons/react";

const claimsData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export const SidebarCards = [
  {
    id: uid,
    icon: <NewspaperClipping size={22} />,
    name: "Claims",
    value: claimsData.length,
  },
  {
    id: uid,
    icon: <UsersThree size={22} />,
    name: "Employees",
    value: "3456",
  },
  {
    id: uid,
    icon: <DeviceMobile size={22} />,
    name: "Devices",
    value: "128",
  },
];

export const SidebarLinks = [
  {
    id: uid,
    icon: <CalendarDots size={22} />,
    name: "Rental Schedules",
  },
  {
    id: uid,
    icon: <Notepad size={22} />,
    name: "Billing",
  },
  {
    id: uid,
    icon: <Buildings size={22} />,
    name: "Organization",
  },
  {
    id: uid,
    icon: <Lifebuoy size={22} />,
    name: "Support",
  },
];
