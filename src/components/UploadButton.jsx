import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const iconVariants = {
    hovered: {
        y: [0, -2, 0, 2, 0],
        transition: { duration: .5, ease: 'easeInOut' }
    }
}
	
const UploadButton = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const uploadControls = useAnimation();
    const loadingControls = useAnimation();
    const doneControls = useAnimation();
    const loaderControls = useAnimation();
    const loadingBarControls = useAnimation();

    const animate = async () => {
      setIsAnimating(true);
    	
    	uploadControls.start({
    	    zIndex: 1
	    });
	
	    await loadingControls.start({
	      top: 0,
	      transition: { duration: .3 }
	    });
	
	    loadingBarControls.start({
	      width: '100%',
	      transition: { duration: 1.35 }
	    });
	
	    uploadControls.start({
	      top: '-100%',
	      transition: { duration: 0 }
	    });
	
	    await doneControls.start({ 
	      top: 0,
	      transition: { delay: 1.5, duration: .3 }
	    });
	
	    loadingControls.start({
	      top: '-100%',
	      transition: { duration: 0 }
	    });
	
	    loadingBarControls.start({
	      width: '0%'
	    });
	
	    await uploadControls.start({ 
	      top: 0,
	      zIndex: 4,
	      transition: { delay: 2, duration: .3 }
	    });
	
	    doneControls.start({
	      top: '-100%',
	      transition: { duration: 0 }
	    });
	
	    setIsAnimating(false);
	  };
	
	  return (
	    <div className="upload-button">
	      <div className="wrapper" onClick={() => !isAnimating && animate()}>
	        <motion.div 
	          className="upload"
	          animate={uploadControls}
	          whileHover="hovered"
	        >
          <motion.div variants={iconVariants}/>
          
	          <div>
              <a DEFER href={require("../assets/KellyPhan_Resume_2024.pdf")} download="myFile">my resume</a> </div>
	        </motion.div>
	
	        <motion.div 
	          className="loading"
	          animate={loadingControls}
	        >
	        <motion.div  animate={loaderControls} />
	          <div>loading</div>
	          <motion.div className="loading-bar" animate={loadingBarControls}/>
	        </motion.div>
	        
	        <motion.div  
	          className="done"
	          animate={doneControls}
            >
	          <div> done</div>
	        </motion.div>
	      </div>
	    </div>
	  )
	}
 
export default UploadButton;    