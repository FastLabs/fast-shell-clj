# fast-shell-clj

flabs-shell is an attemnt of implementing a web application shell that will allow to run manageable web applications in a web app container. The applications will be able to comunicate with each other and will accept lifecycle messages from the container.

Started from the idea of having an enterprise app-store.

## Development Mode

### Run application:

```
lein clean
lein  fig:build
```

* Will open: [http://localhost:9500/](http://localhost:9500/).

* To access the dev-cards go to:
[http://localhost:9500/cards.html](http://localhost:9500/cards.html)


## Testing the application
```
lein fig:test
```
will open:[http://localhost:9500/index-test.html](http://localhost:5000/index-test.html)


## Production Build

```
lein clean
lein fig:min
```



## TODO to improve

* include re-frame tools