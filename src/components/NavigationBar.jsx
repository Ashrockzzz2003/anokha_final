import * as React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import logo from "./utils/anokha_home_logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-scroll';
import { useAuth } from "../auth/useAuth";
import secureLocalStorage from "react-secure-storage";
import { MD5 } from "crypto-js";

// profile menu component
const profileMenuItems = [
  {
    label: "View Profile",
    icon: UserCircleIcon,
    route: "/profile"
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    route: "/profile/edit"
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({ handleSignOut, userEmail }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const hash = MD5(userEmail + userEmail);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src={`https://www.gravatar.com/avatar/${hash}.jpg?s=200&d=robohash`}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, route }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <a href={route} key={label}>
              <MenuItem
                key={label}
                onClick={label === "Sign Out" ? handleSignOut : () => { }}
                className={`flex items-center gap-2 rounded ${isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
                  }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </a>
          );
        })}
      </MenuList>
    </Menu>
  );
}

const NavigationBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(parseInt(secureLocalStorage.getItem("isLoggedIn")));
  const [isAmritaCBE, setIsAmritaCBE] = useState(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
  const [hasActivePassport, setHasActivePassport] = useState(parseInt(secureLocalStorage.getItem("hasActivePassport")));
  const [email, setEmail] = useState(secureLocalStorage.getItem("email"));

  useEffect(() => {
    setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
    setIsAmritaCBE(parseInt(secureLocalStorage.getItem("isAmritaCBE")));
    setHasActivePassport(parseInt(secureLocalStorage.getItem("hasActivePassport")));
  }, [])

  const { signOut } = useAuth();

  const handleSignOut = () => {
    setIsLoggedIn(0);
    signOut();
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row items-center">
      <a href="/#about">
        <Button variant="text" className=" text-gray-50 ml-auto mr-auto">
          <Typography className="flex items-center capitalize">
            About
          </Typography>
        </Button>
      </a>
      <a href="/#eventide">
        <Button variant="text" className="text-gray-50 ml-auto mr-auto">
          <Typography className="flex items-center capitalize">
            Eventide
          </Typography>
        </Button>
      </a>
      <a href="/#techfair">
        <Button variant="text" className="text-gray-50 ml-auto mr-auto">
          <Typography className="flex items-center capitalize">
            TechFair
          </Typography>
        </Button>
      </a>
      <a href="/events">
        <Button variant="text" className="text-gray-50 ml-auto mr-auto">
          <Typography className="flex items-center capitalize">
            Events & Workshops
          </Typography>
        </Button>
      </a>
      <a href="/team">
        <Button variant="text" className="text-gray-50 ml-auto mr-auto">
          <Typography className="flex items-center capitalize">
            Crew
          </Typography>
        </Button>
      </a>
      <a href="/#footer">
        <Button variant="text" className="text-gray-50 ml-auto mr-auto">
          <Typography className="flex items-center capitalize">
            Contact Us
          </Typography>
        </Button>
      </a>
    </ul>
  );

  return (
    <Navbar className="fixed inset-0 z-10 h-fit max-w-full rounded-none lg:px-16 lg:py-2 bg-black bg-opacity-50 backdrop-blur-xl mb-3 border-b-1 border-t-0 border-r-0 border-l-0 border-none">
      <div className="flex items-center justify-between text-blue-black-900">
        <a href="/">
          <img src={logo} alt="Anokha Logo" className="w-36 h-auto" />
        </a>
        <div className="flex items-center gap-4 md:gap-1">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <a
            href={isLoggedIn === 1 ? "/profile" : "/login"}
            className="hidden lg:inline-block"
          >
            {isLoggedIn === 1 ? null : (
              <Button
                variant="filled"
                size="sm"
                className="mb-1 capitalize text-lg border-2 text-babyPowder bg-transparent hover:bg-babyPowder hover:text-backgroundColor"
              >
                <span>Login / Register</span>
              </Button>
            )}
          </a>
          {isLoggedIn === 1 ? (
            <ProfileMenu handleSignOut={handleSignOut} userEmail={email}/>
          ) : null}
          {isLoggedIn === 1 ? (
            <a
              href={isLoggedIn === 1 ? "/profile" : "/login"}
              className="capitalize"
            >
              {
                isAmritaCBE === 1 ? null : (
                  <a
                    href={hasActivePassport === 1 ? "/profile" : "/amritaPassport"}
                    className="capitalize"
                  >
                    {hasActivePassport === 1 ? 
                      (null)
                     : (
                      <Button
                        variant="filled"
                        size="sm"
                        className="mb-1 capitalize text-black bg-babyPowder"
                      >
                        <span>Buy Passport</span>
                      </Button>
                    )}
                  </a>
                )
              }
            </a>
          ) : null}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="w-fit ml-auto mr-auto">
          <a
            href={isLoggedIn === 1 ? "/profile" : "/login"}
            className="capitalize"
          >
            {isLoggedIn === 1 ? null : (
              <Button
                variant="filled"
                size="sm"
                className="mb-1 capitalize text-black bg-babyPowder"
              >
                <span>Login / Register</span>
              </Button>
            )}
          </a>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavigationBar;