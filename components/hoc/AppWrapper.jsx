import { Box, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";


export default function AppWrapper({ children }) {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY);
        });
    }, []);

    return (
        <Box className="flex flex-col min-h-screen w-full max-w-screen bg-white">

            <Box className="relative top-0 w-full  flex-grow " component={"main"}>
                {children}
            </Box>

            {/* <Footer /> */}
        </Box>
    );
}
