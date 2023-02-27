import AccountCircleIcon from '@suid/icons-material/AccountCircle';
import Divider from '@suid/material/Divider';
import IconButton from '@suid/material/IconButton';
import Menu from '@suid/material/Menu';
import MenuItem from '@suid/material/MenuItem';
import { Component, createSignal } from 'solid-js';
import Link from '../../atoms/Link';

export const UserMenu: Component = () => {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton onClick={handleClick} sx={{ padding: 0 }}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl()}
        open={Boolean(anchorEl())}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/user/profile">Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/user/settings">Settings</Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
