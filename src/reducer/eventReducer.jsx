export const eventReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload,
      };
    case 'SET_FILTERED_EVENTS':
      return {
        ...state,
        filteredEvents: action.payload,
      };

    case 'SET_SELECTED_START_DATE':
      return {
        ...state,
        selectedStartDate: action.payload,
      };
    case 'SET_SELECTED_END_DATE':
      return {
        ...state,
        selectedEndDate: action.payload,
      };
    case 'SET_LAST_DETAIL_PAGE':
      return {
        ...state,
        lastDetailPage: action.payload,
      };
    case 'SET_IS_FILTERED':
      return {
        ...state,
        isFiltered: action.payload,
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        isFiltered: false,
        filteredEvents: [],
        selectedCity: '',
        selectedCategory: '',
        selectedStartDate: '',
        selectedEndDate: '',
        filterBarOpen: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_FILTER_BAR_OPEN':
      return {
        ...state,
        filterBarOpen: action.payload,
      };
    case 'SET_LAST_PLACE_PAGE':
      return {
        ...state,
        lastPlacePage: action.payload,
      };
    case 'SET_SELECTED_CITY':
      return {
        ...state,
        selectedCity: action.payload,
      };
    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case 'SET_CURRENT_NAV':
      return {
        ...state,
        currentNav: action.payload,
      };
    default:
      return state;
  }
};
