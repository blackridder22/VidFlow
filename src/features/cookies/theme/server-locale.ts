import { Theme } from "@/features/theme/types";
import { IThemeCookie } from "@/features/cookies/theme/interface";

import { isThemeAvailable } from "@/features/theme/utils";

import { COOKIE_NAMES } from "../config";
import { serverCookie } from "../server-cookie";
import { DEFAULT_THEME } from "@/features/theme/config";

async function getThemeServer(): Promise<Theme> {
  const theme = await serverCookie.get(COOKIE_NAMES.THEME);

  if (theme && isThemeAvailable(theme)) {
    return theme;
  }

  return DEFAULT_THEME;
}

async function setThemeServer(theme: Theme) {
  if (!isThemeAvailable(theme)) return;

  await serverCookie.set(COOKIE_NAMES.THEME, theme, { expires: 365 });
}

export const themeCookieServer: IThemeCookie = {
  get: getThemeServer,
  set: setThemeServer,
};
