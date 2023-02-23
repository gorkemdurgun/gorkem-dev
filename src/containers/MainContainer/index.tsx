import { Ubuntu, Quicksand } from "@next/font/google";
import { NextPage } from "next";
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
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar sticky="top" bg="dark" variant="dark" className={styles.navbar}>
      <Navbar.Brand className={styles.navbarLogo} href="#home">
        <span className={quicksand.className.concat(" ", styles.navbarBrand)}>
          Hi, I am
          <h6 className={styles.animatedTitle}>
            Görkem Durgun / Frontend Engineer
          </h6>
        </span>
      </Navbar.Brand>
      <Nav className={styles.navbarActions}>
        <Nav.Item>
          <Nav.Link>
            <h6 className={quicksand.className.concat(" ", styles.navbarText)}>
              Who Am I?
            </h6>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <h6 className={quicksand.className.concat(" ", styles.navbarText)}>
              Experience
            </h6>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
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
        <Container className={styles.content}>{children}</Container>
      </Col>
    </Container>
  );
};

export default MainContainer;
