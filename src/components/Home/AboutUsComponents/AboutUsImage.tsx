import img from '../../../images/graduation.jpg';
import useDeviceWidth from '../../hooks/useDeviceWidth';

const AboutUsImage = () => {
  const {
    isMobileSize,
    isTabletSize,
    isDesktopSize
  } = useDeviceWidth();



  return (
    <img
      style={{
        width: `${isMobileSize ? '100%' : isTabletSize ? '100%' : '50%'}`,
        height: `${isMobileSize ? '250px' : isTabletSize ? '370px' : '400px'}`,
        borderRadius: '0.5rem',
        backgroundPosition: 'center',
        margin: '0.5rem',
        objectFit: 'cover'
      }}
      src={img}
      alt="Graduation"
      data-aos="zoom-out"
    />
  );
};

export default AboutUsImage;
