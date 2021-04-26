import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(15, "auto"),
    width: "50%",
    height: "100%",
    borderRadius: 4,
  },
  title: {
    backgroundColor: theme.palette.black,
    color: theme.palette.yellow,
    textAlign: "center",
    borderRadius: 4,
    padding: theme.spacing(1, 2),
    margin: theme.spacing(3),
    ...theme.typography.large,
  },
}));
