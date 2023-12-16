import { createStore } from 'redux';
import { SET_THEME, SHOW_NOTIFICATION, CLOSE_NOTIFICATION, INCREASE_FONT_SIZE, DECREASE_FONT_SIZE, SET_SETTINGS_IS_OPEN } from "@/redux/actions/actions";

const initialState = {
    theme: localStorage.getItem('theme'),
    isOpen: false,
    showNotification: false,
    fontSize: 16,
    num: 1
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            const newTheme = action.payload;
            localStorage.setItem('theme', newTheme);
            return { ...state, theme: action.payload };

        case SHOW_NOTIFICATION:
            return { ...state, showNotification: true };

        case CLOSE_NOTIFICATION:
            return { ...state, showNotification: false };

        case INCREASE_FONT_SIZE:
            return { ...state, fontSize: state.fontSize + action.payload };

        case DECREASE_FONT_SIZE:
            return { ...state, fontSize: state.fontSize - action.payload }

        case SET_SETTINGS_IS_OPEN:
            return { ...state, isOpen: action.payload }

        default:
            return state;
    }
};

const store = createStore(appReducer);

export default store;
