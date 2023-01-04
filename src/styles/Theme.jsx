import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { vars } from 'styles/Vars';

const themes = {
  light: {
    bg1: vars['color-light-1'],
    bg2: vars['color-light-2'],
    bg3: vars['color-light-3'],
    bg4: vars['color-light-4'],
    txt1: vars['color-text-dark-1'],
    txt2: vars['color-text-dark-2'],
    txt3: vars['color-text-dark-3'],
    txt4: vars['color-text-dark-4'],
    txt5: vars['color-text-dark-5'],
    txt6: vars['color-text-dark-6'],

    SecondaryBg1: vars['color-dark-1'],
    SecondaryBg2: vars['color-dark-2'],
    SecondaryBg3: vars['color-dark-3'],
    SecondaryBg4: vars['color-dark-4'],
    SecondaryTxt1: vars['color-text-light-1'],
    SecondaryTxt2: vars['color-text-light-2'],
    SecondaryTxt3: vars['color-text-light-3'],
    SecondaryTxt4: vars['color-text-light-4'],
    SecondaryTxt5: vars['color-text-light-5'],
    SecondaryTxt6: vars['color-text-light-6'],

    txtAccent1: vars['color-accent-1'],
    txtAccent2: vars['color-accent-2'],
    txtAccent3: vars['color-accent-3'],
    txtAccent4: vars['color-accent-4'],
    txtAccent5: vars['color-accent-5'],
    txtAccent6: vars['color-accent-6'],
    txtAccent7: vars['color-accent-7'],

    neutral: vars['neutral'],
    neutralText: vars['neutralText'],
    neutral10: vars['neutral10'],
    neutral20: vars['neutral20'],
    neutral30: vars['neutral30'],
    neutral40: vars['neutral40'],
    neutral50: vars['neutral50'],
    neutral60: vars['neutral60'],
    neutral70: vars['neutral70'],
    neutral80: vars['neutral80'],
    neutral90: vars['neutral90'],
    neutral100: vars['neutral100'],
    neutral110: vars['neutral110'],
  },
  dark: {
    bg1: vars['color-dark-1'],
    bg2: vars['color-dark-2'],
    bg3: vars['color-dark-3'],
    bg4: vars['color-dark-4'],
    txt1: vars['color-text-light-1'],
    txt2: vars['color-text-light-2'],
    txt3: vars['color-text-light-3'],
    txt4: vars['color-text-light-4'],
    txt5: vars['color-text-light-5'],
    txt6: vars['color-text-light-6'],

    SecondaryBg1: vars['color-light-1'],
    SecondaryBg2: vars['color-light-2'],
    SecondaryBg3: vars['color-light-3'],
    SecondaryBg4: vars['color-light-4'],
    SecondaryTxt1: vars['color-text-dark-1'],
    SecondaryTxt2: vars['color-text-dark-1'],
    SecondaryTxt3: vars['color-text-dark-3'],
    SecondaryTxt4: vars['color-text-dark-4'],
    SecondaryTxt5: vars['color-text-dark-5'],
    SecondaryTxt6: vars['color-text-dark-6'],

    txtAccent1: vars['color-accent-1'],
    txtAccent2: vars['color-accent-2'],
    txtAccent3: vars['color-accent-3'],
    txtAccent4: vars['color-accent-4'],
    txtAccent5: vars['color-accent-5'],
    txtAccent6: vars['color-accent-6'],
    txtAccent7: vars['color-accent-7'],

    neutral: vars['neutral'],
    neutralText: vars['neutralText'],
    neutral10: vars['neutral10'],
    neutral20: vars['neutral20'],
    neutral30: vars['neutral30'],
    neutral40: vars['neutral40'],
    neutral50: vars['neutral50'],
    neutral60: vars['neutral60'],
    neutral70: vars['neutral70'],
    neutral80: vars['neutral80'],
    neutral90: vars['neutral90'],
    neutral100: vars['neutral100'],
    neutral110: vars['neutral110'],
  },
};

export const Theme = (props) => (
  <ThemeProvider theme={themes[props.theme.toLowerCase()]}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
