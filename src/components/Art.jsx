import React from 'react'
import { motion } from "framer-motion";

const Art = () => {

  const art_img_class = "h-60"

  return (
      <section className="flex flex-col text-center text-3xl mt-10">
        <h1 className='text-3xl p-8'>art</h1>
        <p className='text-gray-500 text-sm -mt-5 mb-5'>i also like to draw sometimes! here's some of my favourites</p>
    <div className="overflow-hidden w-full py-5 flex flex-col gap-3 z-0">
      <motion.div
        className="-z-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 60, repeat: Infinity }}
      >
        <div className="flex gap-2">
          <img src="img/art1.png" className={art_img_class} />
          <img src="img/art2.png" className={art_img_class} />
          <img src="img/art7.png" className={art_img_class} />
          <img src="img/art4.png" className={art_img_class} />
          <img src="img/art1.png" className={art_img_class} />
          <img src="img/art2.png" className={art_img_class} />
          <img src="img/art7.png" className={art_img_class} />
          <img src="img/art4.png" className={art_img_class} />
          <img src="img/art1.png" className={art_img_class} />
          <img src="img/art2.png" className={art_img_class} />
          <img src="img/art7.png" className={art_img_class} />
          <img src="img/art4.png" className={art_img_class} />
        </div>
      </motion.div>
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 60, repeat: Infinity }}
      >
        <div className="flex gap-2">
          <img src="img/art5.png" className={art_img_class} />
          <img src="img/art6.png" className={art_img_class} />
          <img src="img/art3.png" className={art_img_class} />
          <img src="img/art8.png" className={art_img_class} />
          <img src="img/art9.png" className={art_img_class} />
          <img src="img/art5.png" className={art_img_class} />
          <img src="img/art6.png" className={art_img_class} />
          <img src="img/art3.png" className={art_img_class} />
          <img src="img/art8.png" className={art_img_class} />
          <img src="img/art9.png" className={art_img_class} />
          <img src="img/art5.png" className={art_img_class} />
          <img src="img/art6.png" className={art_img_class} />
          <img src="img/art3.png" className={art_img_class} />
          <img src="img/art8.png" className={art_img_class} />
          <img src="img/art9.png" className={art_img_class} />
        </div>
      </motion.div>
    </div>
      </section>
  );

}

export default Art