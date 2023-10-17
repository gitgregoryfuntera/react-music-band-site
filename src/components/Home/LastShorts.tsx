import CustomCard from "@components/shared/customs/CustomCard/CustomCard";
import CLASSES from "./LastShorts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import CustomAnchorButton from "@components/shared/customs/CustomAnchorButton/CustomAnchorButton";

const LAST_SHORTS = [
  {
    link: `https://www.youtube.com/embed/Lssi0T6rHEo`,
    title: `Aggressive Dark Electro Mix \ Dark Techno \ Cyberpunk \ Industrial Mix Music [ Copyright Free ]`,
    description: {
      title: `Rainy Night`,
      message: `History of Synth music, there is probably no one.`,
    },
  },
  {
    link: `https://www.youtube.com/embed/J4lknAwyyWs`,
    title: `The ending we desired | Cyberpunk Edgerunners | #anime #amv #shorts #cyberpunk2077 #music #watch`,
    description: {
      title: `Landscape`,
      message: `History of Synth music, there is probably no one.`,
    },
  },
  {
    link: `https://www.youtube.com/embed/hkLEdSjlqXQ`,
    title: `Best Ambient Cyberpunk Mix | Dystopian Atmospheric Sci-Fi Music for Blade Runners`,
    description: {
      title: `Cyborg Life`,
      message: `History of Synth music, there is probably no one.`,
    },
  },
];

const LastShorts = () => {
  return (
    <section className={CLASSES.root}>
      <div className={CLASSES.title}>
        <h2>Last shorts</h2>
      </div>
      <div className={CLASSES.shortContainer}>
        {LAST_SHORTS?.map((item) => (
          <CustomCard>
            <div className={CLASSES.cardContent}>
              <iframe
                width="366"
                height="660"
                src={item.link}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder={0}
              />
              <div className={CLASSES.descriptionContainer}>
                <h3>{item.description.title}</h3>
                <p>{item.description.message}</p>
              </div>
              <div className={CLASSES.socialsContainer}>
                <CustomAnchorButton>
                  <FontAwesomeIcon icon={faInstagram} size="2x" color="gray" />
                </CustomAnchorButton>
                <CustomAnchorButton>
                  <FontAwesomeIcon icon={faYoutube} size="2x" color="gray" />
                </CustomAnchorButton>
              </div>
            </div>
          </CustomCard>
        ))}
      </div>
    </section>
  );
};

export default LastShorts;
