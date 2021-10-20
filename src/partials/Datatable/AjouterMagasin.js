import {
  Button,
  DialogActions,
  Grid,
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  InputAdornment,
  TextField,
  Container,
  Box,
} from "@material-ui/core";
import "date-fns";
import React, { useState } from "react";
import { useStyles } from "./style";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Ajouter_Magasins} from "../../pages/Controller"
const AjouterData = (props) => {
  const classes = useStyles();

  const { Ajouter } = props;

  // =================== [State] =====================
  const [gerant, setGerant] = useState("");
  const [adresse, setAdresse] = useState("");
  const [clickAjouter, setClickAjouter] = useState(false);
  const { title, children, openPopup, setOpenPopup } = props;

  // ============== [Ajouter Article] ================
  const handleAjouter = () => {
    setClickAjouter(true);
    let Magasin = {
      gerant:gerant,
      adresse:adresse
    };
    Ajouter(Magasin)
      .then(console.log("ajouter mg"))
      .catch((e) => console.log(e));
    props.handleClose();
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        PaperProps={{
          style: {
            borderRadius: "50px",
            boxShadow: "none",
            overflow:"hidden"
          },
        }}
        open={openPopup}
      >
        {title ? (
          <DialogTitle>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              style={{ color: "#000000" }}
            >
              {title}
            </Typography>
          </DialogTitle>
        ) : (
          ""
        )}

        <form className="form" onSubmit={handleAjouter}
         noValidate
         autoComplete="off"
        >
          <Grid
            alignItems="center"
            justifyContent="center"
            maxWidth="80vh"
            container
            spacing={2}
          >
            <Grid container item xs={12} sm={12} spacing={1}>
              <Grid item xs={6} sm={6}>
                <TextField
                  autoCapitalize
                  required
                  variant="outlined"
                  label="Géran magasin"
                  name="gerant"
                  type="text"
                  fullWidth
                  onChange={(e) =>setGerant(e.target.value)}
                  value={gerant}
                  InputProps={{
                     startAdornment: (
                      <InputAdornment  
                      classes={{ focused: classes.focused }}
                      shrink={false} position="start"></InputAdornment>
                    ),
                  
                  }}
                 
                />
              </Grid>
           
              <Grid item xs={6} sm={6}>
                <TextField
                  autoCapitalize
                  disableUnderline={false}
                  required
                  variant="outlined"
                  label="Adresse magasin "
                  name="adresse"
                  type="text"
                  fullWidth
                  onChange={(e) =>setAdresse(e.target.value)}
                  value={adresse}
                  autoFocus
      classes={{notchedOutline:classes.input}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment  position="start"></InputAdornment>
                      ),
                      
                   
                    
                  }}
                 
                />
            
              </Grid>
            </Grid>
          </Grid>
        </form>
        {/* </DialogContent> */}
        <DialogActions className={classes.dialAction} >
          <Button
            className={classes.btnAA}
            //    style={{backgroundColor:"#f6d70e",color:"black",borderRadius:"15px"}}
            onClick={() => {
              props.handleClose(false);
            }}
            variant="contained"
          >
            Annuler
          </Button>
          <Button
            className={classes.btnAA}
            //   style={{backgroundColor:"#f6d70e",color:"black",borderRadius:"15px"}}
            onClick={handleAjouter}
          >
            Ajouter Magasin
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AjouterData;