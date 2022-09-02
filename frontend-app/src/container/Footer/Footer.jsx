import React, { useState } from 'react'

import { client } from "../../client";
import { AppWrap, MotionWrap } from "../..//wrapper";
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "footer",
  "app__whitebg"
);
