/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3244860474")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    Equipe.id as equipe_id,\n    Equipe.nom AS equipe_nom,\n    Equipe.logo AS equipe_logo,\n    Equipe.chef AS equipe_chef,\n    users.id AS user_id,\n    users.nom AS user_nom,\n    users.prenom AS user_prenom,\n    users.avatar AS user_avatar,\n    users.email AS user_email,\n    users.verified AS user_verified,\n    users.promo AS user_promo,\n    users.emailVisibility AS user_emailVisibility\nFROM Equipe\nLEFT JOIN json_each(Equipe.membre) AS je\nLEFT JOIN users ON users.id = je.value"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_s5Mp")

  // remove field
  collection.fields.removeById("_clone_YrrW")

  // remove field
  collection.fields.removeById("_clone_vwbe")

  // remove field
  collection.fields.removeById("_clone_3FW1")

  // remove field
  collection.fields.removeById("_clone_nFs5")

  // remove field
  collection.fields.removeById("_clone_ndik")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_351715949",
    "hidden": false,
    "id": "relation1837505417",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "equipe_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_jfln",
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
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_AXTk",
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
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_Kysn",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "equipe_chef",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2809058197",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_nm3I",
    "max": 255,
    "min": 0,
    "name": "user_nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_LuzW",
    "max": 0,
    "min": 0,
    "name": "user_prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_Stby",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    "name": "user_avatar",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_eqbQ",
    "name": "user_email",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": true,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_VZW4",
    "name": "user_verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_cB3M",
    "maxSelect": 1,
    "name": "user_promo",
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
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "_clone_J7eL",
    "name": "user_emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3244860474")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    Equipe.nom AS equipe_nom,\n    Equipe.logo AS equipe_logo,\n    users.nom AS user_nom,\n    users.prenom AS user_prenom,\n    users.avatar AS user_avatar,\n    users.email AS user_email\nFROM Equipe\nLEFT JOIN json_each(Equipe.membre) AS je\nLEFT JOIN users ON users.id = je.value\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_s5Mp",
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
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_YrrW",
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
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_vwbe",
    "max": 255,
    "min": 0,
    "name": "user_nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_3FW1",
    "max": 0,
    "min": 0,
    "name": "user_prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_nFs5",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    "name": "user_avatar",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_ndik",
    "name": "user_email",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": true,
    "type": "email"
  }))

  // remove field
  collection.fields.removeById("relation1837505417")

  // remove field
  collection.fields.removeById("_clone_jfln")

  // remove field
  collection.fields.removeById("_clone_AXTk")

  // remove field
  collection.fields.removeById("_clone_Kysn")

  // remove field
  collection.fields.removeById("relation2809058197")

  // remove field
  collection.fields.removeById("_clone_nm3I")

  // remove field
  collection.fields.removeById("_clone_LuzW")

  // remove field
  collection.fields.removeById("_clone_Stby")

  // remove field
  collection.fields.removeById("_clone_eqbQ")

  // remove field
  collection.fields.removeById("_clone_VZW4")

  // remove field
  collection.fields.removeById("_clone_cB3M")

  // remove field
  collection.fields.removeById("_clone_J7eL")

  return app.save(collection)
})
