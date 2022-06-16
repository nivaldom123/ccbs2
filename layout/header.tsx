import CloseIcon from "constants/icons/CloseIcon";
import MenuIcon from "constants/icons/MenuIcon";
import Link from "next/link";
import React from "react";
import css from "styles/header.module.scss";

const LayoutHeader = () => {
  const { toggleNav, handlerNavigation } = useHeader();
  return (
    <header className={css.container}>
      <div className={css.content}>
        <div className={css.logo}>
          <img src="favicon.ico" alt="logo" />
        </div>
        <div className={css.menu}>
          <button onClick={handlerNavigation}>
            <i>{toggleNav ? <CloseIcon /> : <MenuIcon />}</i>
          </button>
        </div>
        <nav
          className={css.navigation}
          style={{ height: toggleNav ? "250px" : "0px" }}
        >
          <div className={css.list}>
            <Link href={"#converter"}>Características</Link>
            <Link href={"/"}>Contato</Link>
            <Link href={"/"}>Ajuda</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default LayoutHeader;

const useHeader = () => {
  const [toggleNav, setToggle] = React.useState(false);
  // Return Values

  const handlerNavigation = React.useCallback(() => {
    setToggle(!toggleNav);
  }, [toggleNav]);

  return { toggleNav, handlerNavigation };
};
