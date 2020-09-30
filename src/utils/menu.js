import React from "react";
import { AiOutlineWallet, AiOutlineControl } from "react-icons/ai";
import { FiSettings, FiUsers } from "react-icons/fi";
import { IoIosOptions } from "react-icons/io";
import { HiOutlineDocumentReport } from "react-icons/hi";

export const MenuSidebar = [
  {
    icon: <AiOutlineWallet color="white" size={30} />,
    title: "Programacion",
    rute: "/programacion",
  },
  {
    icon: <FiSettings color="white" size={30} />,
    title: "Gestion",
    rute: "/gestion",
  },
  {
    icon: <IoIosOptions color="white" size={30} />,
    title: "Perfiles",
    rute: "/perfiles",
  },
  {
    icon: <AiOutlineControl color="white" size={30} />,
    title: "Roles",
    rute: "/roles",
  },
  {
    icon: <FiUsers color="white" size={30} />,
    title: "Usuarios",
    rute: "/usuarios",
  },
  {
    icon: <HiOutlineDocumentReport color="white" size={30} />,
    title: "Reportes",
    rute: "/reportes",
  },
];
