import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import TimelineIcon from '@material-ui/icons/Timeline';
import EcoIcon from '@material-ui/icons/Eco';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

import Scanner from './Scanner';
import Inventory from './Inventory';
import Product from './Product';
import Input from './Input';
import Tree from './Tree';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);


const SideBar = props => {

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const drawer = (
    <div>

        <ListItem button key='Inventory' className={classes.toolbar} style={{ color: 'white', backgroundColor: 'teal'}} >
          <ListItemIcon><EcoIcon style={{ color: 'white' }}/></ListItemIcon>
              <ListItemText primary='Sapling'/>
        </ListItem>

      <List>
        <NavLink to='/' style={{ textDecoration: 'none', color: 'grey' }}>
          <Tooltip title='Mockup of organisation dashboard showing key sustainability metrics' arrow>
            <ListItem button key='Inventory'>
              <ListItemIcon><TimelineIcon /></ListItemIcon>
              <ListItemText primary='Inventory' color='primary'/>
            </ListItem>
          </Tooltip>
        </NavLink>

        <NavLink to='/scan' style={{ textDecoration: 'none', color: 'grey' }}>
          <Tooltip title='Working prototype of product barcode scanner' arrow>
            <ListItem button key='Scan'>
              <ListItemIcon><AssignmentIcon /></ListItemIcon>
              <ListItemText primary='Scan' />
            </ListItem>
          </Tooltip>
        </NavLink>

        <NavLink to='/input' style={{ textDecoration: 'none', color: 'grey' }}>
          <Tooltip title='Working prototype of data input and restructuring tool' arrow>
            <ListItem button key='Input'>
              <ListItemIcon><CameraAltIcon /></ListItemIcon>
              <ListItemText primary='Input' />
            </ListItem>
          </Tooltip>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sustainability Analysis
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { props.content === 'scan' ?
          <Scanner />
        : props.content === 'product' ?
          <Product />
        : props.content === 'input' ?
          <Input />
        : props.content === 'tree' ?
          <Tree shapes={[{color: "red", width: "100"}]} />
        : 
          <Inventory /> 
        }
      </main>
    </div>
  );
}


export default SideBar