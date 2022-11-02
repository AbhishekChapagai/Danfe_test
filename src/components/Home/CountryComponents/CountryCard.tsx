import { Card, CardContent, Typography } from '@mui/material';
import useDeviceWidth from '../../hooks/useDeviceWidth';

interface Props {
  countryName: string;
  image: any;
}

const CountryCard = ({ countryName, image }: Props) => {
  // If device width is tablet size or smaller then returns true
  const { isMobileSize, isTabletSize } = useDeviceWidth();
  return (
    <Card
      style={{
        width: '250px',
        textAlign: 'center',
        padding: '0.5rem 0.5rem',
        boxShadow: 'none',
        marginTop: '1.3rem',
        marginBottom: '1.3rem',
        // border: '1px solid #aaa',
      }}
    >
      <CardContent>
        <img
          src={image}
          alt="UK"
          style={{ borderRadius: '50%', width: '73%' }}
        />
      </CardContent>

      <CardContent style={{ padding: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: `${
              isMobileSize ? '16px' : isTabletSize ? '20px' : '25px'
            }`,
          }}
        >
          Study {countryName}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetor adipiscing elit
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
