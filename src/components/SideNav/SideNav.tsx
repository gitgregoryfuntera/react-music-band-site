import CLASSES from "./SideNav.module.scss";

const SideNav = () => {
  return (
    <div className={CLASSES.root}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default SideNav;
