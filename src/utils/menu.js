import React from "react";
import { AiOutlineWallet, AiOutlineControl } from "react-icons/ai";
import { FiSettings, FiUsers } from "react-icons/fi";
import { IoIosOptions } from "react-icons/io";
import { HiOutlineDocumentReport } from "react-icons/hi";

export const MenuSidebar = [
  {
    id: 1,
    icon: <AiOutlineWallet color="white" size={30} />,
    title: "Programacion",
    rute: "/programacion",
  },
  {
    id: 2,
    icon: <FiSettings color="white" size={30} />,
    title: "Gestion",
    rute: "/gestion",
  },
  {
    id: 3,
    icon: <IoIosOptions color="white" size={30} />,
    title: "Perfiles",
    rute: "/perfiles",
  },
  {
    id: 4,
    icon: <AiOutlineControl color="white" size={30} />,
    title: "Roles",
    rute: "/roles",
  },
  {
    id: 5,
    icon: <FiUsers color="white" size={30} />,
    title: "Usuarios",
    rute: "/usuarios",
  },
  {
    id: 6,
    icon: <HiOutlineDocumentReport color="white" size={30} />,
    title: "Reportes",
    rute: "/reportes",
  },
];
