import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, closeModal, layoutId, image, img }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div className="backdrop">
          <motion.div layoutId={layoutId} className="modal">
            <motion.div>
              <img className={img} src={image} alt="movie" />
            </motion.div>
            <div>
              <button class="fa fa-remove" onClick={closeModal}></button>
            </div>
            {/* <div>
              <button className="playbtn" class="fa fa-play">
                play
              </button>
            </div> */}
            <h1 className="h1">98% Match</h1>
            <h2 className="h2"> 2020 </h2>
            <h3 className="h3">HD</h3>
            <h4 className="h4">18+</h4>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quisquam commodi deleniti expedita, eos inventore assumenda enim
              iure quidem id cum in officia harum? Voluptate magnam nisi libero
              vel aspernatur facilis dolores sequi illo fugit velit tempora ex
              adipisci quod expedita consequuntur numquam molestiae dolore,
              inventore hic, recusandae enim impedit explicabo mollitia? Quos
              tenetur totam blanditiis quibusdam natus illum consequuntur ipsa,
              veniam ex possimus odit atque ipsum. Sed assumenda quas ipsa
              quaerat atque maxime accusantium omnis sit repellendus quisquam
              magni beatae nulla cum odit tenetur asperiores commodi, quis nihil
              ullam provident doloremque! Quaerat ducimus odio, atque veniam
              rerum tempora iure!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam quisquam commodi deleniti expedita, eos
              inventore assumenda enim iure quidem id cum in officia harum?
              Voluptate magnam nisi libero vel aspernatur facilis dolores sequi
              illo fugit velit tempora ex adipisci quod expedita consequuntur
              numquam molestiae dolore, inventore hic, recusandae enim impedit
              explicabo mollitia? Quos tenetur totam blanditiis quibusdam natus
              illum consequuntur ipsa, veniam ex possimus odit atque ipsum. Sed
              assumenda quas ipsa quaerat atque maxime accusantium omnis sit
              repellendus quisquam magni beatae nulla cum odit tenetur
              asperiores commodi, quis nihil ullam provident doloremque! Quaerat
              ducimus odio, atque veniam rerum tempora iure!inventore hic,
              recusandae enim impedit explicabo mollitia? Quos tenetur totam
              blanditiis quibusdam natus illum consequuntur ipsa, veniam ex
              possimus odit atque ipsum. Sed assumenda quas ipsa quaerat atque
              maxime accusantium omnis sit repellendus quisquam magni beatae
              nulla cum odit tenetur asperiores commodi, quis nihil ullam
              provident doloremque! Quaerat ducimus odio, atque veniam rerum
              tempora iure!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
