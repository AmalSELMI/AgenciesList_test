import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  input: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    minWidth: 120,
  },
  boxClass: {
    backgroundColor: theme.palette.black,
    color: theme.palette.yellow,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(2),
    marginTop: theme.spacing(3),
    minWidth: 120,
    display: "flex",
    alignItems: "center",
  },
}));
