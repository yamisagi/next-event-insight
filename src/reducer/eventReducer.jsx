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
    case 'SET_CITIES':
      return {
        ...state,
        cities: action.payload,
      };

    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
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

    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.payload,
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
        selectedDate: '',
      };
    default:
      return state;
  }
};
