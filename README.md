# louie-template-to-pdf

Post some data, get a pdf in return

## API

### `POST /api/pdf`

```JavaScript
{
  data: {
    title: 'Hello PDF!'
  }
}
```

```
$ curl -v http://localhost:3000/api/generate/pdf -d @test/data/test-data.json --header "Content-Type: application/json"
```

# License

[MIT](LICENSE)
