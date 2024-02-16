Configuring Metadata
Export a static metadata object
Export a dynamic generateMetadata function

Metadata rules
Both layout.tsx and page.tsx files can export metadata. If defined in a layout, it
applies to all pages in that layout, but if defined in a page, it applies only to that
page
Metadata is read in order, from the root level down to the final page level
When there's metadata in multiple places for the same route, they get combined,
but page metadata will replace layout metadata if they have the same properties