import { Button } from '@mui/material';

type ICustomButton = {
  theme?: any;
  bagcolor?: string;
  color?: string;
  border?: string;
  padding?: string;
  children?: any;
  width?: any;
  height?: any;
  marginTop?: any;
  marginRight?: any;
  margin?: any;
  fontSize?: any;
  fontFamily?: any;
};

function CustomButton({
  bagcolor,
  color,
  border,
  padding,
  children,
  width,
  height,
  marginTop,
  margin,
  fontSize,
  marginRight,
  fontFamily,

}: ICustomButton) {
  return (
    <Button
      sx={{
        backgroundColor: bagcolor,
        border: border,
        color: color,
        padding: padding,
        width: width,
        height: height,
        m: 1,
        fontSize: fontSize,
        fontFamily: fontFamily,
        margin: margin,
        marginTop: marginTop ? marginTop : 1,
        marginRight: marginRight,
        '&:hover': {
          backgroundColor: '#FA6C3E',
          color: '#ffffff'
        },
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
