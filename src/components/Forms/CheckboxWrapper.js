import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: props => props.hasError ? 'red' : 'initial',
    },
    label: {
        color: props => props.hasError ? 'red' : 'initial'
    },
    labelPlacementStart: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 0
    }
});

export default ({
        input: {name, onChange, value, checked},
        meta,
        label,
        disabled,
        labelPlacement,
        color = 'primary',
        ...propsField
    }) => {

    const classes = useStyles({
        hasError: meta.error && meta.touched,
        labelPlacement
    });

    return (
        <FormControlLabel
            name={name}
            onChange={(...params) => {
                if(onChange){
                    onChange(...params)
                }
                if(propsField.onChange){
                    propsField.onChange(...params)
                }
            }}
            value={value}
            checked={checked}
            disabled={disabled}
            control={
                <Checkbox color={color} classes={classes}/>
            }
            label={label}
            labelPlacement={labelPlacement}
            classes={classes}
        />
    );
};