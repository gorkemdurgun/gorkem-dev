import { Ubuntu, Quicksand } from "@next/font/google";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { MdOutlineNightsStay, MdOutlineWbSunny } from "react-icons/md";

import styles from "./index.module.css";

interface MainContainerProps {
  children: React.ReactNode;
}

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });
const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });

const CustomNavbar = () => {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSetActiveTab = (eventKey: any) => {
    console.log(eventKey);
  };

  return (
    <Navbar sticky="top" className={styles.navbar}>
      <Navbar.Brand className={styles.navbarLogo}>
        <h1 className={quicksand.className.concat(" ", styles.navbarBrand)}>
          <Image
            fill
            src="https://media.licdn.com/dms/image/D4D03AQHHUP1JM105eQ/profile-displayphoto-shrink_400_400/0/1676999375589?e=1682553600&v=beta&t=7StIwo_RrWF6WkVrso-0Hdfhjndcbss3w8O35_1x-yQ"
            alt="Logo"
          />
        </h1>
      </Navbar.Brand>
      <Nav activeKey={0} className={styles.navbarActions}>
        <Nav.Item>
          <Nav.Link href="#section1">
            <h6 className={quicksand.className.concat(" ", styles.navbarText)}>
              About
            </h6>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#section2">
            <h6 className={quicksand.className.concat(" ", styles.navbarText)}>
              Experience
            </h6>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#section3">
            <h6 className={quicksand.className.concat(" ", styles.navbarText)}>
              Contact Me
            </h6>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleDarkMode}>
              {darkMode ? (
                <MdOutlineNightsStay className={styles.navbarIcon} />
              ) : (
                <MdOutlineWbSunny className={styles.navbarIcon} />
              )}
            </Nav.Link>
          </Nav.Item>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

const MainContainer: NextPage<MainContainerProps> = ({ children }) => {
  return (
    <Container fluid="md">
      <Col lg={12} className={styles.container}>
        <CustomNavbar />
        {children}
      </Col>
    </Container>
  );
};

export default MainContainer;
