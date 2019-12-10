import {
  danger,
  success
} from '../main-theme';

const customInputStyle = theme => ({
  disabled: {
    '&:before': {
      borderColor: 'transparent !important'
    }
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#D2D2D2 !important',
      borderWidth: '1px !important'
    },
    '&:after': {
      borderColor: theme.palette.primary.main
    }
  },
  underlineError: {
    '&:after': {
      borderColor: danger.main
    }
  },
  underlineSuccess: {
    '&:after': {
      borderColor: success.main
    }
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#FFFFFF'
    },
    '&:after': {
      borderColor: '#FFFFFF'
    }
  },
  labelRoot: {
    fontFamily: theme.typography.fontFamily,
    color: '#AAAAAA !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    top: '10px',
    '& + $underline': {
      marginTop: '0px'
    }
  },
  labelRootError: {
    color: `${danger.main} !important`
  },
  labelRootSuccess: {
    color: `${success.main} !important`
  },
  formControl: {
    margin: '0 0 17px 0',
    paddingTop: '27px',
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: '#495057'
    }
  },
  input: {
    color: '#495057',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: theme.typography.fontFamily,
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1'
    },
    '&::placeholder': {
      color: '#AAAAAA'
    }
  },
  whiteInput: {
    '&,&::placeholder': {
      color: '#FFFFFF',
      opacity: '1'
    }
  }
});

export default customInputStyle;