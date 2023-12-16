export const SET_THEME = 'SET_THEME';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';
export const INCREASE_FONT_SIZE = 'INCREASE_FONT_SIZE';
export const DECREASE_FONT_SIZE = 'DECREASE_FONT_SIZE';
export const SET_SETTINGS_IS_OPEN = 'SET_SETTINGS_IS_OPEN';

export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const showNotification = () => ({ type: SHOW_NOTIFICATION });
export const closeNotification = () => ({ type: CLOSE_NOTIFICATION });
export const increaseFontSize = (num) => ({ type: INCREASE_FONT_SIZE, payload: num });
export const decreaseFontSize = (num) => ({ type: DECREASE_FONT_SIZE, payload: num });
export const setSettingsIsOpen = (isOpen) => ({ type: SET_SETTINGS_IS_OPEN, payload: isOpen })
