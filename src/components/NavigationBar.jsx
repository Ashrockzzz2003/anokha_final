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
import  secureLocalStorage  from  "react-secure-storage";

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

function ProfileMenu({ handleSignOut }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
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

    useEffect(() => {
        setIsLoggedIn(parseInt(secureLocalStorage.getItem("isLoggedIn")));
    }, [])

    const { signOut } = useAuth();

    const handleSignOut = () => {
        setIsLoggedIn(0);
        signOut();
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 1264 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
            <Link to="about" smooth={true}>
                <Button
                    variant="text"
                    className="text-gray-50 ml-auto mr-auto"
                >
                    <Typography className="flex items-center capitalize">
                        About
                    </Typography>
                </Button>
            </Link>
            <Link to="eventide" smooth={true}>
                <Button
                    variant="text"
                    className="text-gray-50 ml-auto mr-auto"
                >
                    <Typography className="flex items-center capitalize">
                        Eventide
                    </Typography>
                </Button>
            </Link>
            <Link to="techfair" smooth={true}>
                <Button
                    variant="text"
                    className="text-gray-50 ml-auto mr-auto"
                >
                    <Typography className="flex items-center capitalize">
                        TechFair
                    </Typography>
                </Button>
            </Link>
            <Link to="gallery" smooth={true}>
                <Button
                    variant="text"
                    className="text-gray-50 ml-auto mr-auto"
                >
                    <Typography className="flex items-center capitalize">
                        Gallery
                    </Typography>
                </Button>
            </Link>
            <Link to="footer" smooth={true}>
                <Button
                    variant="text"
                    className="text-gray-50 ml-auto mr-auto"
                >
                    <Typography className="flex items-center capitalize">

                        Contact Us
                    </Typography>
                </Button>
            </Link>
            <a href="/events" >
                <Button
                    variant="text"
                    className="text-gray-50 ml-auto mr-auto"
                >
                    <Typography className="flex items-center capitalize">
                        Events & Workshops
                    </Typography>
                </Button>
            </a>
        </ul>
    );

    return (
      <Navbar className="fixed inset-0 z-10 h-fit max-w-full rounded-none lg:px-16 lg:py-2 bg-black bg-opacity-50 backdrop-blur-xl mb-3 border-b-1 border-t-0 border-r-0 border-l-0 border-cyan-900 ">
        <div className="flex items-center justify-between text-blue-black-900">
          <a href="/">
            <img src={logo} alt="Anokha Logo" className="w-36" />
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <a
              href={isLoggedIn === 1 ? "/profile" : "/login"}
              className="hidden lg:inline-block"
            >
              {isLoggedIn === 1 ? null : (
                <Button
                  variant="filled"
                  size="sm"
                  className="mb-1 capitalize border-2 text-babyPowder bg-transparent hover:bg-babyPowder hover:text-backgroundColor"
                >
                  <span>Login / Register</span>
                </Button>
              )}
            </a>
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
            {isLoggedIn === 1 ? (
              <ProfileMenu handleSignOut={handleSignOut} />
            ) : null}
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