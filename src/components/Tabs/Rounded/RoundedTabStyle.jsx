const style = theme => ({
  root: {
    textTransform: 'uppercase',
    minWidth: 150,
    maxWidth: 300,
    minHeight: 50,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    fontSize: '.9rem',
    backgroundColor: theme.palette.grey[400],
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    '&:hover': {
      '&:not($selected)': {
        backgroundColor: theme.palette.grey[500]
      }
    }
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    fontWeight: '800'
  },
  wrapper: {
    flexDirection: 'row',
    '& .MuiSvgIcon-root': {
      marginRight: 10,
      fontSize: '1.7rem'
    }
  }
})

export default style