import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { searchByLocationCall, autocompleteLocationsCall, searchedLocation, selectedLocation } from './searchByLocationSlice'
export function SearchByLocation() {
  const dispatch = useAppDispatch();
  const locationWeatherSelected = useAppSelector(searchedLocation);
  const locationSearched = useAppSelector(selectedLocation);

  const onInputChange = (e: any) => {
    if (e.target.value.length >= 5) {
      dispatch(autocompleteLocationsCall(e.target.value));
    }
  }
  return (
    <div>
      <h1>CURRENT LOCATION WEATHER</h1>
      <input type="text" onChange={(e) => onInputChange(e)} />
      {locationSearched !== [] && locationSearched.map((location) =>
        <button onClick={() => dispatch(searchByLocationCall(location.Key))} key={location.Key}>{location.LocalizedName},{location.AdministrativeArea.LocalizedName},{location.Country.LocalizedName}</button>
      )}
      {locationWeatherSelected !== [] && locationWeatherSelected[0].Temperature.Metric.Value + ' ' + locationWeatherSelected[0].Temperature.Metric.Unit}
    </div>
  );
}
