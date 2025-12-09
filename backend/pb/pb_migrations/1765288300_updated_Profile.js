/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_855971433")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("_clone_0SyG")

  // remove field
  collection.fields.removeById("_clone_0Ods")

  // remove field
  collection.fields.removeById("_clone_nYX6")

  // remove field
  collection.fields.removeById("_clone_zhcC")

  // remove field
  collection.fields.removeById("_clone_J1Ym")

  // remove field
  collection.fields.removeById("_clone_wJiq")

  // remove field
  collection.fields.removeById("_clone_ORib")

  // remove field
  collection.fields.removeById("_clone_xYkD")

  // remove field
  collection.fields.removeById("_clone_kzIo")

  // remove field
  collection.fields.removeById("_clone_yJdv")

  // remove field
  collection.fields.removeById("_clone_LLbj")

  // remove field
  collection.fields.removeById("_clone_yzKr")

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_kAdE",
    "name": "email",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": true,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_6xzP",
    "max": 255,
    "min": 0,
    "name": "nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_rXH6",
    "max": 0,
    "min": 0,
    "name": "prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_0ZLg",
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
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_WO4B",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    "name": "avatar",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_lu1v",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_eBME",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_z1pc",
    "max": 0,
    "min": 0,
    "name": "equipe_nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_jEGn",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "equipe_logo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_gDdi",
    "max": null,
    "min": null,
    "name": "equipe_points",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_3SvZ",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "equipe_chef",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "_clone_sCq4",
    "name": "equipe_created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_855971433")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_0SyG",
    "name": "email",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": true,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_0Ods",
    "max": 255,
    "min": 0,
    "name": "nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_nYX6",
    "max": 0,
    "min": 0,
    "name": "prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_zhcC",
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
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_J1Ym",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    "name": "avatar",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_wJiq",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_ORib",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_xYkD",
    "max": 0,
    "min": 0,
    "name": "equipe_nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_kzIo",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "equipe_logo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_yJdv",
    "max": null,
    "min": null,
    "name": "equipe_points",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_LLbj",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "equipe_chef",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "_clone_yzKr",
    "name": "equipe_created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_kAdE")

  // remove field
  collection.fields.removeById("_clone_6xzP")

  // remove field
  collection.fields.removeById("_clone_rXH6")

  // remove field
  collection.fields.removeById("_clone_0ZLg")

  // remove field
  collection.fields.removeById("_clone_WO4B")

  // remove field
  collection.fields.removeById("_clone_lu1v")

  // remove field
  collection.fields.removeById("_clone_eBME")

  // remove field
  collection.fields.removeById("_clone_z1pc")

  // remove field
  collection.fields.removeById("_clone_jEGn")

  // remove field
  collection.fields.removeById("_clone_gDdi")

  // remove field
  collection.fields.removeById("_clone_3SvZ")

  // remove field
  collection.fields.removeById("_clone_sCq4")

  return app.save(collection)
})
