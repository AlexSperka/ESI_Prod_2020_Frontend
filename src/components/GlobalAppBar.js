import React from 'react';  
import Button from '@material-ui/core/Button';  
import Menu from '@material-ui/core/Menu';  
import MenuItem from '@material-ui/core/MenuItem';  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom'
  
export default function GlobalAppBar() {  
        const [anchorEl, open] = React.useState(null);  
        const handleClick = event => {  
                open(event.currentTarget);  
        };  
  
        const handleClose = () => {  
                open(null);  
        };  
        return (  
                <>  
                        <AppBar position="sticky"> 
                        <Toolbar>
                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton> 
                            <Typography variant="h4" >
                                YOURSHIRT   |   Verkauf & Versand      
                            </Typography>

                            <ButtonGroup style={{position: 'absolute', right: 20}}size="small" color="primary" aria-label="outlined primary button group">
                            <Button component={Link} to="/newcustomer" color="inherit">Neuer Kunde</Button>
                            <Button  component={Link} to="/neworder" color="inherit">Neue Bestellung</Button>
                            <Button component={Link} to="/status" color="inherit">Statusabfrage</Button>
                            <Button  component={Link} to="/booking" color="inherit">Auslagerung</Button>
                            <Button  color="inherit">Prüfung</Button>
                            </ButtonGroup>

                            </Toolbar>
                        </AppBar>  
                        <div>  
                                
                                <Menu  
                                        id="Menu"  
                                        anchorEl={anchorEl}  
                                        keepMounted  
                                        open={Boolean(anchorEl)}  
                                        onClose={handleClose}  
                                >  
                                        <MenuItem component={Link} to="/home" onClick={handleClose}>HOME</MenuItem>  
                                        <MenuItem component={Link} to="/status" onClick={handleClose}>Verkauf & Versand</MenuItem>  
                                        <MenuItem onClick={handleClose}>Produktion</MenuItem>  
                                        <MenuItem onClick={handleClose}>Mawi</MenuItem>  
                                </Menu>  
                        </div>  

                        
                </>  
        );  
}  