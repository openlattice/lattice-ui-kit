export const styles = (theme) => {
  const backgroundColor =
    theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  const deleteIconColor = alpha(theme.palette.text.primary, 0.26);

  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none', // Remove `button` border
      padding: 0, // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity,
        pointerEvents: 'none',
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12),
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark,
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10),
      },
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24,
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &$focusVisible': {
        backgroundColor: emphasize(backgroundColor, 0.08),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
      },
    },
    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &$focusVisible': {
        backgroundColor: emphasize(theme.palette.primary.main, 0.08),
      },
    },
    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &$focusVisible': {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.08),
      },
    },
    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&$focusVisible': {
        backgroundColor: emphasize(backgroundColor, 0.08),
      },
    },
    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&$focusVisible': {
        backgroundColor: emphasize(theme.palette.primary.main, 0.2),
      },
    },
    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&$focusVisible': {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.2),
      },
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: `1px solid ${
        theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      }`,
      '&$focusVisible, $clickable&:hover': {
        backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      },
      '& $avatar': {
        marginLeft: 4,
      },
      '& $avatarSmall': {
        marginLeft: 2,
      },
      '& $icon': {
        marginLeft: 4,
      },
      '& $iconSmall': {
        marginLeft: 2,
      },
      '& $deleteIcon': {
        marginRight: 5,
      },
      '& $deleteIconSmall': {
        marginRight: 3,
      },
    },
    /* Styles applied to the root element if `variant="filled"`. */
    filled: {},
    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      '&$focusVisible, $clickable&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      },
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      '&$focusVisible, $clickable&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      },
    },
    // TODO v5: remove
    /* Styles applied to the `avatar` element. */
    avatar: {},
    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},
    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},
    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},
    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6,
    },
    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4,
    },
    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit',
    },
    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit',
    },
    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap',
    },
    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8,
    },
    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      fontSize: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: alpha(deleteIconColor, 0.4),
      },
    },
    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4,
    },
    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="filled"`. */
    deleteIconColorPrimary: {
      color: alpha(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText,
      },
    },
    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="filled"`. */
    deleteIconColorSecondary: {
      color: alpha(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText,
      },
    },
    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: alpha(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main,
      },
    },
    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: alpha(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main,
      },
    },
    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {},
  };
};

export default styles;
