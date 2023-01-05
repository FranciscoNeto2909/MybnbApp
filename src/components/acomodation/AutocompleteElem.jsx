import React, {useState} from "react";

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  }  from "react-places-autocomplete";

export default function AutocompleteElem({ setCordenates, handleSetResult}) {
    const [address, setAddress] = useState("")

    async function handleSelect(value) {
        const results = await geocodeByAddress(value)
        const latLang = await getLatLng(results[0])
        setAddress(value)
        setCordenates(latLang)
        if (handleSetResult) {
          handleSetResult(results)
        }
    }
    return(
        <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input 
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input form-control border-secondary mb-4',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, i) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div key={i}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
}