import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries-reducer";
import { controlsReducer } from "./controls/controls-reducer";
import { detaliReducer } from "./details/details-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detaliReducer,
});
