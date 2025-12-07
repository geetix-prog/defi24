/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select2954074875",
    "maxSelect": 1,
    "name": "promo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "2025-2028",
      "2024-2027",
      "2023-2026",
      "ancien"
    ]
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_351715949",
    "hidden": false,
    "id": "relation608811541",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "equipe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("select2954074875")

  // remove field
  collection.fields.removeById("relation608811541")

  return app.save(collection)
})
