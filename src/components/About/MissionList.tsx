import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import colors from '../../colors';
import useDeviceWidth from '../hooks/useDeviceWidth';

const MissionList = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();
  let config = {
    color: '#1b1b1b',
    fontSize: isMobileSize ? '12px' : isTabletSize ? '15px' : '30px',
  };

  let textStyles = {
    color: config.color,
    fontSize: config.fontSize,
  };

  return (
    <Box>
      <List>
        <Stack direction="column">
          <ListItem>
            <Typography variant="body1" sx={textStyles}>
              01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" sx={textStyles}>
              02. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" sx={textStyles}>
              03. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" sx={textStyles}>
              04. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ListItem>
        </Stack>
      </List>
    </Box>
  );
};

export default MissionList;
