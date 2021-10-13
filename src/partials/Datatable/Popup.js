import React from 'react'
import {Dialog , DialogTitle, DialogContent, Typography} from '@material-ui/core';

function Popup(props) {

    const {title, children, openPopup, setOpenPopup} = props;

    return (
        <Dialog open={openPopup}>
            
            {title ?  <DialogTitle>
                <Typography component="h1" variant="h4" align="center" style={{color: "#000000"}}>
                    {title}
                </Typography>
            </DialogTitle> : ''}
            <DialogContent dividers>
                {children}
            </DialogContent>
            
        </Dialog>
    )
}

export default Popup
