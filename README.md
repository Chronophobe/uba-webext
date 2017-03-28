# UBA Linker

Opens a new tab for the current page using the [uba.uva.nl](http://uba.uva.nl) webproxy (requires login using UvA ID).

## Installation

**Firefox**

1. Download the [uba_linker.xpi](release/uba_linker.xpi) from the `release/` folder.
2. Go to `Tools > Add-ons`
3. Click the little gear icon
4. Select `Install Add-on From File...`
5. Select your freshly downloaded `.xpi`-file.

**Chrome**

1. Download the [uba_linker.crx](release/uba_linker.crx) from the `release/` folder.
2. Go to `More tools > Extensions`
3. Drag and drop the `.crx`-file there.

In case Chrome blocks the extension since it's installed outside the Web Store, use the following steps:

1. Clone the source
2. Go to `More tools > Extensions`
3. Make sure the `Developer mode` checkbox is ticked.
4. Select `Load unpacked extension...`
5. Select the `chrome` directory from the cloned source.

**Bookmarklet**

1. Copy the contents of the [bookmarklet](bookmarklet.js)
2. Create a new bookmark in your browser
3. Paste the contents

## TODO:
* ~~Port to Chrome~~
* Maybe make it more generic and configurable to work with other webproxies too.
