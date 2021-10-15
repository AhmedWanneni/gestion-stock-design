import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  // ajouter Article
  btnAA: {
    backgroundColor: "#f6d70e",
    color: "black",
    borderRadius: "15px",

  },
  form: {
    // maxWidth: "50vh",
    // alignItems: "left",
    // justifyContent: "left",
    // alignSelf: "left",
    // maxWidth: "40vh",
  },
  content: {
    marginTop: "90px",
    alignSelf: "center",
    alignItems:"center",
  },
  input: {
    borderRadius: "20px",
    backgroundColor: "#d5d5d5",
    height: "2.1876em",
    boxShadow: "2px -9px 0px -3px rgba(0,0,0,0.11)",
    marginBottom: "20px",
  },
  btnAj:{
    backgroundColor: "#d5d5d5",
    color: "black",
    borderRadius: "15px", 
    marginLeft:"35px"
  },
  container:{
    alignContent:"center",
    alignSelf: "center",
    alignItems:"center",
    justifyContent: "center",
    width:"40vh"
  }
 
}));
