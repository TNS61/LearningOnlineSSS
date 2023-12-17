import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TitlePage from "../../../components/physical activity/community/pages/TitlePage";
import DescriptionPage from "../../../components/physical activity/community/pages/DescriptionPage";
import SituationPage from "../../../components/physical activity/community/pages/SituationPage";
import StatisticPage from "../../../components/physical activity/community/pages/StatisticPage";
import GamePage from "../../../components/physical activity/community/pages/GamePage";
import InteractivesPage from "../../../components/physical activity/community/pages/InteractivesPage";

export default function Community() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#FFF2C6 !important",
      }}
    >
      {/* menu bar */}
      <Box
        sx={{
          position: "fixed",
          width: "100vw !important",
          display: "flex",
          justifyContent: "flex-end",
          zIndex: "1000",
          px: "2rem",
          py: "1rem",
        }}
      >
        <MenuBar />
      </Box>

      {/* 1. Title */}
      <Box
        id="home"
        sx={{
          height: "250dvh",
          backgroundColor: "#FFF2C6 !important",
          position: "relative",
        }}
        className="mb-[300px]"
      >
        <TitlePage className="" />
      </Box>

      {/* 2. Description */}
      <Box
        id="description"
        sx={{
          height: "200dvh",
        }}
        className="mb-[300px]"
      >
        <DescriptionPage />
      </Box>

      {/* 3. Situation */}
      <Box id="situation" sx={{ height: "200dvh" }} className="mb-[100px]">
        <SituationPage />
      </Box>

      {/* 4. Statistic */}
      <Box
        id="statistic"
        sx={{
          height: "200dvh",
          // backgroundColor: "#FFF2C6 !important",
          // pt: "10rem",
        }}
        className="mb-[200px]"
      >
        <StatisticPage />
      </Box>

      {/* 5. Situation */}
      <Box id="situation" sx={{ height: "200dvh" }} className="mb-[100px]">
        <InteractivesPage />
      </Box>

      {/* 6. Game */}
      <Box
        id="statistic"
        sx={{
          height: "200dvh",
          // backgroundColor: "#FFF2C6 !important",
          // pt: "10rem",
        }}
      >
        <GamePage />
      </Box>

      {/* เครื่องมือเสริมการทำงาน */}
      {/* <Box
        sx={{
          height: "110dvh",
          backgroundColor: "#FFF2C6 !important",
          pt: "10rem",
        }}
        id="tool"
      >
        <Typography
          sx={{
            fontSize: "4rem",
            textAlign: "center",
            fontWeight: "bold",
            // color: "#fff !important",
          }}
        >
          เครื่องมือเสริมการทำงาน
        </Typography>
      </Box> */}

      {/* กรณีศึกษา */}
      {/* <Box
        sx={{
          height: "110dvh",
          backgroundColor: "#FFF2C6 !important",
          pt: "10rem",
        }}
        id="case"
      >
        <Typography
          sx={{
            fontSize: "4rem",
            textAlign: "center",
            fontWeight: "bold",
            // color: "#fff !important",
          }}
        >
          กรณีศึกษา
        </Typography>
      </Box> */}
      {/* อื่นๆ ที่เกี่ยวข้อง */}
    </Box>
  );
}

const MenuBar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = () => {};

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          // color: "#fff !important",
          backgroundColor: "#FFF2C6 !important",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            router.push("/physical-activity/community/#home");
          }}
        >
          หน้าแรก
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/physical-activity/community/#description");
          }}
        >
          รายละเอียด
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/physical-activity/community/#situation");
          }}
        >
          สถานการณ์
        </MenuItem>

        <MenuItem
          onClick={() => {
            router.push("/physical-activity/community/#process");
          }}
        >
          กระบวนการดำเนินงาน
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/physical-activity/community/#tool");
          }}
        >
          เครื่องมือเสริมการทำงาน
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/physical-activity/community/#case");
          }}
        >
          กรณีศึกษา
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/physical-activity/community/#related");
          }}
        >
          อื่นๆ ที่เกี่ยวข้อง
        </MenuItem>
      </Menu>
    </>
  );
};

// const Title = () => {
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "110dvh",
//         backgroundColor: "#FFF2C6 !important",
//       }}
//     >
//       <Parallax
//         speed={-20}
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100%",
//           zIndex: "10",
//         }}
//       >
//         <Image
//           src={TITLE.src}
//           width={512}
//           height={512}
//           alt="TITLE"
//           className="h-[100px] lg:h-[300px] w-auto object-cover -translate-x-1/2  absolute top-[10%] left-1/2"
//         />
//       </Parallax>
//       <Parallax
//         speed={0}
//         style={{
//           position: "absolute",
//           bottom: "0",
//           left: "0",
//           zIndex: "5",
//         }}
//       >
//         <Image
//           src={FOREGROUND.src}
//           width={512}
//           height={512}
//           alt="FOREGROUND"
//           className="h-[100px] lg:h-[300px] w-auto object-cover"
//         />
//       </Parallax>

//       <Parallax
//         speed={-10}
//         style={{
//           position: "absolute",
//           bottom: "0",
//           left: "0",
//           zIndex: "4",
//         }}
//       >
//         <Image
//           src={LAYER2.src}
//           width={512}
//           height={512}
//           alt="LAYER2"
//           className="h-full w-auto object-cover"
//         />
//       </Parallax>
//       <Parallax
//         speed={-15}
//         style={{
//           position: "absolute",
//           bottom: "0",
//           left: "0",
//           zIndex: "3",
//         }}
//       >
//         <Image
//           src={LAYER3.src}
//           width={512}
//           height={512}
//           alt="LAYER3"
//           className="h-full w-auto object-cover"
//         />
//       </Parallax>
//     </Box>
//   );
// };
