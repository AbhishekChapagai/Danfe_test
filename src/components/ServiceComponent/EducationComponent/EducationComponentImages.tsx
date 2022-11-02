import graduation from '../../../images/graduation.jpg';
import library from '../../../images/library.jpg';
import education from '../../../images/educ.jpg';
import { Box, Card } from '@mui/material';
import useDeviceWidth from '../../hooks/useDeviceWidth';

interface Props {
  config: any;
}

const EducationComponentImages = ({ config }: Props) => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  return (
    <Box
      sx={{

        height: config.imageBoxHeight,
        width: isMobileSize ? '80%' : isTabletSize ? '50%' : isDesktopSize ? '50%' : '50%',
        backgroundColor: '', position: 'relative',
      }}

    >
      <Card className="educationImage" sx={{ backgroundColor: '', width: '60%', height: '40%', position: 'absolute', top: 0, left: 0, borderRadius: config.borderRadius, }}>
        <img
          src={graduation}
          alt="Graduation Ceremony"
          style={{
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            borderRadius: config.borderRadius,
            objectFit: 'cover', transitionDuration: '500ms', transitionTimingFunction: 'ease-in-out',

          }}
        />
      </Card>
      <Card className="educationImage" sx={{ backgroundColor: '', width: '60%', height: '40%', position: 'absolute', top: '30%', right: 0, zIndex: 1, borderRadius: config.borderRadius, }}>
        <img
          src={library}
          alt="Library"
          style={{
            height: '100%',
            width: '100%',
            zIndex: '20',
            borderRadius: config.borderRadius,
            objectFit: 'cover', transitionDuration: '500ms', transitionTimingFunction: 'ease-in-out',
          }}
        />
      </Card>

      <Card className="educationImage" sx={{ backgroundColor: '', width: '60%', height: '40%', position: 'absolute', bottom: 0, left: 0, zIndex: 0, borderRadius: config.borderRadius, }}>
        <img
          src={education}
          alt="Writing"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '100%',
            width: '100%',
            borderRadius: config.borderRadius,
            objectFit: 'cover', transitionDuration: '500ms', transitionTimingFunction: 'ease-in-out',
          }}
        />
      </Card>
    </Box >
  );
};

export default EducationComponentImages;
