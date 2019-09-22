# louie-template-to-pdf

Post some data, get a pdf in return.

## Usage

Build a template containing header, body and footer.

Each part is an array with content elements.

Each element supports fontSize, text and an optional startAt value.

startAt is the coordinates for where to start drawing the text.

A good way to create your template is to look at the live demo of [pdfKit](http://pdfkit.org/demo/browser.html)

## API

### `POST /api/generate/pdf`

Post the template and get a pdf in return

```JavaScript
{
  "header": [
    {
      "imageData": "<base64-data>",
      "startAt": {
        "x": 50,
        "y": 10
      },
      "options": {
        "fit": [50, 50]
      }
    },
    {
      "fontSize": 26
    },
    {
      "text": "Alheimsins School of Awesomeness",
      "startAt": {
        "x": 110,
        "y": 25
      }
    },
    {
      "fontSize": 12
    },
    {
      "text": "1971-11-18",
      "startAt": {
        "x": 475,
        "y": 70
      }
    },
    {
      "fontSize": 20
    },
    {
      "text": "This is my head",
      "startAt": {
        "x": 50,
        "y": 100
      }
    }
  ],
  "body": [
    {
      "fontSize": 16
    },
    {
      "text": "This is my first line of text"
    },
    {
      "text": "This is my second line of text"
    }
  ],
  "footer": [
    {
      "fontSize": 12
    },
    {
      "text": "This is my foot",
      "startAt": {
        "x": 50,
        "y": 700
      }
    }
  ],
  "watermark": [
    {
      "rotate": 45,
      "options": {
        "origin": [5, 150]
      }
    },
    {
      "fillColor": "red"
    },
    {
      "opacity": 0.3
    },
    {
      "fontSize": 60
    },
    {
      "text": "Forhåndsvisning",
      "startAt": {
        "x": 100,
        "y": 50
      }
    }
  ]
}
```

```
$ curl -v http://localhost:3000/api/generate/pdf -d @test/data/test-data.json --header "Content-Type: application/json"
```

This will render a pdf like [example.pdf](example.pdf)

## Develop

You'll need the [now-cli](https://zeit.co/download)

```
$ npm run dev
```

# License

[MIT](LICENSE)
