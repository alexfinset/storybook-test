// ----------------------------------------------------------------------

export type ThemeMode = 'light' | 'dark';
export type ThemeDirection = 'rtl' | 'ltr';
export type ThemeColor = 'default' | 'purple' | 'cyan' | 'blue' | 'orange' | 'red';

export type TLayoutSetting = {
  headerHeight?: number;
  footerHeight?: number;
  navigationHeight?: number;
};

export type SettingsContextProps = {
  themeMode: ThemeMode;
  themeDirection: ThemeDirection;
  themeColor: ThemeColor;
  themeStretch: boolean;
  setColor: {
    name: string;
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    contrastText: string;
  };
  colorOption: {
    name: string;
    value: string;
  }[];
  headerHeight: number;
  footerHeight: number;
  navigationHeight: number;
  navigationOpen: boolean;
  isMyDataConnected: boolean;

  onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleStretch: VoidFunction;
  onChangeLayout: (layout: TLayoutSetting) => void;
  onSetNavigation: (open: boolean) => void;
};
