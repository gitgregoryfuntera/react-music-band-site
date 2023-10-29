import { useThemeContextProvider } from "@components/shared/context/themeContextHook";
import CLASSES from "./AlbumDetail.module.scss";
import singleAlbumImg from "/assets/discography/single-album.png";

const AlbumDetail = () => {
  const { version } = useThemeContextProvider();
  return (
    <section className={`${CLASSES.root} ${CLASSES[version]}`}>
      <div className={CLASSES.content}>
        <div className={CLASSES.title}>
          <h2>New - Cyber Rad EP</h2>
        </div>

        <div className={CLASSES.detail}>
          <h2>
            The second full-length release for the Australian trio was recorded
            in Los Angeles with producer Lars Stalfors.
          </h2>
          <p>
            An album loaded with electronic rhythms combined with dark bass
            lines, capable of generating the tensest moments and sonic darkness,
            thus recreating a truly haunting atmosphere. Visionary marks a new
            era for Nightcrawler, in which the Synthwave style that made him so
            well-known stops being the main canvas in his compositions to become
            just another colour in his new creative palette, made of new musical
            influences such as nightclub music, synthpop or darkwave. By doing
            so, he manages to develop a new sound that makes way for bolder and
            more experimental productions.
          </p>
        </div>
        <div className={CLASSES.albumImgContainer}>
          <img src={singleAlbumImg} width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default AlbumDetail;
