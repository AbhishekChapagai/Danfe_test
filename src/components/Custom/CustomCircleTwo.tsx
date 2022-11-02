import React from 'react';
import colors from '../../colors';

interface Props {
    isTablet: boolean;
}

const CustomCircleTwo = ({ isTablet }: Props) => {
    {
        // For tablet or smaller sized screen
        return (
            <div
                style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '100px',
                    right: '0px',
                    border: `20px solid #FEF1E0`,
                    opacity: '0.8',
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

export default CustomCircleTwo;
