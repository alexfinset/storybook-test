import { Theme } from '@mui/material/styles';
import { COLORS } from '../palette';
import typography from '../typography';

// ----------------------------------------------------------------------
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    contained: true;
    outlined: true;
    text: true;
    unstyled: true;
  }
}

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          },
          '&:active': {
            boxShadow: 'none'
          },
          '&.Mui-disabled': {
            backgroundColor: COLORS.actionDisabledBackground,
            color: COLORS.actionDisabled
          }
        },
        sizeLarge: {
          height: 52,
          borderRadius: '12px'
        },
        sizeMedium: {
          height: 36,
          borderRadius: '8px'
        },
        sizeSmall: {
          height: 32,
          borderRadius: '6px'
        }
      },
      variants: [
        // CONTAINED - LARGE - PRIMARY
        {
          props: { variant: 'contained', size: 'large', color: 'primary' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: COLORS.primary500,
            color: COLORS.primaryContrast,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.primary500
            },
            '&:active': {
              background: COLORS.primaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - MEDIUM - PRIMARY
        {
          props: { variant: 'contained', size: 'medium', color: 'primary' },
          style: {
            padding: '6px 16px',
            backgroundColor: COLORS.primary500,
            color: COLORS.primaryContrast,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.primary500
            },
            '&:active': {
              background: COLORS.primaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - SMALL - PRIMARY
        {
          props: { variant: 'contained', size: 'small', color: 'primary' },
          style: {
            padding: '5px 12px',
            backgroundColor: COLORS.primary500,
            color: COLORS.primaryContrast,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.primary500
            },
            '&:active': {
              background: COLORS.primaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - LARGE - SECONDARY
        {
          props: { variant: 'contained', size: 'large', color: 'secondary' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: COLORS.secondaryButtonMain,
            color: COLORS.secondaryButtonContrast,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.secondaryButtonMain
            },
            '&:active': {
              background: COLORS.secondaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - MEDIUM - SECONDARY
        {
          props: { variant: 'contained', size: 'medium', color: 'secondary' },
          style: {
            padding: '6px 16px',
            backgroundColor: COLORS.secondaryButtonMain,
            color: COLORS.secondaryButtonContrast,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.secondaryButtonMain
            },
            '&:active': {
              background: COLORS.secondaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - SMALL - SECONDARY
        {
          props: { variant: 'contained', size: 'small', color: 'secondary' },
          style: {
            padding: '5px 12px',
            backgroundColor: COLORS.secondaryButtonMain,
            color: COLORS.secondaryButtonContrast,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.secondaryButtonMain
            },
            '&:active': {
              background: COLORS.secondaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - LARGE - GRAY
        {
          props: { variant: 'contained', size: 'large', color: 'gray' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: COLORS.grey100,
            color: COLORS.grey600,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.grey100
            },
            '&:active': {
              background: COLORS.grey200
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - MEDIUM - GRAY
        {
          props: { variant: 'contained', size: 'medium', color: 'gray' },
          style: {
            padding: '6px 16px',
            backgroundColor: COLORS.grey100,
            color: COLORS.grey600,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.grey100
            },
            '&:active': {
              background: COLORS.grey200
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - SMALL - GRAY
        {
          props: { variant: 'contained', size: 'small', color: 'gray' },
          style: {
            padding: '5px 12px',
            backgroundColor: COLORS.grey100,
            color: COLORS.grey600,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.grey100
            },
            '&:active': {
              background: COLORS.grey200
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - LARGE - RED
        {
          props: { variant: 'contained', size: 'large', color: 'red' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: COLORS.secondaryButtonMain,
            color: COLORS.redMain,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.secondaryButtonMain
            },
            '&:active': {
              background: COLORS.secondaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - MEDIUM - RED
        {
          props: { variant: 'contained', size: 'medium', color: 'red' },
          style: {
            padding: '6px 16px',
            backgroundColor: COLORS.secondaryButtonMain,
            color: COLORS.redMain,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.secondaryButtonMain
            },
            '&:active': {
              background: COLORS.secondaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // CONTAINED - SMALL - RED
        {
          props: { variant: 'contained', size: 'small', color: 'red' },
          style: {
            padding: '5px 12px',
            backgroundColor: COLORS.secondaryButtonMain,
            color: COLORS.redMain,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: COLORS.secondaryButtonMain
            },
            '&:active': {
              background: COLORS.secondaryContainedHoverBackground
            },
            '&:disabled': {
              backgroundColor: COLORS.actionDisabledBackground,
              color: COLORS.actionDisabled
            }
          }
        },
        // OUTLINED - LARGE - PRIMARY
        {
          props: { variant: 'outlined', size: 'large', color: 'primary' },
          style: {
            padding: '12.5px 22px',
            border: '1px solid rgba(46, 155, 255, 0.5)',
            backgroundColor: 'transparent',
            color: COLORS.secondaryButtonContrast,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              border: '1px solid rgba(46, 155, 255, 0.5)',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(46, 155, 255, 0.5)',
              background: COLORS.primaryOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // OUTLINED - MEDIUM - PRIMARY
        {
          props: { variant: 'outlined', size: 'medium', color: 'primary' },
          style: {
            padding: '6px 16px',
            border: '1px solid rgba(46, 155, 255, 0.5)',
            backgroundColor: 'transparent',
            color: COLORS.secondaryButtonContrast,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              border: '1px solid rgba(46, 155, 255, 0.5)',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(46, 155, 255, 0.5)',
              background: COLORS.primaryOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // OUTLINED - SMALL - PRIMARY
        {
          props: { variant: 'outlined', size: 'small', color: 'primary' },
          style: {
            padding: '5px 12px',
            border: '1px solid rgba(46, 155, 255, 0.5)',
            backgroundColor: 'transparent',
            color: COLORS.secondaryButtonContrast,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              border: '1px solid rgba(46, 155, 255, 0.5)',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(46, 155, 255, 0.5)',
              background: COLORS.primaryOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // OUTLINED - LARGE - SECONDARY
        {
          props: { variant: 'outlined', size: 'large', color: 'secondary' },
          style: {
            padding: '12.5px 22px',
            border: '1px solid rgba(58, 209, 169, 0.5)',
            backgroundColor: 'transparent',
            color: COLORS.secondary500,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              border: '1px solid rgba(58, 209, 169, 0.5)',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(58, 209, 169, 0.5)',
              background: COLORS.secondaryOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // OUTLINED - MEDIUM - SECONDARY
        {
          props: { variant: 'outlined', size: 'medium', color: 'secondary' },
          style: {
            padding: '6px 16px',
            border: '1px solid rgba(58, 209, 169, 0.5)',
            backgroundColor: 'transparent',
            color: COLORS.secondary500,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              border: '1px solid rgba(58, 209, 169, 0.5)',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(58, 209, 169, 0.5)',
              background: COLORS.secondaryOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // OUTLINED - SMALL - SECONDARY
        {
          props: { variant: 'outlined', size: 'small', color: 'secondary' },
          style: {
            padding: '5px 12px',
            border: '1px solid rgba(58, 209, 169, 0.5)',
            backgroundColor: 'transparent',
            color: COLORS.secondary500,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              border: '1px solid rgba(58, 209, 169, 0.5)',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(58, 209, 169, 0.5)',
              background: COLORS.secondaryOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // OUTLINED - LARGE - GRAY
        {
          props: { variant: 'outlined', size: 'large', color: 'gray' },
          style: {
            padding: '12.5px 22px',
            border: '1px solid #D6D7DB',
            backgroundColor: 'transparent',
            color: COLORS.grey500,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              border: '1px solid #D6D7DB',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(158, 158, 158, 0.2)',
              background: COLORS.grayScaleOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // OUTLINED - MEDIUM - GRAY
        {
          props: { variant: 'outlined', size: 'medium', color: 'gray' },
          style: {
            padding: '6px 16px',
            border: '1px solid #D6D7DB',
            backgroundColor: 'transparent',
            color: COLORS.grey500,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              border: '1px solid #D6D7DB',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(158, 158, 158, 0.2)',
              background: COLORS.grayScaleOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // OUTLINED - SMALL - GRAY
        {
          props: { variant: 'outlined', size: 'small', color: 'gray' },
          style: {
            padding: '5px 12px',
            border: '1px solid #D6D7DB',
            backgroundColor: 'transparent',
            color: COLORS.grey500,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              border: '1px solid #D6D7DB',
              backgroundColor: 'transparent'
            },
            '&:active': {
              border: '1px solid rgba(158, 158, 158, 0.2)',
              background: COLORS.grayScaleOutlinedHoverBackground
            },
            '&:disabled': {
              border: '1px solid #EFEFF1',
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - LARGE - PRIMARY
        {
          props: { variant: 'text', size: 'large', color: 'primary' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: 'transparent',
            color: COLORS.secondaryButtonContrast,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.primaryOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - MEDIUM - PRIMARY
        {
          props: { variant: 'text', size: 'medium', color: 'primary' },
          style: {
            padding: '6px 16px',
            backgroundColor: 'transparent',
            color: COLORS.secondaryButtonContrast,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.primaryOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - SMALL - PRIMARY
        {
          props: { variant: 'text', size: 'small', color: 'primary' },
          style: {
            padding: '5px 12px',
            backgroundColor: 'transparent',
            color: COLORS.secondaryButtonContrast,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.primaryOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - LARGE - SECONDARY
        {
          props: { variant: 'text', size: 'large', color: 'secondary' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: 'transparent',
            color: COLORS.secondary500,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.secondaryOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - MEDIUM - SECONDARY
        {
          props: { variant: 'text', size: 'medium', color: 'secondary' },
          style: {
            padding: '6px 16px',
            backgroundColor: 'transparent',
            color: COLORS.secondary500,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.secondaryOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - SMALL - SECONDARY
        {
          props: { variant: 'text', size: 'small', color: 'secondary' },
          style: {
            padding: '5px 12px',
            backgroundColor: 'transparent',
            color: COLORS.secondary500,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.secondaryOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - LARGE - GRAY
        {
          props: { variant: 'text', size: 'large', color: 'gray' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: 'transparent',
            color: COLORS.grey500,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.grayScaleOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - MEDIUM - GRAY
        {
          props: { variant: 'text', size: 'medium', color: 'gray' },
          style: {
            padding: '6px 16px',
            backgroundColor: 'transparent',
            color: COLORS.grey500,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.grayScaleOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - SMALL - GRAY
        {
          props: { variant: 'text', size: 'small', color: 'gray' },
          style: {
            padding: '5px 12px',
            backgroundColor: 'transparent',
            color: COLORS.grey500,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.grayScaleOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - LARGE - RED
        {
          props: { variant: 'text', size: 'large', color: 'red' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: 'transparent',
            color: COLORS.redMain,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.redOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - MEDIUM - RED
        {
          props: { variant: 'text', size: 'medium', color: 'red' },
          style: {
            padding: '6px 16px',
            backgroundColor: 'transparent',
            color: COLORS.redMain,
            borderRadius: 8,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.redOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // TEXT - SMALL - RED
        {
          props: { variant: 'text', size: 'small', color: 'red' },
          style: {
            padding: '5px 12px',
            backgroundColor: 'transparent',
            color: COLORS.redMain,
            borderRadius: 6,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: COLORS.redOutlinedHoverBackground
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // UNSTYLED - LARGE
        {
          props: { variant: 'unstyled', size: 'large' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: 'transparent',
            color: COLORS.text900,
            borderRadius: 12,
            fontWeight: typography.buttonLarge.fontWeight,
            fontSize: typography.buttonLarge.fontSize,
            lineHeight: typography.buttonLarge.lineHeight,
            letterSpacing: typography.buttonLarge.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: 'transparent'
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // UNSTYLED - MEDIUM
        {
          props: { variant: 'unstyled', size: 'medium' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: 'transparent',
            color: COLORS.text900,
            borderRadius: 12,
            fontWeight: typography.buttonMedium.fontWeight,
            fontSize: typography.buttonMedium.fontSize,
            lineHeight: typography.buttonMedium.lineHeight,
            letterSpacing: typography.buttonMedium.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: 'transparent'
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        },
        // UNSTYLED - SMALL
        {
          props: { variant: 'unstyled', size: 'small' },
          style: {
            padding: '12.5px 22px',
            backgroundColor: 'transparent',
            color: COLORS.text900,
            borderRadius: 12,
            fontWeight: typography.buttonSmall.fontWeight,
            fontSize: typography.buttonSmall.fontSize,
            lineHeight: typography.buttonSmall.lineHeight,
            letterSpacing: typography.buttonSmall.letterSpacing,
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:active': {
              background: 'transparent'
            },
            '&:disabled': {
              color: COLORS.actionDisabled,
              background: 'transparent'
            }
          }
        }
      ]
    }
  };
}
