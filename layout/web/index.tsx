import { Container } from "@mui/material";
import React, { ReactNode } from "react";
import DrawerAppBar from "./navbar";
import { AppDrawer } from "./drawer";

interface Props {
    children: ReactNode;
}

const drawerWidth = 240;

const navItems = [
    {
        title: "Home",
        href: "/",
        type: "link"
    },
    {
        title: "About",
        href: "/",
        type: "link"
    },
    {
        title: "Services",
        href: "/",
        type: "link"
    },
    {
        title: "Contact",
        href: "/",
        type: "link"
    },
    {
        title: "Get a Quote",
        href: "/quotation/details",
        type: "button"
    },
];

export const WebLayout: React.FC<Props> = ({ children }) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <>
            <DrawerAppBar navItems={navItems} handleDrawerToggle={handleDrawerToggle} />

            <AppDrawer navItems={navItems} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
            <Container>
                {children}
            </Container>
        </>
    );
};