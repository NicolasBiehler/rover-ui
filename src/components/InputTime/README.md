# \<InputTime\>

### InputTime component is a text-based time picker with fuzzy time matching.

The implementation re-uses the `<Input />` component, creating a standard `<input type="text" />` and a shadow `<input type="time" />`.

When the user enters text, it parses the string looking for 1-2 numbers followed by an `a` or a `p`, then casts that to a 24-hour time string matching the format `"hh:mm"`. That format is the standard for HTML time inputs.

When the user value is parsed, the component calls the `onChange` callback with the shadow time input as the change event's target. All other callbacks (`onClick`, `onBlur`, etc. are handled by the non-shadow component.)

Validation of times in HTML is handled for time-of-day only, and this component offloads that work to the `<input type="time" />` shadow component.

On blur, the user's fuzzy input is replaced with a locale-based time string.

Coming soon:

- Add an optional dropdown that lets the user select a time quickly
- Add min/max support for date times (less than 10AM June 9)
- Add configurable steps for hour/minute/30/15/5 minutes/auto