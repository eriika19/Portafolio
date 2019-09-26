import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import EmailIcon from '@material-ui/icons/Email';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="GitHub" value="github" icon={<RestoreIcon />} />
      <BottomNavigationAction label="LinkedIn" value="linkedin" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Twitter" value="twitter" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Proyectos" value="proyectos" icon={<FolderIcon />} />
      <BottomNavigationAction label="Email" value="email" icon={<EmailIcon />} />
    </BottomNavigation>
  );
}