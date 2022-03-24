import { TOGGLE_SHOW_PROFILE } from "./action";


const initialValue = {
    isShow: false,
}

export const profileReducer = (state = initialValue, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_PROFILE: {
            return {
                isShow: !state.isShow,
            }
        }
        default: {
            return state;
        }
    }
}