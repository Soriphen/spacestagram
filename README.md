# Spacestagram

An app that shares photos from NASA's Astronomy Picture of the Day (APOD) API.

LIVE DEMO: https://soriphen.github.io/csb-4l1ls/

## To-Dos

- Create shareable links
- Use localstorage to store likes even upon page refresh. If localstorage proves to not be performant, implement MongoDB for storing likes in a database
- Fix when setting a beginning and end date, and then setting a new beginning date, the situation where the user can set a new beginning date after the previously set end date which renders the screen empty. For reference, to recreate this mistake you first set the start and end date, then choose a new start date that is after the last end date.
