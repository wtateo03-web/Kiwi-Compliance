# Site assets

## multi-site.jpg — the only missing asset

The "Multi-site compliance" band expects a photograph here:

    site/assets/multi-site.jpg

Until one is added, the section renders as a flat ink panel. That looks
deliberate, not broken — nothing needs changing to ship without it.

When supplying one:

- **Subject:** a real British industrial or commercial building — a distribution
  centre, plant room, substation, roofline, loading bay. Close crops and
  structure, not wide establishing shots.
- **Avoid:** people posing, hi-vis thumbs-up, anything that reads as stock.
- **Size:** 2400×1400 or larger, landscape, under ~400 KB after compression.
- **Tone:** it sits behind a 78% ink scrim, so darker, lower-contrast images
  work best. Bright or busy images fight the overlay text.

Drop the file in, commit, push — it appears automatically. To use a different
filename, update `background-image` in the `.multisite` rule in `styles.css`.

## favicon.svg

The Kiwi mark: a geometric K built from a stem and a route/check polyline,
with the vertex node in Fresh Kiwi. The same shape is inlined in the header
and footer logos in `index.html`.
