const styles = ({ palette, breakpoints }) => ({
  parameters: {
    '& > div': {
      maxWidth: '100%',

      [breakpoints.up('md')]: {
        maxWidth: 'calc(100%)',
      },

      '& > div:first-child': {
        backgroundColor: palette.grey[150],
        borderBottom: `1px solid ${palette.grey[100]}`,
      },
      '& > table': {
        backgroundColor: palette.grey[50],
        borderTop: `1px solid ${palette.grey[100]}`,
      },
    },
    '& button': {
      border: 'none',
    },
    '& span': {
      border: 'none',
    },
  },
  fabExport: {
    position: 'fixed',
    bottom: 45,
    right: 0,
    zIndex: 99999,
    marginRight: 100,
    backgroundColor: 'green',
    color: 'white',
    height: 45,
    width: 45,
  },
  button: {
    padding: '10px 20px',
    minHeight: 0,
    minWidth: 0,
    marginLeft: 15,
    border: `5px solid ${palette.primary.main}`,
  },
  buttonContainer: {
    width: 'auto',
  },
  buttonLabel: {
    fontSize: 12,
  },
  buttons: {
    marginTop: 25,
  },
  dialog: {
    padding: '20px 30px',
  },
});

export default styles;
  