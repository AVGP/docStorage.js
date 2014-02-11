docStorage.js
=============

[![Build Status](https://drone.io/github.com/AVGP/docStorage.js/status.png)](https://drone.io/github.com/AVGP/docStorage.js/latest)

A hybrid storage for offline and online web apps. Stores locally when offline, syncs when online.

## State
This is *very* early on.

The API will probably change a few times, while breaking backwards compatibility.  
It will also take a bit to support the different types of local storage (localStorage, Indexed DB, Web SQL).

The current roadmap is:

1. Support localStorage
2. Add sync with [Draftin](http://www.draftin.com)
3. Add support for Indexed DB
4. Add support for Web SQL
5. Add more sync providers (which?)

## How it works

To use the docStorage, you need to include the ``docStorage.js`` in your web application
and call ``docStorage.save(name, content)`` to store data, ``docStorage.load(name)``.

Here is an example:

```html
    <!doctype html>
    <html>
      <head>
        <script src="docStorage.js" type="text/javascript"></script>
      </head>
      <body>
        <nav>
          <button id="load">Open</button>
          <button id="save">Save</button>
        </nav>
        <textarea id="content"></textarea>
        
        <script>
          document.getElementById("load").addEventListener("click", function() {
            document.getElementById("content").value = docStorage.load(window.prompt("Open file")).content;
          }, false);
          
          document.getElementById("save").addEventListener("click", function() {
            docStorage.load(window.prompt("Save file"), document.getElementById("content").value);
          }, false);
        </script>
      </body>
    </html>
```

## How it works (behind the scenes)

For the moment, it uses localStorage for local, offline storage.
If available, it will check for connectivity using the HTML ``online`` and ``offline`` events.

If it detects to be offline, the data is save locally and when connectivity is detected the next time,
it checks with a remote storage backend, if there is a newer version of the data available, if the local version is newer
or if there is a conflict.

## Run the tests

Install all dependencies and run the tests with:

```
  npm install -d
  npm test
```

## License
MIT License.
