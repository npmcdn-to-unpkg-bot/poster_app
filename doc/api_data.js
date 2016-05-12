define({ "api": [
  {
    "type": "get",
    "url": "/v1/categories/favorite",
    "title": "favoriteCategories",
    "version": "0.1.0",
    "name": "favoriteCategories",
    "group": "Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "category_ids",
            "description": "<p>example=['1','2']</p> "
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/CategoriesController.php",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "/api/v1/categories/favorite"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/categories",
    "title": "getCategories",
    "version": "0.1.0",
    "name": "getCategories",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/CategoriesController.php",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "/api/v1/categories"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/categories/unfavorite",
    "title": "unfavoriteCategories",
    "version": "0.1.0",
    "name": "unfavoriteCategories",
    "group": "Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "category_ids",
            "description": "<p>example=['1','2']</p> "
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/CategoriesController.php",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "/api/v1/categories/unfavorite"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/events/follow",
    "title": "followEvents",
    "version": "0.1.0",
    "name": "followEvents",
    "group": "Events",
    "description": "<p>Иду на событие</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>integer</p> ",
            "optional": false,
            "field": "event_id",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/EventsController.php",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "/api/v1/events/follow"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/events/:id",
    "title": "getEvents",
    "version": "0.1.0",
    "name": "getEvents",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/EventsController.php",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "/api/v1/events/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/events",
    "title": "storeEvents",
    "version": "0.1.0",
    "name": "storeEvents",
    "group": "Events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "category_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "allowedValues": [
              "'private'",
              "'public'"
            ],
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/EventsController.php",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "/api/v1/events"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/events/:id",
    "title": "storeEvents",
    "version": "0.1.0",
    "name": "storeEvents",
    "group": "Events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>integer</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "category_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/EventsController.php",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "/api/v1/events/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/events/unfollow",
    "title": "unfollowEvents",
    "version": "0.1.0",
    "name": "unfollowEvents",
    "group": "Events",
    "description": "<p>НЕ иду на событие</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>integer</p> ",
            "optional": false,
            "field": "event_id",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/EventsController.php",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "/api/v1/events/unfollow"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "F__GoogleDrive_sites_poster_ru_doc_main_js",
    "groupTitle": "F__GoogleDrive_sites_poster_ru_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/v1/users/auth/email",
    "title": "AuthByEmail",
    "version": "0.1.0",
    "name": "AuthByEmail",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/auth/email"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/users/auth/hidden",
    "title": "AuthByHidden",
    "version": "0.1.0",
    "name": "AuthByHidden",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "imei",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/auth/hidden"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/users/auth/:type",
    "title": "AuthBySocial",
    "version": "0.1.0",
    "name": "AuthBySocial",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "allowedValues": [
              "'vk'",
              "'fb'",
              "'hidden'"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Hidden=если пользователь ни как не авторизировался для учёта инфы</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "social_hash",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/auth/:type"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/users/events/favorite",
    "title": "getEventsByFavoriteCategories",
    "version": "0.1.0",
    "name": "getEventsByFavoriteCategories",
    "group": "Users",
    "description": "<p>Все события из категорий на которые подписан пользователь</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p> "
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/EventsController.php",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/events/favorite"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/users/:type",
    "title": "regUser",
    "version": "0.1.0",
    "name": "regUser",
    "group": "Users",
    "description": "<p>Только для авторизации по имейлу нужна регистрация,в остальных случаях она автоматическая</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "filename": "./app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:type"
      }
    ]
  }
] });