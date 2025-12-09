/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "_clone_0SyG",
        "name": "email",
        "onlyDomains": null,
        "presentable": false,
        "required": true,
        "system": true,
        "type": "email"
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "hidden": false,
        "id": "_clone_wJiq",
        "name": "verified",
        "presentable": false,
        "required": false,
        "system": true,
        "type": "bool"
      },
      {
        "hidden": false,
        "id": "_clone_ORib",
        "name": "emailVisibility",
        "presentable": false,
        "required": false,
        "system": true,
        "type": "bool"
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "hidden": false,
        "id": "_clone_yzKr",
        "name": "equipe_created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_855971433",
    "indexes": [],
    "listRule": null,
    "name": "Profile",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n    users.id,\n    users.email,\n    users.nom,\n    users.prenom,\n    users.promo,\n    users.avatar,\n    users.verified,\n    users.emailVisibility,\n    Equipe.id as equipe_id,\n    Equipe.nom as equipe_nom,\n    Equipe.logo as equipe_logo,\n    Equipe.points as equipe_points,\n    Equipe.chef as equipe_chef,\n    Equipe.created as equipe_created\nFROM users\nLEFT JOIN Equipe ON (\n    SELECT 1 FROM json_each(Equipe.membre) \n    WHERE json_each.value = users.id\n)",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_855971433");

  return app.delete(collection);
})
