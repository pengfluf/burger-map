# Burger Map

This is the burger map. Test task.

## Features
- Responsive
- Shows the nearest burger joints in the city, district or province (not only in Tartu, but everywhere). Where exactly? Foursquare API decides.
- Clicking on the venue shows its name and address
- Excludes all burger joints located in a 1km radius from the Tartu bus station and shows the circle as the indicator of the shadow area (test task requirement)
- Shows burger images depends on what we see on the map. Pictures provided by Pixabay and not Foursquare because the last one is requiring payment for the `/venues/photos` endpoint and free trial limitation on 90 requests is ridiculous.
