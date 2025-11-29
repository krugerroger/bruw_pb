/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1473635903")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && status=\"active\"",
    "listRule": "@request.auth.id != \"\" && status=\"active\"",
    "updateRule": "@request.auth.id != \"\" && status=\"active\"",
    "viewRule": "@request.auth.id != \"\" && status=\"active\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1473635903")

  // update collection data
  unmarshal({
    "deleteRule": null,
    "listRule": "",
    "updateRule": null,
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
