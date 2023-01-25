import styles from "./card.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal.js";
import PlayButton from "../icons/play-button.svg";
import useDebounce from "../utils/useDebounce";

function Card({ image, title, pragraph, layoutId, video }) {
  const [showModal, setShowModel] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function openModal() {
    setShowModel(true);
  }

  function closeModal() {
    setShowModel(false);
  }

  const {
    card,
    img,
    title1,
    title2,
    options,
    bodyCard,
    btnplay,
    btnadd,
    btnlike,
    btninfo,
  } = styles;

  // Conditions of the animation while hovering on cards
  const variantsTransition = {
    stype: "spring",
    stiffness: 250,
    delay: 0.3,

    // duration:0.5,
  };

  const cardVariants = {
    init: {
      scale: 1,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    hover: {
      scale: [1, 1.4],
      duration: 1.5,
      boxShadow: "0px 0px 2px rgb(0,0,0)",
      height: 170,
      position: "relative",
      // originY: 0.3,
      zIndex: 10,

      transition: variantsTransition,
    },
    exit: { zIndex: 10 },
  };

  const bodyCardVariants = {
    init: {
      display: "none",
    },
    hover: {
      display: "block",
      transition: variantsTransition,
    },
  };

  const playVideo = () => {
    setIsHovered(true);
  };
  const showImage = () => {
    setIsHovered(false);
  };

  const isHoveredDebounced = useDebounce(isHovered, 1000);
  return (
    <>
      {/* while hover on the card the video start loading to play  */}
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        layoutId={layoutId}
        image={image}
        img={img}
        video={video}
      />
      <motion.div
        onMouseEnter={playVideo}
        onMouseLeave={showImage}
        layoutId={layoutId}
        className={card}
        initial="init"
        whileHover="hover"
        exit="exit"
        variants={cardVariants}
      >
        {isHoveredDebounced ? (
          <video
            className={img}
            src={video}
            autoPlay
            loop
            muted
            controls={false}
            alt="movie"
          />
        ) : (
          // receving data to be displayed inside the card
          <img className={img} src={image} alt="movie" />
        )}
        {/* */}
        <motion.div className={bodyCard} variants={bodyCardVariants}>
          <div className={options}>
            <div class={btnplay}>
              <span style={{ backgroundColor: "#ffffff" }}>
                <i
                  style={{ backgroundColor: "#ffffff" }}
                  class="fa fa-play"
                ></i>
              </span>
            </div>
            <div className={btnadd}>
              <span style={{ backgroundColor: "#202020" }}>
                <i
                  style={{ backgroundColor: "#202020" }}
                  class="fa fa-plus"
                ></i>
              </span>
            </div>
            <div className={btnlike}>
              <span style={{ backgroundColor: "#202020" }}>
                <i
                  style={{ backgroundColor: "#202020" }}
                  class="fa fa-thumbs-up"
                ></i>
              </span>
            </div>
            <div onClick={openModal} className={btninfo}>
              <span style={{ backgroundColor: "#202020" }}>
                <i
                  style={{ backgroundColor: "#202020" }}
                  class="fa fa-chevron-down"
                ></i>
              </span>
            </div>

            <h2 className={title1}>{title}</h2>
            <h3 className={title2}>{pragraph}</h3>
          </div>
        </motion.div>
      </motion.div>{" "}
    </>
  );
}

export default Card;
