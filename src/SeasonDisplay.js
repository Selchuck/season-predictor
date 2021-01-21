import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer:{
        text: 'Man, it\'s baking out there! Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burrr, oh, boy, it\'s cold! Where is my electric blanket',
        iconName: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}> 
            <i className={`icon-top-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-bottom-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;