import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ListItemText,
  Box,
  Grid,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "next/image";

export default function Layout({ children }) {
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const matches = useMediaQuery("(min-width:992px)");

  const onClose = () => {
    setVisible(false);
  };

  const hideDrawer = () => {
    setVisible(false);
  };

  const list = () => (
    <Box>
      <List>
        <Link href="/" passHref>
          <ListItem onClick={hideDrawer} className="cursor-pointer">
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Divider />
        <Link href="/marketwise" passHref>
          <ListItem onClick={hideDrawer} className="cursor-pointer">
            <ListItemText primary="Marketwise" />
          </ListItem>
        </Link>
        <Divider />
        <Link href="/keepthekidsbusy" passHref>
          <ListItem onClick={hideDrawer} className="cursor-pointer">
            <ListItemText primary="Keep the kids busy" />
          </ListItem>
        </Link>
        <Divider />
        <Link href="/about" passHref>
          <ListItem onClick={hideDrawer} className="cursor-pointer">
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Divider />
        <Link href="/contact" passHref>
          <ListItem onClick={hideDrawer} className="cursor-pointer">
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
        <Divider />
      </List>
    </Box>
  );

  const menuItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/marketwise",
      title: "MarketWise",
    },
    {
      href: "/keepthekidsbusy",
      title: "Keep the Kids Busy",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  return (
    <div className="flex flex-col flex-grow w-full min-h-screen my-5 md:my-20 md:flex md:flex-row">
      <div className="flex flex-col flex-1 mx-3  md:mx-20 my-50 md:flex-row">
        <aside className="hidden md:block bg-white-100">
          <nav>
            <div
              style={{
                width: 125,
                height: 125,
              }}
              className="relative ml-2"
            >
              <Image
                src={"/logo.png"}
                objectFit="contain"
                alt="Genrobotics-Logo"
                layout="fill"
              />
            </div>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-white-200 rounded hover:bg-slate-300 font-semibold cursor-pointer ${
                        router.asPath === href && "bg-white-600 text-black"
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="block md:hidden">
          <div
            className="container flex flex-row align-center grid grid-cols-3"
            // className=
            // container
            // direction="row"
            // justifyContent="space-between"
            // alignItems="center"
          >
            <div />
            <div>
              <div
                style={{
                  width: 140,
                  height: 80,
                }}
                className="relative"
              >
                <Image
                  src={"/logo.png"}
                  objectFit="contain"
                  alt="Genrobotics-Logo"
                  layout="fill"
                />
              </div>
            </div>

            <div className="flex justify-end items-center">
              {!visible && (
                <span className="trigger-menu">
                  <IconButton onClick={showDrawer}>
                    <MenuOutlined />
                  </IconButton>
                </span>
              )}
            </div>
            {!matches && (
              <Drawer
                PaperProps={{
                  sx: { width: "50%" },
                }}
                anchor="right"
                open={visible}
                onBackdropClick={onClose}
                variant="temporary"
              >
                {list()}
              </Drawer>
            )}
          </div>
        </div>
        <main className="container">{children}</main>
      </div>
    </div>
  );
}
