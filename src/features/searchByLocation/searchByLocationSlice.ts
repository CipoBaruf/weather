import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { autocompleteLocations, getByLocation } from "./searchByLocationAPI";

interface Area {
  LocalizedName: string;
}

interface Location {
  Key: number;
  LocalizedName: string;
  AdministrativeArea: Area;
  Country: Area;
}

interface Temperature {
  Metric: {
    Value: number;
    Unit: string;
  };
}

interface CurrentDetails {
  Temperature: Temperature;
}

export interface SearchByLocationState {
  status: "idle" | "loading" | "failed";
  current: Array<CurrentDetails>;
  location: Array<Location>;
}

const initialState: SearchByLocationState = {
  status: "loading",
  current: [
    {
      Temperature: {
        Metric: {
          Value: 0,
          Unit: "",
        },
      },
    },
  ],
  location: [
    {
      Key: 0,
      LocalizedName: "",
      AdministrativeArea: { LocalizedName: "" },
      Country: { LocalizedName: "" },
    },
  ],
};

export const searchByLocationCall = createAsyncThunk(
  "searchByLocation/getByLocation",
  async (locationKey: number, thunkAPI) => {
    const response: any = await getByLocation(locationKey);
    return response.data;
  }
);

export const autocompleteLocationsCall = createAsyncThunk(
  "searchByLocation/autocompleteLocations",
  async (location: string, thunkAPI) => {
    const response: any = await autocompleteLocations(location);
    return response.data;
  }
);

export const searchByLocation = createSlice({
  name: "searchWeather",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(searchByLocationCall.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchByLocationCall.fulfilled, (state, action) => {
        state.status = "idle";
        state.current = action.payload;
      })
      .addCase(autocompleteLocationsCall.pending, (state) => {
        state.status = "loading";
      })
      .addCase(autocompleteLocationsCall.fulfilled, (state, action) => {
        state.status = "idle";
        state.location = action.payload;
      });
  },
});

export const searchedLocation = (state: RootState) =>
  state.searchWeather.current;
export const selectedLocation = (state: RootState) =>
  state.searchWeather.location;

export default searchByLocation.reducer;
