import CustomPortal from "@components/shared/customs/CustomPortal/CustomPortal";
import CLASSES from "./PlayDialog.module.scss";
import CustomButton from "@components/shared/customs/CustomButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface PlayDialogProps {
  open: boolean;
  handleOpen: (open: boolean) => void;
}

const PlayDialog = (props: PlayDialogProps) => {
  const { open, handleOpen } = props;
  return (
    <>
      {open && (
        <CustomPortal>
          <dialog className={CLASSES.root} open>
            <div className={CLASSES.wrapper}>
              <div className={CLASSES.header}>
                <CustomButton onClick={() => handleOpen(false)}>
                  <FontAwesomeIcon icon={faClose} size={"2x"} />
                </CustomButton>
              </div>
              <div className={CLASSES.content}>
                <iframe
                  width="948"
                  height="533"
                  src="https://www.youtube.com/embed/-B7-Vcdlld8"
                  title="Perturbator - Venger ft. Greta Link [Music Video - Official]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </dialog>
        </CustomPortal>
      )}
    </>
  );
};

export default PlayDialog;
