import { COLORS } from './palette';
// ----------------------------------------------------------------------

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
    caption1: true;
    caption2: true;
    inputLabel: true;
    helperText: true;
    inputTextLarge: true;
    inputTextMedium: true;
    inputTextSmall: true;
    avatarInitials: true;
    chip: true;
    tooltip: true;
    tableHeader: true;
    tabLarge: true;
    tabMedium: true;
    alertTitle: true;
    badgeLabelSmall: true;
    badgeLabelMedium: true;
    badgeLabelLarge: true;
    link: true;
  }
}

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const FONT_PRIMARY =
  "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  h1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(30),
    color: COLORS.text900
  },
  h2: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    color: COLORS.text900,
    letterSpacing: -0.4
  },
  h3: {
    fontWeight: 600,
    lineHeight: 32 / 22,
    fontSize: pxToRem(22),
    color: COLORS.text900
  },
  h4: {
    fontWeight: 600,
    lineHeight: 30 / 21,
    fontSize: pxToRem(21),
    color: COLORS.text900
  },
  h5: {
    fontWeight: 600,
    lineHeight: 26 / 19,
    fontSize: pxToRem(19),
    color: COLORS.text900
  },
  h6: {
    fontWeight: 600,
    lineHeight: 24 / 17,
    fontSize: pxToRem(17),
    color: COLORS.text900
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: -0.2,
    fontSize: pxToRem(16),
    color: COLORS.text900
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 21 / 14,
    letterSpacing: -0.2,
    fontSize: pxToRem(14),
    color: COLORS.text900
  },
  body1: {
    fontWeight: 400,
    lineHeight: 22 / 16,
    letterSpacing: -0.2,
    fontSize: pxToRem(16),
    color: COLORS.text900
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: -0.2,
    fontSize: pxToRem(14),
    color: COLORS.text900
  },
  body3: {
    fontWeight: 400,
    lineHeight: 20 / 13,
    letterSpacing: -0.2,
    fontSize: pxToRem(13),
    color: COLORS.text900
  },
  buttonLarge: {
    fontWeight: 600,
    lineHeight: 27 / 17,
    fontSize: pxToRem(17),
    color: COLORS.text900,
    letterSpacing: -0.4
  },
  buttonMedium: {
    fontWeight: 500,
    lineHeight: 24 / 15,
    letterSpacing: -0.2,
    fontSize: pxToRem(15),
    color: COLORS.text900
  },
  buttonSmall: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    letterSpacing: -0.2,
    fontSize: pxToRem(14),
    color: COLORS.text900
  },
  overline: {
    fontWeight: 400,
    lineHeight: 32 / 12,
    letterSpacing: 1,
    fontSize: pxToRem(12),
    color: COLORS.text900
  },
  caption1: {
    fontWeight: 400,
    lineHeight: 20 / 13,
    letterSpacing: -0.2,
    fontSize: pxToRem(13),
    color: COLORS.text900
  },
  caption2: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: -0.2,
    fontSize: pxToRem(12),
    color: COLORS.text900
  },
  inputLabel: {
    fontWeight: 500,
    lineHeight: 1,
    fontSize: pxToRem(15),
    color: COLORS.text900
  },
  helperText: {
    fontWeight: 400,
    lineHeight: 20 / 12,
    fontSize: pxToRem(12),
    color: COLORS.text900
  },
  inputTextLarge: {
    fontWeight: 400,
    lineHeight: 28 / 24,
    fontSize: pxToRem(24),
    color: COLORS.text900
  },
  inputTextMedium: {
    fontWeight: 400,
    lineHeight: 24 / 17,
    fontSize: pxToRem(17),
    color: COLORS.text900
  },
  inputTextSmall: {
    fontWeight: 400,
    lineHeight: 24 / 15,
    fontSize: pxToRem(15),
    color: COLORS.text900
  },
  avatarInitials: {
    fontWeight: 400,
    lineHeight: 1,
    fontSize: pxToRem(20),
    color: COLORS.text900
  },
  chip: {
    fontWeight: 400,
    lineHeight: 18 / 13,
    fontSize: pxToRem(13),
    color: COLORS.text900
  },
  tooltip: {
    fontWeight: 500,
    lineHeight: 18 / 13,
    fontSize: pxToRem(13),
    color: COLORS.text900
  },
  tableHeader: {
    fontWeight: 600,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    color: COLORS.text900
  },
  tabLarge: {
    fontWeight: 600,
    lineHeight: 27 / 17,
    fontSize: pxToRem(17),
    color: COLORS.text900,
    letterSpacing: -0.2
  },
  tabMedium: {
    fontWeight: 600,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    color: COLORS.text900,
    letterSpacing: -0.2
  },
  alertTitle: {
    fontWeight: 500,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    color: COLORS.text900
  },
  badgeLabelSmall: {
    fontWeight: 400,
    lineHeight: 14 / 11,
    fontSize: pxToRem(11),
    color: COLORS.text900
  },
  badgeLabelMedium: {
    fontWeight: 500,
    lineHeight: 14 / 12,
    fontSize: pxToRem(12),
    color: COLORS.text900
  },
  badgeLabelLarge: {
    fontWeight: 500,
    lineHeight: 19 / 16,
    fontSize: pxToRem(16),
    color: COLORS.text900
  },
  link: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    color: COLORS.text900
    // textTransform: 'underline'
  }
} as const;

export default typography;
