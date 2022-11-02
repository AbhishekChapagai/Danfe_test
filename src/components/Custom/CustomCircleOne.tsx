import React from 'react';
import colors from '../../colors';

interface Props {
    isTablet: boolean;
}

const CustomCircleOne = ({ isTablet }: Props) => {
    {
        // For tablet or smaller sized screen
        return (
            <div
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '240px',
                    left: '0',
                    border: `5px solid #FEF1E0`,
                    // backgroundColor: '#000000 ',
                    opacity: '0.9',
                    zIndex: '-1',
                    overflow: 'hidden'
                }}

            >
            </div>
        );
    }

    // For Desktop
    return (
        <div
            style={{
                width: '640px',
                height: '640px',
                borderRadius: '50%',
                position: 'absolute',
                bottom: '-180px',
                right: '0px',
                backgroundColor: '#FEF1E0',
                opacity: '0.9',
                zIndex: '-100',
            }}
        ></div>
    );
};

export default CustomCircleOne;
