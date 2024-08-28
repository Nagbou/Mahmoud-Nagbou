import Navbar from "../../components/Navbar";
import '../../components/Navbar.css'
import styles from "./page.module.css";
import FirstContainer from "../../components/FirstContainer";
import '../../components/FirstContainer.css'


export default function Home() {
  return (
    <>
      <Navbar />
      <FirstContainer />
    </>
  );
}
