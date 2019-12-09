import React from  'react'
import WarningRoundedIcon from '@material-ui/icons/WarningRounded'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded'

const Confidence = props => {

    const components = {
      warning: WarningRoundedIcon,
      verified: CheckCircleRoundedIcon
    };

    const SpecificIcon = components[props.iconType]

    return(
        <div>
            <div>
                <SpecificIcon fontSize="large" style={{color: props.color }}/>
            </div>
            <div>
                {props.message}
            </div>
        </div>
        )

}

export default Confidence