### Demo

https://damientoomey.github.io/maps-directions/app/apps/front

### Bug1

Since the implementation uses the points from the Google Maps `overview_polyline` (i.e. the blue line displayed on Google Maps when searching for directions), in the current app, the 2 searches below will not give the same granularity for the route between Rouen and Toulouse:

- search1:

  - Rouen
  - Toulouse
  - Marseille

- search2:
  - Rouen
  - Toulouse

`search2` will be more detailed (i.e. more towns between Rouen and Toulouse) because Google Maps returns a greater number of points in the polyline between Rouen and Toulouse in ` search2` compared to `search1`.

### Bug2

The distances between towns is incorrect.

### Run the app locally with React

```bash
npm run start:maps-directions:react --hmr
```

### Run the app locally as a script with Node

```bash
npm run start:maps-directions:node
```

### How was this repository created?

#### Nx - Create Workspace

```bash
npx create-nx-workspace maps-directions --preset=empty --nxCloud=false
```

```bash
rm maps-directions/README.md
mv maps-directions/{.[!.],}* .
rmdir maps-directions
```

```bash
npx nx migrate latest
# ✔ Enable distributed caching to make your CI faster? · No
rm -r node_modules
npm install
npx nx migrate --run-migrations
```

#### Nx - Create libs/apps

```bash
npm install -D @nx/js
npx nx g @nx/js:lib common-maps-directions
# ✔ Which unit test runner would you like to use? · vitest
# vitest
# ✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · vite
# vite
```

```bash
npm install -D @nx/react
npx nx g @nx/react:app front --style=none --routing=false --bundler=vite --e2eTestRunner=none
```

#### Install dependencies

- Google Maps

```bash
# Googles Maps for Node
npm i @googlemaps/google-maps-services-js

# Googles Maps for React
npm i @googlemaps/react-wrapper
npm i -D @types/google.

# common
npm i @googlemaps/polyline-codec
```

- React Query

```bash
npm i @tanstack/react-query
```

- CharkraUI

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i @chakra-ui/icons
```

- React Hook Form

```bash
npm i react-hook-form
```

- DotEnv

```bash
npm i -D  dotenv
```

### Deploy to GitHub Pages

- follow instructions in https://github.com/DamienToomey/memory#xii-deployment-on-github-pages
- go to https://github.com/DamienToomey/maps-directions/settings/actions > Workflow permissions
  - select "Read and write permissions" to allow the GitHub action to push the build bundle to the `gh-pages` branch
- in `package.json`, set `baseHref` to the correct folder path which contains `index.html` as explained in https://emilyxiong.medium.com/deploy-a-nx-react-app-to-github-pages-a83de7551ec0

### References

- https://stackoverflow.com/questions/14300217/get-the-city-names-the-google-map-route-going-through
- https://stackoverflow.com/questions/4013606/google-maps-how-to-get-country-state-province-region-city-given-a-lat-long-va
- https://www.npmjs.com/package/@google/maps
- https://developers.google.com/maps/documentation/javascript/overview
- https://www.npmjs.com/package/@googlemaps/polyline-codec
- "The computeDistanceBetween function is not available in the [@googlemaps/google-maps-services-js](https://developers.google.com/maps/documentation/javascript/reference/geometry#spherical.computeDistanceBetween) library or the official Google Maps JavaScript API client for Node.js."
- https://developers.google.com/maps/documentation/javascript/libraries-open-source
- https://github.com/googlemaps/react-wrapper
- Displaying the DirectionsResult: https://developers.google.com/maps/documentation/javascript/directions#DisplayingResults
- waypoints: https://developers.google.com/maps/documentation/javascript/directions#UsageLimits
