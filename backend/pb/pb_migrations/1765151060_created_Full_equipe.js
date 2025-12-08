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
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_dLjp",
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
        "id": "_clone_tOcd",
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
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_PqLx",
        "max": 255,
        "min": 0,
        "name": "user_nom",
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
        "id": "_clone_ZJ59",
        "max": 0,
        "min": 0,
        "name": "user_prenom",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_YfvS",
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
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "_clone_ycOG",
        "name": "user_email",
        "onlyDomains": null,
        "presentable": false,
        "required": true,
        "system": true,
        "type": "email"
      }
    ],
    "id": "pbc_3244860474",
    "indexes": [],
    "listRule": null,
    "name": "Full_equipe",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    Equipe.nom AS equipe_nom,\n    Equipe.logo AS equipe_logo,\n    users.nom AS user_nom,\n    users.prenom AS user_prenom,\n    users.avatar AS user_avatar,\n    users.email AS user_email\nFROM Equipe\nLEFT JOIN json_each(Equipe.membre) AS je\nLEFT JOIN users ON users.id = je.value\n",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3244860474");

  return app.delete(collection);
})
