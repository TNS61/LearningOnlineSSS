import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  ARM_LEFT,
  ARM_RIGHT,
  FOREGROUND,
  LAYER2,
  LAYER3,
  MEN_DANCE,
  TITLE,
  WOMEN_DANCE,
} from "@/assets";
import AOS from "aos";
import "aos/dist/aos.css";
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

      <Box
        id="home"
        sx={{
          height: "110dvh",
          backgroundColor: "#FFF2C6 !important",
          position: "relative",
        }}
      >
        {/* ส่วนชื่อ */}
        <Box
          sx={{
            position: "absolute",
            width: "fit-content !important",
            left: "50%",
            top: "30%",
            transform: "translate(-50%,-50%)",
            zIndex: "10",
          }}
        >
          <Image
            src={TITLE.src}
            width={512}
            height={512}
            alt="title"
            className="w-[500px] z-20 title-header relative"
            draggable={false}
          />
          <Image
            src={ARM_LEFT.src}
            width={512}
            height={512}
            alt="ARM_LEFT"
            className="w-[50%] absolute bottom-[-23%] left-[-20%] arm-left"
            draggable={false}
          />
          <Image
            src={ARM_RIGHT.src}
            width={512}
            height={512}
            alt="ARM_RIGHT"
            className="w-[50%] absolute bottom-[-23%]  right-[-20%] arm-right"
            draggable={false}
          />
        </Box>

        {/* เมือง */}
        <Box
          sx={{
            position: "relative",
            width: "100% !important",
            height: "100% !important",
          }}
        >
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
            className="absolute bottom-[9%] left-0 z-[2]"
          >
            <Image
              src={FOREGROUND.src}
              width={1280}
              height={1280}
              alt="FOREGROUND"
              className="w-full "
              draggable={false}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
            className="absolute bottom-[2%] left-0 z-[1]"
          >
            <Image
              src={LAYER2.src}
              width={1280}
              height={1280}
              alt="LAYER2"
              className="w-full "
              draggable={false}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            className="absolute bottom-[5%] left-0 z-[0]"
          >
            <Image
              src={LAYER3.src}
              width={1280}
              height={1280}
              alt="LAYER3"
              className="w-full "
              draggable={false}
            />
          </div>
        </Box>

        {/* <TitlePage /> */}
      </Box>
      <Box
        id="description"
        sx={{
          height: "110dvh",
          width: "100% !important",
          backgroundColor: "#FFF2C6 !important",
          position: "relative",
        }}
        className="pt-20 flex flex-col  items-center gap-10"
      >
        <Box className="relative">
          <Image
            src={TITLE.src}
            width={512}
            height={512}
            alt="title"
            className="w-[300px] z-20 title-header relative "
            draggable={false}
          />
          <Image
            src={ARM_LEFT.src}
            width={512}
            height={512}
            alt="ARM_LEFT"
            className="w-[50%] absolute bottom-[-23%] left-[-20%] arm-left"
            draggable={false}
          />
          <Image
            src={ARM_RIGHT.src}
            width={512}
            height={512}
            alt="ARM_RIGHT"
            className="w-[50%] absolute bottom-[-23%]  right-[-20%] arm-right"
            draggable={false}
          />
        </Box>

        <Container maxWidth="md">
          <div
            className=""
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <Typography
              sx={{
                textAlign: "center",
                // fontSize: "1.5rem",
              }}
            >
              สังคมเมืองยุคปัจจุบัน ที่หลายคนต้องจดจ่อกับหน้าที่การงาน การเรียน
              จนทำให้ละเลยหรือไม่มีเวลาสำหรับสุขภาพตัวเองมากนัก การออกกำลังกาย
              ถือเป็นวัคซีนชั้นดี ที่ไม่มีใครสามารถผลิตได้ ฉะนั้น
              การออกกำลังกายจึงต้องสร้างขึ้นด้วยตัวเอง
              ซึ่งการออกกำลังกายไม่จำเป็นต้องลงทุนอะไร เพราะอยู่ที่ไหน ใครๆ
              ก็สามารถออกกำลังกายได้
            </Typography>
          </div>

          <div className="mt-10" data-aos="flip-left">
            <Typography
              sx={{
                textAlign: "center",
                color: "#F37520",
                fontSize: "1.7rem",
                fontWeight: "bold",
              }}
            >
              จะรอช้าทำไม ลุกขึ้นมาขยับกันได้ทันที!!
            </Typography>
          </div>
        </Container>
        <div data-aos="zoom-up" className="relative h-full w-full z-20 flex-grow">
          <div className="absolute bottom-[4%] right-[20%]">
            <Image
              src={MEN_DANCE.src}
              width={1280}
              height={1280}
              alt="FOREGROUND"
              className="h-[400px] w-auto object-contain men-dance"
              draggable={false}
            />
          </div>
          <div className="absolute bottom-[4%] left-[20%]">
            <Image
              src={WOMEN_DANCE.src}
              width={1280}
              height={1280}
              alt="FOREGROUND"
              className="h-[400px] w-auto object-contain men-dance"
              draggable={false}
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
          className="absolute bottom-[9%] left-0 z-[2]"
        >
          <Image
            src={FOREGROUND.src}
            width={1280}
            height={1280}
            alt="FOREGROUND"
            className="w-full "
            draggable={false}
          />
        </div>
      </Box>

      {/* สถานการณ์ */}

      <Box
        sx={{
          height: "110dvh",
          backgroundColor: "#FFF2C6 !important",
          pt: "10rem",
        }}
        id="situation"
      >
        <div data-aos="fade-up">
          <Typography
            sx={{
              fontSize: "4rem",
              textAlign: "center",
              fontWeight: "bold",
              // color: "#fff !important",
            }}
          >
            สถานการณ์
          </Typography>
        </div>
      </Box>
      {/* กระบวนการดำเนินงาน */}
      <Box
        sx={{
          height: "110dvh",
          backgroundColor: "#FFF2C6 !important",
          pt: "10rem",
        }}
        id="process"
      >
        <Typography
          sx={{
            fontSize: "4rem",
            textAlign: "center",
            fontWeight: "bold",
            // color: "#fff !important",
          }}
        >
          กระบวนการดำเนินงาน
        </Typography>
      </Box>

      {/* เครื่องมือเสริมการทำงาน */}
      <Box
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
      </Box>

      {/* กรณีศึกษา */}
      <Box
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
      </Box>
      {/* อื่นๆ ที่เกี่ยวข้อง */}
    </Box>
  );
}

const MenuBar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
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
