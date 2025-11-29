/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3808073003")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file1184794806",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf"
    ],
    "name": "paymentProof",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3808073003")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file1184794806",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "paymentProof",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
