import { NavLink } from '@ui';
import { ButtonGroup as ButtonGroupMUI } from '@mui/material';

export function ButtonGroup() {
  return (
    <ButtonGroupMUI component="nav" sx={{ display: 'flex', gap: 2 }}>
      <NavLink to="/hotels" variant="contained">
        Hotels
      </NavLink>
      <NavLink to="/about" variant="contained">
        About
      </NavLink>
    </ButtonGroupMUI>
  );
}

