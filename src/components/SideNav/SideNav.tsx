import CLASSES from "./SideNav.module.scss";

interface SideNavProps {
  isOpen: boolean;
}

const SideNav = (props: SideNavProps) => {
  const { isOpen } = props;
  return (
    <div className={CLASSES.root}>
      <div
        className={`${CLASSES.nav} ${
          isOpen ? `${CLASSES.open}` : `${CLASSES.close}`
        }`}
      >
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default SideNav;
