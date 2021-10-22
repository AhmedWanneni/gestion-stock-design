import { makeStyles } from "@material-ui/core/styles";
import { maxWidth } from "tailwindcss/defaultTheme";

export const useStyles = makeStyles((theme) => ({
 logo:{
   position:"absolute",
   top:"0",
   left:"0",
 float:"left"
 },
 content:{
    maxWidth:" 800px",
    // margin: "40px auto",
    // border: "1px solid #ccc",
    // padding: "40px",
    // borderRadius: "4px",
    // background: "white",
 },
 
 textClient:{
  float:"right",
margin:"10px"
 },
 text:{
  float:"right",
  margin:"10px",
  maxWidth:"20px"
 }
 
}));
