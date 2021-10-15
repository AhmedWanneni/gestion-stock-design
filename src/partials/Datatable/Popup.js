import React from 'react'
import {Dialog , DialogTitle, DialogContent, Typography,Button} from '@material-ui/core';
//import CloseIcon from '@mui/icons-material/Close';
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useStyles } from "./style";
function Popup(props) {
  const classes = useStyles();
    const {title, children, openPopup, setOpenPopup} = props;

    return (<>
        <Dialog 
        fullScreen 
        
        open={openPopup}>
             <header className="sticky top-0 border-b border-gray-200 z-30 header">
      <div className="px-4 sm:px-6 lg:px-8">
     
        <div className="flex items-center justify-between h-16 -mb-px">
        <div className="flex justify-content-center items-center"></div>
          {/* Header: Left side */}
          <div className="flex">
          <Typography component="h1" variant="h4" align="center" style={{color: "#000000"}}>
                    {title}
                </Typography>
          </div>

          {/* Header: Right side */}
          <div className="flex" style={{alignItems:"center",justifyContent:"center"}}>
        
                <FontAwesomeIcon  
          onClick={() => {
            setOpenPopup(false)
          }}
          icon={faTimes}  style={{width:"32px",height:"32px",color:"black"}} />

          </div>

        </div>
      </div>
    </header>
           
            <DialogContent className={classes.dc} dividers
            //  style={{alignItems:"center",alignSelf:"center",maxWidth:'100vh',marginTop:"10vh"}}
             >
                {children}
            </DialogContent>
            
        </Dialog>
        </>
    )
}

export default Popup
