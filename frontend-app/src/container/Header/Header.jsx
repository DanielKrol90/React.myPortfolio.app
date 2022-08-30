import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app_flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>✋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Daniel</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div>

      </motion.div>

      <motion.div>
        
      </motion.div>





    </div>
  );
};

export default Header;
