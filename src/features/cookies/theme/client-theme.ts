import { Theme } from "@/features/theme/types";
import { IThemeCookie } from "@/features/cookies/theme/interface";

import { isThemeAvailable } from "@/features/theme/utils";

import { COOKIE_NAMES } from "../config";
import { clientCookie } from "../client-cookie";
import { DEFAULT_THEME } from "@/features/theme/config";

function getTheme(): Theme {
  const theme = clientCookie.get(COOKIE_NAMES.THEME);

  if (theme && isThemeAvailable(theme)) {
    return theme;
  }

  return DEFAULT_THEME;
}

function setTheme(theme: Theme) {
  if (!isThemeAvailable(theme)) return;

  clientCookie.set(COOKIE_NAMES.THEME, theme, { expires: 365 });
}

export const themeCookieClient: IThemeCookie = {
  get: getTheme,
  set: setTheme,
};
