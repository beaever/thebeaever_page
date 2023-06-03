import { Theme } from '@emotion/react';

interface ColorsProps {
  palette: {
    // Red
    red10: string;
    red20: string;
    red30: string;
    red40: string;
    red50: string;
    red60: string;
    red70: string;
    red80: string;
    red90: string;
    red100: string;

    // Blue
    blue10: string;
    blue20: string;
    blue30: string;
    blue40: string;
    blue50: string;
    blue60: string;
    blue70: string;
    blue80: string;
    blue90: string;
    blue100: string;

    // Amber
    amber10: string;
    amber20: string;
    amber30: string;
    amber40: string;
    amber50: string;
    amber60: string;
    amber70: string;
    amber80: string;
    amber90: string;
    amber100: string;

    // Gray
    gray10: string;
    gray20: string;
    gray30: string;
    gray40: string;
    gray50: string;
    gray60: string;
    gray70: string;
    gray80: string;
    gray90: string;
    gray100: string;

    // Border
    basicBorder: string;
    focusBorder: string;
    transparentBorder: string;

    // tarnsparent
    transparent: string;

    // disabled
    disabled: string;
  };

  element: {
    // Primary
    primary50: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    primary700: string;
    primary800: string;
    primary900: string;

    // GrayScale
    grayScale50: string;
    grayScale100: string;
    grayScale200: string;
    grayScale300: string;
    grayScale400: string;
    grayScale500: string;
    grayScale600: string;
    grayScale700: string;
    grayScale800: string;
    grayScale900: string;

    // Alert
    warm100: string;
    warm500: string;
    suc100: string;
    suc500: string;

    // opacity
    opacity: {
      // white
      white30: string;
      white50: string;
      white70: string;

      // black
      black30: string;
      black50: string;
      black70: string;
    };
  };
}

// TODO: 세운님 작업 예정 (세운님 위와 같은 형식으로 interface 작성해주시면 되고, 궁금하신거 있으시면 언제든 연락주세요!)
// Typography
interface FontsProps {
  size: {
    size40: string;
    size35: string;
    size26: string;
    size18: string;
    size16: string;
    size14: string;
    size12: string;
  };
  weight: {
    weight100: string;
    weight200: string;
    weight300: string;
    weight400: string;
    weight500: string;
    weight600: string;
    weight700: string;
    weight800: string;
    weight900: string;
  };
  style: {
    heading1: string;
    heading2: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    body1: string;
    body2: string;
    body3: string;
    body4: string;
    body5: string;
    body6: string;
    detail1: string;
    detail2: string;
  };
}

const Colors: ColorsProps = {
  // 기본
  palette: {
    // RED
    red10: '#FFF7F7',
    red20: '#FFE7E7',
    red30: '#FFDFDF',
    red40: '#FFBEBE',
    red50: '#FF9E9E',
    red60: '#FF7D7D',
    red70: '#FF5D5D',
    red80: '#ED1C24',
    red90: '#C00707',
    red100: '#A70006',

    //BLUE
    blue10: '#eaf3ff',
    blue20: '#D9E9FF',
    blue30: '#B9D5FF',
    blue40: '#9CC2F8',
    blue50: '#7FAFF5',
    blue60: '#5394F4',
    blue70: '#3381F2',
    blue80: '#0A68EF',
    blue90: '#0759D9',
    blue100: '#004DBC',

    // AMBER
    amber10: '#FFF',
    amber20: '#FEE7DA',
    amber30: '#FEC7A8',
    amber40: '#FDA675',
    amber50: '#FC8643',
    amber60: '#FC762A',
    amber70: '#F05903',
    amber80: '#BD4603',
    amber90: '#8B3402',
    amber100: '#401801',

    // GRAYCALE
    gray10: '#FFF',
    gray20: '#FCFCFC',
    gray30: '#F7F7F7',
    gray40: '#EFEFEF',
    gray50: '#E6E6E6',
    gray60: '#ABABAB',
    gray70: '#727272',
    gray80: '#4A4A4A',
    gray90: '#2B2B2B',
    gray100: '#1A1A1A',

    // Border
    basicBorder: '#000',
    focusBorder: '#fff',
    transparentBorder: 'transparent',

    //disabled
    disabled: '#4A4A4A',

    // transparent
    transparent: 'transparent',
  },
  element: {
    // Primary
    primary50: '#FFF',
    primary100: '#FEE7DA',
    primary200: '#FEC7A8',
    primary300: '#FDA675',
    primary400: '#FC8643',
    primary500: '#FC762A',
    primary600: '#F05903',
    primary700: '#BD4603',
    primary800: '#8B3402',
    primary900: '#401801',

    // Gray Scale
    grayScale50: '#FFF',
    grayScale100: '#FCFCFC',
    grayScale200: '#F7F7F7',
    grayScale300: '#EFEFEF',
    grayScale400: '#E6E6E6',
    grayScale500: '#ABABAB',
    grayScale600: '#727272',
    grayScale700: '#4A4A4A',
    grayScale800: '#2B2B2B',
    grayScale900: '#1A1A1A',

    // ALERT
    warm100: '#FFE2E2',
    warm500: '#FF6060',
    suc100: '#C3D7FF',
    suc500: '#4850FF',

    // opacity
    opacity: {
      // white
      white30: 'background-color: #fff; opacity: 30%;',
      white50: 'background-color: #fff; opacity: 50%;',
      white70: 'background-color: #fff; opacity: 70%;',

      // black
      black30: 'background-color: #1A1A1A; opacity: 30%;',
      black50: 'background-color: #1A1A1A; opacity: 50%;',
      black70: 'background-color: #1A1A1A; opacity: 70%;',
    },
  },
};

const Fonts: FontsProps = {
  // font-size
  // [size숫자] 보다 small, medium, large, 이런식으로 구분하는게 나을거 같기도 함
  size: {
    size40: 'font-size: 40px;',
    size35: 'font-size: 52px;',
    size26: 'font-size: 26px;',
    size18: 'font-size: 18px;',
    size16: 'font-size: 16px;',
    size14: 'font-size: 14px;',
    size12: 'font-size: 12px;',
  },
  //font-weight
  weight: {
    weight100: 'font-weight:100;',
    weight200: 'font-weight:200;',
    weight300: 'font-weight:300;',
    weight400: 'font-weight:400;',
    weight500: 'font-weight:500;',
    weight600: 'font-weight:600;',
    weight700: 'font-weight:700;',
    weight800: 'font-weight:800;',
    weight900: 'font-weight:900;',
  },
  // typography style
  style: {
    heading1: 'font-size:40px; font-weight:800; line-height:54px;',
    heading2: 'font-size:35px; font-weight:700; line-height:52px;',
    title1: 'font-size:26px; font-weight:800; line-height:42px;',
    title2: 'font-size:26px; font-weight:800; line-height:42px;',
    title3: 'font-size:26px; font-weight:500; line-height:42px;',
    subtitle1: 'font-size:18px; font-weight:700; line-height:30px;',
    subtitle2: 'font-size:18px; font-weight:500; line-height:30px;',
    subtitle3: 'font-size:18px; font-weight:400; line-height:30px;',
    body1: 'font-size:16px; font-weight:700; line-height:26px;',
    body2: 'font-size:16px; font-weight:500; line-height:26px;',
    body3: 'font-size:16px; font-weight:400; line-height:26px;',
    body4: 'font-size:14px; font-weight:700; line-height:22px;',
    body5: 'font-size:14px; font-weight:500; line-height:22px;',
    body6: 'font-size:14px; font-weight:400; line-height:22px;',
    detail1: 'font-size:12px; font-weight:500; line-height:18px;',
    detail2: 'font-size:12px; font-weight:400; line-height:18px;',
  },
};

const theme: Theme = {
  Fonts,
  Colors,
};

export { Colors, Fonts, theme };
