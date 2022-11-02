import { Stack, Typography } from '@mui/material';
import colors from '../../../colors';

interface Props {
  heading: string;
  description: string;
  config: any;
}

const TextBox = ({ config, heading, description }: Props) => {
  return (
    <Stack direction="column" rowGap={2}>
      <Typography
        variant="h3"
        sx={{
          fontSize: config.subHeading,
          color: '#1b1b1b',
          fontWeight: '600',
        }}
      >
        {heading}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: config.text,
          color: '#1b1b1b',
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default TextBox;
