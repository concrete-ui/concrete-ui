import { defaultTheme } from './defaultTheme';
import { Theme } from '@concrete-ui/types';
import {
  createContext,
  ParentComponent,
  useContext,
  createComponent,
} from "solid-js";

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider: ParentComponent<{ theme: Theme }> = (props) => {
  return createComponent(ThemeContext.Provider, {
    value: props.theme,
    get children() {
      return props.children;
    },
  });
};

export function useTheme() {
  return useContext(ThemeContext);
}
