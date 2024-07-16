import appActions from "../actions/actions";

export interface IRootState {
  isDatePickerOpen: boolean;
}
export const initialState: IRootState = {
  isDatePickerOpen: false,
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const datePicker = (state = initialState, action: any) => {
  switch (action.type) {
    case appActions.TOGGLE_DATEPICKER_MODAL: {
      return {
        ...state,
        isDatePickerOpen: !state.isDatePickerOpen,
      };
    }
    case appActions.CLOSE_DATEPICKER_MODAL: {
      return {
        ...state,
        isDatePickerOpen: false,
      };
    }
    default:
      return state;
  }
};
