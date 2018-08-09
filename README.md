# fast-shell-clj

A [re-frame](https://github.com/Day8/re-frame) application designed to ... well, that part is up to you.

## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Testing the application

Few options available
* Running tests in a separate figwheel instance. Will run only unit tests in the 
```
lein figwheel test-fig
``` 
will open:[http://localhost:3449/index-test.html](http://localhost:3449/index-test.html)

* Running devcards
```
lein figwheel dev-cards
```

will open [http://localhost:3449/cards.html](http://localhost:3449/cards.html)


## Production Build


To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```

Test clojurescript in phantom using doo 

```
lein doo phantom test
```


run dev cards:
```
lein figwheel dev-cards
```

## TODO to improve

* include re-frame tools