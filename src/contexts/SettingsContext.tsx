import { ReactNode, createContext, useState } from "react";
// hooks
import useLocalStorage from "../hooks/useLocalStorage";
// theme
import palette from "../theme/palette";
// @type
import {
  ThemeMode,
  ThemeDirection,
  ThemeColor,
  SettingsContextProps,
  TLayoutSetting,
} from "../@types/settings";
// import { useTheme } from '@mui/system';
// import { logger } from 'utils';

// ----------------------------------------------------------------------

const PRIMARY_COLOR = [
  // DEFAULT
  {
    name: "default",
    ...palette.light.primary,
  },
  // PURPLE
  {
    name: "purple",
    lighter: "#EBD6FD",
    light: "#B985F4",
    main: "#f5f4fd",
    dark: "#9c8fee",
    darker: "#200A69",
    contrastText: "#fff",
  },
  // CYAN
  {
    name: "cyan",
    lighter: "#D1FFFC",
    light: "#76F2FF",
    main: "#1CCAFF",
    dark: "#0E77B7",
    darker: "#053D7A",
    contrastText: palette.light.grey[800],
  },
  // BLUE
  {
    name: "blue",
    lighter: "#CCDFFF",
    light: "#6697FF",
    main: "#0045FF",
    dark: "#0027B7",
    darker: "#00137A",
    contrastText: "#fff",
  },
  // ORANGE
  {
    name: "orange",
    lighter: "#FEF4D4",
    light: "#FED680",
    main: "#fda92d",
    dark: "#B66816",
    darker: "#793908",
    contrastText: palette.light.grey[800],
  },
  // RED
  {
    name: "red",
    lighter: "#FFE3D5",
    light: "#FFC1AC",
    main: "#f9e6ec",
    dark: "#c5053e",
    darker: "#7A0930",
    contrastText: "#fff",
  },
];

function SetColor(themeColor: ThemeColor) {
  let color;
  const DEFAULT = PRIMARY_COLOR[0];
  const PURPLE = PRIMARY_COLOR[1];
  const CYAN = PRIMARY_COLOR[2];
  const BLUE = PRIMARY_COLOR[3];
  const ORANGE = PRIMARY_COLOR[4];
  const RED = PRIMARY_COLOR[5];

  switch (themeColor) {
    case "purple":
      color = PURPLE;
      break;
    case "cyan":
      color = CYAN;
      break;
    case "blue":
      color = BLUE;
      break;
    case "orange":
      color = ORANGE;
      break;
    case "red":
      color = RED;
      break;
    default:
      color = DEFAULT;
  }
  return color;
}

const initialState: SettingsContextProps = {
  themeMode: "light",
  themeDirection: "ltr",
  themeColor: "default",
  themeStretch: false,
  onChangeMode: () => {},
  onChangeDirection: () => {},
  onChangeColor: () => {},
  onToggleStretch: () => {},
  onChangeLayout: () => {},
  onSetNavigation: () => {},
  setColor: PRIMARY_COLOR[0],
  colorOption: [],
  headerHeight: 0,
  footerHeight: 0,
  navigationHeight: 0,
  navigationOpen: false,
  isMyDataConnected: false,
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: "light",
    themeDirection: "ltr",
    themeColor: "default",
    themeStretch: false,
  });

  const [layoutSettings, setLayoutSettings] = useState<TLayoutSetting>({
    headerHeight: 0,
    footerHeight: 0,
    navigationHeight: 0,
  });

  function onSetNavigation(open: boolean) {
    setNavigationOpen(open);
  }

  function onChangeLayout(layout: TLayoutSetting) {
    setLayoutSettings({ ...layoutSettings, ...layout });
  }

  const onChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: (event.target as HTMLInputElement).value as ThemeMode,
    });
  };

  const onChangeDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeDirection: (event.target as HTMLInputElement)
        .value as ThemeDirection,
    });
  };

  const onChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeColor: (event.target as HTMLInputElement).value as ThemeColor,
    });
  };

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };
  const onMyDataChanged = (isConnected: boolean) => {
    setSettings({
      ...settings,
      isMyDataConnected: isConnected,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        navigationOpen,
        ...layoutSettings,
        ...settings,
        // Mode
        onChangeMode,
        // Direction
        onChangeDirection,
        // Color
        onChangeColor,
        setColor: SetColor(settings.themeColor),
        colorOption: PRIMARY_COLOR.map((color) => ({
          name: color.name,
          value: color.main,
        })),
        // Stretch
        onToggleStretch,
        onChangeLayout,
        onSetNavigation,
        onMyDataChanged,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
