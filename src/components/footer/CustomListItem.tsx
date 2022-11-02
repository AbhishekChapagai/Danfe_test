import { ListItem, Typography } from '@mui/material';

interface Props {
  icon: any;
  text: string;
}

const CustomListItem = ({ icon, text }: Props) => {
  return (
    <ListItem sx={{ backgroundColor: '', display: 'flex', alignItems: 'start', color: 'gray' }}>
      {icon}&nbsp;
      <Typography variant="body1" sx={{ fontSize: '14px' }}>
        {text}
      </Typography>
    </ListItem>
  );
};

export default CustomListItem;
