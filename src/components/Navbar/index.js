import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StorageIcon from "@material-ui/icons/Storage";

import "./styles.scss";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static"
      color="primary"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Repeater.xyz
          </Typography>
          <Button
            id="Server"
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="secondary"
            position="left"
            onClick={handleClick}
          >
            Server
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
              <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="VPS" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
              <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Root" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
              <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Game" />
            </StyledMenuItem>
          </StyledMenu>
          <Button
            id="Button2"
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="secondary"
            position="left"
            onClick={handleClick}
          >
            Server
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
              <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="VPS" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
              <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Root" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
              <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Game" />
            </StyledMenuItem>
          </StyledMenu>
          <Button color="inherit">Einloggen</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
