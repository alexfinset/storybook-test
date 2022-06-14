import { merge } from 'lodash';
import { Theme } from '@mui/material/styles';
import Button from './Button';
// import IconButton from './IconButton';
// import ButtonGroup from './ButtonGroup';
// import ToggleButton from './ToggleButton';
// import LoadingButton from './LoadingButton';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Button(theme),
    // IconButton(theme),
    // ButtonGroup(theme),
    // ToggleButton(theme),
    // LoadingButton(theme)
  );
}
