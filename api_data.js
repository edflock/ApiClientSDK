define({ "api": [
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "logout the user from the application",
    "name": "getLogout",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "login",
            "description": "<p>Status of the login.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"logout\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n  \"logout\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/AuthController.php",
    "groupTitle": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login the user to the application",
    "name": "postLogin",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Users unique identifier, can be a username, email or a phone-number in the numeric format.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>password for the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userInfo",
            "description": "<p>Info for the user [optional].</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deviceId",
            "description": "<p>password for the user [optional].</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "login",
            "description": "<p>Status of the login.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>user-id corresponding to the logged in credentials.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "key",
            "description": "<p>the key associated with the logged in user, this neeed to be added to the authorization header for each subsequent api calls.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"login\": true,\n    \"id\": 24,\n    \"key\": \"e855537fd9c1b81c4e4f46cf559f86447d0ea867\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n  \"login\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/AuthController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register the user to the application",
    "name": "postRegister",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Users unique identifier, either username or email or phone number is required.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Users unique identifier, either username or email or phone number is required.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Users unique identifier, either username or email or phone number is required.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user, required.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>password for the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>password for the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "doNotSendVerification",
            "description": "<p>if 1 then no activation related actions are taken by the api</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deviceId",
            "description": "<p>Device Id [Optional]</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userInfo",
            "description": "<p>user Info [Optional]</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Register",
            "description": "<p>Status of the registration.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"register\": true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FieldNames",
            "description": "<p>The field that has error with the associated error</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "identifier-taken-error:",
          "content": "HTTP/1.1 200\n{\n     \"username\": [\n         \"The username has already been taken.\"\n     ]\n}",
          "type": "json"
        },
        {
          "title": "validation-error:",
          "content": "HTTP/1.1 200\n{\n     \"email\": [\n         \"The email must be a valid email address.\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/AuthController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/register/phone",
    "title": "Register the user to the application using phone",
    "name": "postRegisterPhone",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Users unique identifier, either username or email or phone number is required.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "doNotSendVerification",
            "description": "<p>if 1 then no activation related actions are taken by the api</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deviceId",
            "description": "<p>Device Id [Optional]</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userInfo",
            "description": "<p>user Info [Optional]</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Register",
            "description": "<p>Status of the registration.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"register\": true,\n            \"id\": 2009,\n            \"key\": \"7b1f21e3075e057ea919c3a10309c5e23c88977b\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FieldNames",
            "description": "<p>The field that has error with the associated error</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "identifier-taken-error:",
          "content": "HTTP/1.1 200\n{\n     \"username\": [\n         \"The username has already been taken.\"\n     ]\n}",
          "type": "json"
        },
        {
          "title": "validation-error:",
          "content": "HTTP/1.1 200\n{\n     \"email\": [\n         \"The email must be a valid email address.\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/AuthController.php",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/challenge/:challengeId/discussion",
    "title": "list of discussion for a challenge",
    "name": "GetDiscussionOfChallenge",
    "group": "Challenges",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n      {\n        \"discussionId\": 3,\n        \"discussionSubject\": \"heellll\",\n        \"discussionText\": \"challenge 1\",\n        \"createdBy\": null,\n        \"createdById\": 2,\n        \"discussionCreatedAt\": \"2015-07-15 17:25:43\",\n        \"discussionsUpdatedAt\": \"2015-07-15 17:26:32\"\n      }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ChallengeController.php",
    "groupTitle": "Challenges"
  },
  {
    "type": "get",
    "url": "/challenge/:challengeId/leaderboard",
    "title": "list of leaderBoard for a challenge",
    "name": "GetLeaderBoardOfChallenge",
    "group": "Challenges",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ChallengeController.php",
    "groupTitle": "Challenges"
  },
  {
    "type": "get",
    "url": "/challenge/:challengeId/resource",
    "title": "list of Resources for a challenge",
    "description": "<p><code>Need To Be Revised</code></p> ",
    "name": "GetResourcesOfChallenge",
    "group": "Challenges",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Admin\": [\n        {\n          \"resourceId\": 9,\n          \"resourceName\": \"acb\",\n          \"resourceUrl\": \"asdawqw\"\n        }\n      ],\n      \"Nodal Officer\": [\n        {\n          \"resourceId\": 10,\n          \"resourceName\": \"sadqweq\",\n          \"resourceUrl\": \"asdawqw\"\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ChallengeController.php",
    "groupTitle": "Challenges"
  },
  {
    "type": "get",
    "url": "/challenge/:challengeId/sibling",
    "title": "Get all challenges belonging to the achievement, which is the parent of this challenge",
    "name": "GetSiblingForChallenge",
    "group": "Challenges",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"achievementId\": 1,\n    \"achievementName\": \"SchoolBank Champ Beginner\",\n    \"achievementShortDescription\": \"Understands what is a SchoolBank Champ and knows about Paise Bachao Sapne Sajao\",\n    \"data\": [\n      {\n        \"challengeName\": \"Who is a SchoolBank Champ?\",\n        \"challengeId\": 1,\n        \"challengeStep\": 1\n      },\n      {\n        \"challengeName\": \"What is Paise Bachao Sapne Sajao?\",\n        \"challengeId\": 2,\n        \"challengeStep\": 2\n      }\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ChallengeController.php",
    "groupTitle": "Challenges"
  },
  {
    "type": "get",
    "url": "/community",
    "title": "List of Communities",
    "name": "GetCommunities",
    "group": "Community",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>class id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>shortDescription of the Class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleName",
            "description": "<p>role name of the user in the class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the class (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>1 for closed class and 0 for open class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon url associated with the class (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_text",
            "description": "<p>Abbreviation to the class name to be used as the image in the case either the img_url or icon_url is not present</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"data\": [\n        {\n          \"communityId\": 48,\n          \"communityName\": \"Class 1\",\n          \"shortDescription\": \"class 1\",\n          \"longDescription\": null,\n          \"img_url\": null,\n          \"icon_url\": null,\n          \"icon_text\": \"C1\",\n          \"groupName\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n          \"groupId\": 666,\n          \"createdByUserId\": 0,\n          \"createdByUser\": null,\n          \"belongs_to\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n          \"belongs_to_type\": \"group\",\n          \"belongs_to_id\": 666\n        },\n        {\n          \"communityId\": 50,\n          \"communityName\": \"new class 2\",\n          \"shortDescription\": null,\n          \"longDescription\": null,\n          \"img_url\": null,\n          \"icon_url\": null,\n          \"icon_text\": \"NC\",\n          \"groupName\": null,\n          \"groupId\": null,\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"School Bank Champ Admin\",\n          \"belongs_to_type\": \"user\",\n          \"belongs_to_id\": 308\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommunityController.php",
    "groupTitle": "Community"
  },
  {
    "type": "get",
    "url": "/course/:courseId/detail",
    "title": "Detail for a course",
    "name": "GetCourseDetail",
    "group": "Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>course id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the course</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>Short description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longDescription",
            "description": "<p>Long Description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the course (can be null)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n       {\n            \"id\": 1,\n            \"name\": \"School Bank Champs Junior\",\n            \"shortDescription\": \"Social and Financial Education for Children Ages 10-14\",\n            \"longDescription\": \"A Class Course for Social and Financial Education for Children\",\n            \"img_url\": null\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course/group/:groupId/activities",
    "title": "List of all activities in a group of course",
    "name": "GetCourseGroupActivities",
    "group": "Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "Complex",
            "description": "<p>List of activities</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\n      {\n        \"id\": 7,\n        \"courseGroupId\": 2,\n        \"courseGroupCategoryId\": 2,\n        \"courseGroupCategoryStep\": 1,\n        \"resourceTitle\": \"Difference Between Need and Want\",\n        \"resourceType\": \"text\",\n        \"hashId\": 11112\n      },\n      {\n        \"id\": 8,\n        \"courseGroupId\": 2,\n        \"courseGroupCategoryId\": 2,\n        \"courseGroupCategoryStep\": 2,\n        \"resourceTitle\": \"List of Items to Save for\",\n        \"resourceType\": \"text\",\n        \"hashId\": 11113\n      },\n      {\n        \"id\": 9,\n        \"courseGroupId\": 2,\n        \"courseGroupCategoryId\": 2,\n        \"courseGroupCategoryStep\": 3,\n        \"resourceTitle\": \"Make a SMART plan for how they might save up to purchase the item\",\n        \"resourceType\": \"text\",\n        \"hashId\": 11114\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course/group/:groupId/materials",
    "title": "List of all materials in a group of course",
    "name": "GetCourseGroupMaterial",
    "group": "Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "Complex",
            "description": "<p>List of materials</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\n      {\n        \"id\": 6,\n        \"courseGroupId\": 1,\n        \"courseGroupCategoryId\": 3,\n        \"courseGroupCategoryStep\": 1,\n        \"resourceTitle\": \"SchoolBank Champs and their friends Story\",\n        \"resourceType\": \"text\",\n        \"hashId\": 11111\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course",
    "title": "paginated detail list",
    "name": "GetCourseList",
    "group": "Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "List",
            "description": "<p>Paginated List of the courses</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n            \"per_page\": 10,\n            \"current_page\": 1,\n            \"next_page_url\": null,\n            \"prev_page_url\": null,\n            \"from\": 1,\n            \"to\": 2,\n            \"data\": [\n                {\n                    \"id\": 1,\n                    \"name\": \"School Bank Champs Junior\",\n                    \"shortDescription\": \"Social and Financial Education for Children Ages 10-14\",\n                    \"img_url\": null\n                },\n                {\n                    \"id\": 2,\n                    \"name\": \"School Bank Champs Senior\",\n                    \"shortDescription\": \"Social and Financial Education for Young People Ages 15 and above\",\n                    \"img_url\": null\n                }\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the list.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course/short",
    "title": "un-paginated minimum detail list",
    "name": "GetCourseListShort",
    "group": "Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "List",
            "description": "<p>List of the courses</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n            {\n                \"courseId\": 1,\n                \"courseName\": \"School Bank Champs Junior\"\n            },\n            {\n                \"courseId\": 2,\n                \"courseName\": \"School Bank Champs Senior\"\n            }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course/:courseId/plan",
    "title": "whole plan for a course",
    "name": "GetCoursePlan",
    "group": "Courses",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"courseId\": 1,\n    \"courseName\": \"School Bank Champs Junior\",\n    \"shortDescription\": \"Social and Financial Education for Children Ages 10-14\",\n    \"longDescription\": \"A Class Course for Social and Financial Education for Children\",\n    \"courseImg_url\": null,\n    \"groups\": [\n    {\n        \"courseGroupId\": 1,\n        \"courseGroupTitle\": \"Introduction to School Bank Champs\",\n        \"courseGroupStep\": 1,\n        \"courseGroupObjective\": \"<p>By the end of the lesson, the students will be able to:</p>\\n\\n<ol>\\n\\t<li>Recognize SchoolBank Champs and its Motto</li>\\n\\t<li>Be excited about becoming a School Bank Champ and applying the School Bank Champs motto.</li>\\n\\t<li>Be inspired to follow the steps to become a School Bank Champs and hence be interested in active learning of the content.</li>\\n\\t<li>&nbsp;Get introduced to the land of School Bank Champs and their friends.</li>\\n</ol>\",\n        \"categories\": [\n            {\n                \"courseGroupCategoryId\": 2,\n                \"courseGroupCategoryTitle\": \"Activities\",\n                \"resources\": [\n                    {\n                        \"resourceTitle\": \"Qualities of a Superhero\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 1002,\n                        \"courseGroupResourceId\": 1\n                    },\n                    {\n                        \"resourceTitle\": \"Normal Children can become SchoolBank Champs \",\n                        \"resourceType\": \"link\",\n                        \"resourceId\": 2001,\n                        \"courseGroupResourceId\": 2\n                    },\n                    {\n                        \"resourceTitle\": \"Friends of SchoolBank Champs\",\n                        \"resourceType\": \"link\",\n                        \"resourceId\": 2002,\n                        \"courseGroupResourceId\": 3\n                    },\n                    {\n                        \"resourceTitle\": \"Understand Paise Bachao Sapne Sajao\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 5001,\n                        \"courseGroupResourceId\": 4\n                    },\n                    {\n                        \"resourceTitle\": \"Opening of Students Account at www.schoolbankchamps.com\",\n                        \"resourceType\": \"upload\",\n                        \"resourceId\": 7888,\n                        \"courseGroupResourceId\": 5\n                    }\n                ]\n            },\n            {\n                \"courseGroupCategoryId\": 3,\n                \"courseGroupCategoryTitle\": \"Materials\",\n                \"resources\": [\n                    {\n                        \"resourceTitle\": \"SchoolBank Champs and their friends Story\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 11111,\n                        \"courseGroupResourceId\": 6\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        \"courseGroupId\": 2,\n        \"courseGroupTitle\": \"Needs and Wants\",\n        \"courseGroupStep\": 2,\n        \"courseGroupObjective\": \"<p>By the end of the lesson, the students will be able to:</p>\\n\\n<ol>\\n\\t<li>Understand the difference between needs and wants</li>\\n\\t<li>Identify savings goals based on needs and wants&nbsp;</li>\\n</ol>\\n\",\n        \"categories\": [\n            {\n                \"courseGroupCategoryId\": 2,\n                \"courseGroupCategoryTitle\": \"Activities\",\n                \"resources\": [\n                    {\n                        \"resourceTitle\": \"Difference Between Need and Want\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 11112,\n                        \"courseGroupResourceId\": 7\n                    },\n                    {\n                        \"resourceTitle\": \"List of Items to Save for\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 11113,\n                        \"courseGroupResourceId\": 8\n                    },\n                    {\n                        \"resourceTitle\": \"Make a SMART plan for how they might save up to purchase the item\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 11114,\n                        \"courseGroupResourceId\": 9\n                    }\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course/:courseId/teacherresource",
    "title": "List of all resources for teacher",
    "name": "GetCourseTeacherResources",
    "group": "Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "Complex",
            "description": "<p>object of all the teacher resource for a group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n     {\n            \"courseId\": 1,\n            \"courseName\": \"School Bank Champs Junior\",\n            \"courseImg_url\": null,\n            \"groups\": [\n                {\n                    \"courseGroupId\": 1,\n                    \"courseGroupTitle\": \"Introduction to School Bank Champs\",\n                    \"courseGroupStep\": 1,\n                    \"categories\": [\n                        {\n                            \"courseGroupCategoryId\": 2,\n                            \"courseGroupCategoryTitle\": \"Activities\",\n                            \"resourceGroup\": [\n                                {\n                                    \"relatedResourceId\": 2,\n                                    \"relatedResource\": \"Normal Children can become SchoolBank Champs \",\n                                    \"resource\": [\n                                        {\n                                        \"resourceTitle\": \"Teacher Resource Group2\",\n                                        \"resourceStep\": 2,\n                                        \"resourceType\": \"text\",\n                                        \"resourceId\": 1231312\n                                        }\n                                    ]\n                                },\n                                {\n                                    \"relatedResourceId\": 1,\n                                    \"relatedResource\": \"Qualities of a Superhero\",\n                                    \"resource\": [\n                                        {\n                                            \"resourceTitle\": \"Teacher Resource with group\",\n                                            \"resourceStep\": 4,\n                                            \"resourceType\": \"text\",\n                                            \"resourceId\": 11113\n                                        }\n                                    ]\n                                }\n                            ]\n                        }\n                    ],\n                    \"withoutCategory\": [\n                        {\n                            \"resourceTitle\": \"Teacher Resource without group resource\",\n                            \"resourceStep\": 1,\n                            \"resourceType\": \"text\",\n                            \"resourceId\": 11110\n                        }\n                    ]\n                },\n                {\n                    \"courseGroupId\": 2,\n                    \"courseGroupTitle\": \"Needs and Wants\",\n                    \"courseGroupStep\": 2,\n                    \"categories\": [\n                        {\n                            \"courseGroupCategoryId\": 2,\n                            \"courseGroupCategoryTitle\": \"Activities\",\n                            \"resourceGroup\": [\n                                {\n                                    \"relatedResourceId\": 7,\n                                    \"relatedResource\": \"Difference Between Need and Want\",\n                                    \"resource\": [\n                                        {\n                                            \"resourceTitle\": \"In group 2 resource 7\",\n                                            \"resourceStep\": 1,\n                                            \"resourceType\": \"text\",\n                                            \"resourceId\": 12323\n                                        }\n                                    ]\n                                }\n                            ]\n                        }\n                    ],\n                    \"withoutCategory\": []\n                },\n                {\n                    \"courseGroupId\": 3,\n                    \"courseGroupTitle\": \"Saving Money\",\n                    \"courseGroupStep\": 3,\n                    \"categories\": [],\n                    \"withoutCategory\": []\n                },\n                {\n                    \"courseGroupId\": 4,\n                    \"courseGroupTitle\": \"My Account\",\n                    \"courseGroupStep\": 4,\n                    \"categories\": [],\n                    \"withoutCategory\": []\n                }\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course/search",
    "title": "search amongst courses with name",
    "name": "searchCourse",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "qname",
            "description": "<p>query sent for searching.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://{server}/course/search?qname=a",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"id\": 1,\n        \"name\": \"School Bank Champs Junior\",\n        \"short_description\": \"Social and Financial Education for Children Ages 10-14\"\n      },\n      {\n        \"id\": 2,\n        \"name\": \"School Bank Champs Senior\",\n        \"short_description\": \"Social and Financial Education for Young People Ages 15 and above\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CourseController.php",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/discussion/:discussionId",
    "title": "detailed data about the discussion with replies",
    "name": "DiscussionDetail",
    "group": "Discussions",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": 1,\n      \"subject\": \"skdjadhas\",\n      \"text\": \"ahsdjahdkjasdnkjashdasjkla salksaj askjd\",\n      \"createdById\": 1,\n      \"createdByName\": null,\n      \"replies\": [\n        {\n          \"id\": 1,\n          \"text\": \"asdnalksdjadk\",\n          \"upvotes\": 3,\n          \"discussion_id\": 1,\n          \"created_by\": 2,\n          \"created_at\": \"2015-07-12 12:48:30\",\n          \"updated_at\": \"2015-07-12 15:37:17\",\n          \"createdByName\": null\n        },\n        {\n          \"id\": 2,\n          \"text\": \"asdnalksdjadasdak\",\n          \"upvotes\": 3,\n          \"discussion_id\": 1,\n          \"created_by\": 1,\n          \"created_at\": \"2015-07-12 12:48:50\",\n          \"updated_at\": \"2015-07-12 15:37:23\",\n          \"createdByName\": null\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DiscussionController.php",
    "groupTitle": "Discussions"
  },
  {
    "type": "get",
    "url": "me/class/:classId/forum/categories",
    "title": "List of the forum categories in the Class",
    "name": "GetForumForClass",
    "group": "Forum",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"forumCategoryId\": \"1\",\n    \"forumCategoryTitle\": \"Category\",\n    \"forumCategorySubTitle\": \"Contains categories and threads\",\n    \"forumCategoryCreatedAt\": \"2015-11-01 19:17:23\",\n    \"forumCategoryUpdatedAt\": \"2015-11-01 19:17:23\"\n  },\n  {\n    \"forumCategoryId\": \"2\",\n    \"forumCategoryTitle\": \"Sub-category\",\n    \"forumCategorySubTitle\": \"Contains threads\",\n    \"forumCategoryCreatedAt\": \"2015-11-01 19:17:31\",\n    \"forumCategoryUpdatedAt\": \"2015-11-01 19:17:31\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Forum",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/community/:communityId/forum/categories",
    "title": "List of the forum categories in the Community",
    "name": "GetForumForCommunity",
    "group": "Forum",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"forumCategoryId\": \"1\",\n        \"forumCategoryTitle\": \"Category\",\n        \"forumCategorySubTitle\": \"Contains categories and threads\",\n        \"forumCategoryCreatedAt\": \"2015-11-01 19:17:23\",\n        \"forumCategoryUpdatedAt\": \"2015-11-01 19:17:23\"\n      },\n      {\n        \"forumCategoryId\": \"2\",\n        \"forumCategoryTitle\": \"Sub-category\",\n        \"forumCategorySubTitle\": \"Contains threads\",\n        \"forumCategoryCreatedAt\": \"2015-11-01 19:17:31\",\n        \"forumCategoryUpdatedAt\": \"2015-11-01 19:17:31\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error200": [
          {
            "group": "Error200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "NotCommunity",
            "description": "<p>The Id is not a community.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "NotCommunity-Example",
          "content": "HTTP/1.1 200\n{\n  \"error\": \"Not a Community\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommunityController.php",
    "groupTitle": "Forum"
  },
  {
    "type": "get",
    "url": "/group/:groupId/forum/categories",
    "title": "List of the forum categories in the group",
    "name": "GetForumForGroup",
    "group": "Forum",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"forumCategoryId\": \"1\",\n        \"forumCategoryTitle\": \"Category\",\n        \"forumCategorySubTitle\": \"Contains categories and threads\",\n        \"forumCategoryCreatedAt\": \"2015-11-01 19:17:23\",\n        \"forumCategoryUpdatedAt\": \"2015-11-01 19:17:23\"\n      },\n      {\n        \"forumCategoryId\": \"2\",\n        \"forumCategoryTitle\": \"Sub-category\",\n        \"forumCategorySubTitle\": \"Contains threads\",\n        \"forumCategoryCreatedAt\": \"2015-11-01 19:17:31\",\n        \"forumCategoryUpdatedAt\": \"2015-11-01 19:17:31\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Forum"
  },
  {
    "type": "get",
    "url": "/forum/thread/{threadId}/posts",
    "title": "List Posts in the forum threads",
    "name": "getPostsInThreads",
    "group": "Forum",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\n      {\n        \"postId\": 3,\n        \"postContent\": \"This is a test comment\",\n        \"postLikesCount\": 2,\n        \"authorId\": null,\n        \"authorName\": null,\n        \"createdAt\": \"2015-09-04 19:52:10\",\n        \"updatedAt\": \"2015-09-04 19:52:10\"\n      },\n      {\n        \"postId\": 4,\n        \"postContent\": \"This is a test comment\",\n        \"postLikesCount\": 1,\n        \"authorId\": null,\n        \"authorName\": null,\n        \"createdAt\": \"2015-09-04 20:21:13\",\n        \"updatedAt\": \"2015-09-04 20:21:13\"\n      },\n      {\n        \"postId\": 5,\n        \"postContent\": \"This ischecked\",\n        \"postLikesCount\": 0,\n        \"authorId\": null,\n        \"authorName\": null,\n        \"createdAt\": \"2015-09-04 20:21:27\",\n        \"updatedAt\": \"2015-09-04 20:21:27\"\n      },\n      {\n        \"postId\": 6,\n        \"postContent\": \"Hello\",\n        \"postLikesCount\": 0,\n        \"authorId\": null,\n        \"authorName\": null,\n        \"createdAt\": \"2015-09-04 20:29:49\",\n        \"updatedAt\": \"2015-09-04 20:29:49\"\n      },\n      {\n        \"postId\": 7,\n        \"postContent\": \"Hello\",\n        \"postLikesCount\": 0,\n        \"authorId\": null,\n        \"authorName\": null,\n        \"createdAt\": \"2015-09-04 20:30:16\",\n        \"updatedAt\": \"2015-09-04 20:30:16\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ForumController.php",
    "groupTitle": "Forum"
  },
  {
    "type": "get",
    "url": "/forum/category/{categoryId}/threads",
    "title": "List threads in the forum category",
    "name": "getThreadsInCategory",
    "group": "Forum",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\n      {\n        \"threadId\": 2,\n        \"threadTitle\": \"how to start\",\n        \"forumViewCount\": 40,\n        \"authorId\": null,\n        \"authorName\": null,\n        \"createdAt\": \"2015-09-04 18:44:42\",\n        \"updatedAt\": \"2015-09-04 20:30:16\"\n      },\n      {\n        \"threadId\": 1,\n        \"threadTitle\": \"how to start\",\n        \"forumViewCount\": 7,\n        \"authorId\": null,\n        \"authorName\": null,\n        \"createdAt\": \"2015-09-04 18:42:02\",\n        \"updatedAt\": \"2015-09-04 18:42:02\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/ForumController.php",
    "groupTitle": "Forum"
  },
  {
    "type": "get",
    "url": "/group/:groupId/class",
    "title": "Class list in the group",
    "name": "GetGroupClasses",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "groupName",
            "description": "<p>Name of group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parentId",
            "description": "<p>Parent Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "className",
            "description": "<p>Name of Classes</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "classId",
            "description": "<p>Id of the class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "courseName",
            "description": "<p>Name of the Course</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        [\n          {\n            \"groupId\": 143,\n            \"groupName\": \"1 A\",\n            \"parentId\": 142,\n            \"className\": \"1 A : School Bank Champs Junior\",\n            \"classId\": 28,\n            \"courseId\": 1,\n            \"courseName\": \"School Bank Champs Junior\"\n          }\n        ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/group/:groupId/description",
    "title": "Description of the group",
    "name": "GetGroupDescription",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parentId",
            "description": "<p>Id of the parent group, otherwise null</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "parentName",
            "description": "<p>Name of the parent group, otherwise null</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>Short description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longDescription",
            "description": "<p>Long Description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the Group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"bank\"",
              "\"school\"",
              "\"organization\""
            ],
            "optional": false,
            "field": "groupType",
            "description": "<p>Type of the groups</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>1 for closed group and 0 for open group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon url associated with the Group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_text",
            "description": "<p>Abbreviation to the group name to be used as the image in the case either the img_url or icon_url is not present</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>object key=&gt;value pair of the tags example {circle: &quot;circle1&quot;}</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": false,
            "field": "partOf",
            "description": "<p>true if the authorization key is sent and is a part of the group in all other case it is returned as false</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n          \"id\": 139,\n          \"img_url\": null,\n          \"name\": \"Abhyudaya Co-op. Bank Ltd.\",\n          \"shortDescription\": \"Abhyudaya Bank\",\n          \"longDescription\": null,\n          \"parentName\": null,\n          \"parentId\": null,\n          \"groupType\": \"bank\",\n          \"closed\": 0,\n          \"icon_url\": null,\n          \"icon_text\": \"AC\",\n          \"tags\": [],\n          \"partOf\": \"false\"\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/group",
    "title": "List of paginated groups",
    "name": "GetGroupPaginatedList",
    "group": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the list.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Id of the parent group, otherwise null</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>Short description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longDescription",
            "description": "<p>Long Description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the Group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"bank\"",
              "\"school\"",
              "\"organization\""
            ],
            "optional": false,
            "field": "group_type",
            "description": "<p>Type of the groups</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>1 for closed group and 0 for open group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon url associated with the Group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_text",
            "description": "<p>Abbreviation to the group name to be used as the image in the case either the img_url or icon_url is not present</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>object key=&gt;value pair of the tags example {circle: &quot;circle1&quot;}</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"per_page\": 10,\n            \"current_page\": 1,\n            \"next_page_url\": null,\n            \"prev_page_url\": null,\n            \"from\": 1,\n            \"to\": 2,\n            \"data\": [\n                {\n                    \"id\": 139,\n                    \"parent_id\": null,\n                    \"name\": \"Abhyudaya Co-op. Bank Ltd.\",\n                    \"short_description\": \"Abhyudaya Bank\",\n                    \"group_type\": \"bank\",\n                    \"img_url\": null,\n                    \"closed\": 0,\n                    \"icon_url\": null,\n                    \"icon_text\": \"AC\",\n                    \"tags\": []\n                },\n                {\n                    \"id\": 142,\n                    \"parent_id\": null,\n                    \"name\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n                    \"short_description\": \"S S High School\",\n                    \"group_type\": \"school\",\n                    \"img_url\": null,\n                    \"closed\": 0,\n                    \"icon_url\": null,\n                    \"icon_text\": \"SS\",\n                    \"tags\": []\n                }\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/group/type",
    "title": "Types of Groups present",
    "name": "GetGroupTypes",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "role_category_type",
            "description": "<p>Name of each group category</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        [\n          {\n            \"role_category_type\": \"bank\"\n          },\n          {\n            \"role_category_type\": \"school\"\n          }\n        ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/group/:groupId/subgroup",
    "title": "List of paginated sub-groups",
    "name": "GetSubGroupPaginatedList",
    "group": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the list.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Group id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Id of the parent group, otherwise null</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>Short description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longDescription",
            "description": "<p>Long Description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the Group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"bank\"",
              "\"school\"",
              "\"organization\""
            ],
            "optional": false,
            "field": "group_type",
            "description": "<p>Type of the groups</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>1 for closed group and 0 for open group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon url associated with the Group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_text",
            "description": "<p>Abbreviation to the group name to be used as the image in the case either the img_url or icon_url is not present</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>object key=&gt;value pair of the tags example {circle: &quot;circle1&quot;}</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"per_page\": 10,\n        \"current_page\": 1,\n        \"next_page_url\": null,\n        \"prev_page_url\": null,\n        \"from\": 1,\n        \"to\": 4,\n        \"data\": [\n            {\n                \"id\": 143,\n                \"parent_id\": 142,\n                \"name\": \"1 A\",\n                \"short_description\": null,\n                \"group_type\": \"school\",\n                \"img_url\": null,\n                \"closed\": 0,\n                \"icon_url\": null,\n                \"icon_text\": \"1A\",\n                \"parent_name\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n                \"tags\": []\n            },\n            {\n                \"id\": 144,\n                \"parent_id\": 142,\n                \"name\": \"1 B\",\n                \"short_description\": null,\n                \"group_type\": \"school\",\n                \"img_url\": null,\n                \"closed\": 0,\n                \"icon_url\": null,\n                \"icon_text\": \"1B\",\n                \"parent_name\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n                \"tags\": []\n            },\n            {\n                \"id\": 145,\n                \"parent_id\": 142,\n                \"name\": \"2 A\",\n                \"short_description\": null,\n                \"group_type\": \"school\",\n                \"img_url\": null,\n                \"closed\": 0,\n                \"icon_url\": null,\n                \"icon_text\": \"2A\",\n                \"parent_name\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n                \"tags\": []\n            },\n            {\n                \"id\": 146,\n                \"parent_id\": 142,\n                \"name\": \"3 A\",\n                \"short_description\": null,\n                \"group_type\": \"school\",\n                \"img_url\": null,\n                \"closed\": 0,\n                \"icon_url\": null,\n                \"icon_text\": \"3A\",\n                \"parent_name\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n                \"tags\": []\n            }\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/group/:groupId/subgroup/short",
    "title": "List of short un-paginated sub-groups",
    "name": "GetSubGroupShortList",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "groupId",
            "description": "<p>group id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "groupName",
            "description": "<p>Name of the Group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>Short description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon url associated with the group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_text",
            "description": "<p>Abbreviation to the group name to be used as the image in the case either the img_url or icon_url is not present</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"groupId\": 143,\n        \"groupName\": \"1 A\",\n        \"icon_text\": \"1A\",\n        \"img_url\": null,\n        \"short_description\": null\n      },\n      {\n        \"groupId\": 144,\n        \"groupName\": \"1 B\",\n        \"icon_text\": \"1B\",\n        \"img_url\": null,\n        \"short_description\": null\n      },\n      {\n        \"groupId\": 145,\n        \"groupName\": \"2 A\",\n        \"icon_text\": \"2A\",\n        \"img_url\": null,\n        \"short_description\": null\n      },\n      {\n        \"groupId\": 146,\n        \"groupName\": \"3 A\",\n        \"icon_text\": \"3A\",\n        \"img_url\": null,\n        \"short_description\": null\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/group/:groupId/subgroup/usermap",
    "title": "List of all people in all subgroups (object Type)",
    "name": "GetSubGroupsAllClasses",
    "group": "Groups",
    "description": "<p>here subgroup id are used as object key</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object-key",
            "description": "<p>group id's</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of the user</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleName",
            "description": "<p>Name of their role</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"143\": [\n            {\n                \"userId\": 57,\n                \"userName\": \"P M Mandke\",\n                \"roleName\": \"Admin\"\n            },\n            {\n                \"userId\": 58,\n                \"userName\": \"Abhyudaya Admin\",\n                \"roleName\": \"Admin\"\n            },\n            {\n                \"userId\": 61,\n                \"userName\": \"JYOLSNA NAIR\",\n                \"roleName\": \"Admin\"\n            },\n            {\n                \"userId\": 63,\n                \"userName\": \"ujjwal\",\n                \"roleName\": \"Student\"\n            }\n        ],\n        \"144\": [\n            {\n                \"userId\": 57,\n                \"userName\": \"P M Mandke\",\n                \"roleName\": \"Admin\"\n            },\n            {\n                \"userId\": 61,\n                \"userName\": \"JYOLSNA NAIR\",\n                \"roleName\": \"Admin\"\n            }\n        ],\n        \"145\": [\n            {\n                \"userId\": 61,\n                \"userName\": \"JYOLSNA NAIR\",\n                \"roleName\": \"Admin\"\n            },\n            {\n                \"userId\": 62,\n                \"userName\": \"Utkarsh shukla\",\n                \"roleName\": \"Admin\"\n            }\n        ],\n        \"146\": [\n            {\n                \"userId\": 60,\n                \"userName\": \"BHAGWAT BHOSALE\",\n                \"roleName\": \"Admin\"\n            },\n            {\n                \"userId\": 61,\n                \"userName\": \"JYOLSNA NAIR\",\n                \"roleName\": \"Admin\"\n            }\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/group/:groupId/subgroup/classmap",
    "title": "List of all classes in all subgroups",
    "name": "GetSubGroupsAllClasses",
    "group": "Groups",
    "description": "<p>here subgroup id are used as object key</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object-key",
            "description": "<p>group id's</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "className",
            "description": "<p>Name of the class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>Short description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "classId",
            "description": "<p>Id of the class</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"143\": [\n        {\n          \"classId\": 28,\n          \"className\": \"1 A : School Bank Champs Junior\",\n          \"shortDescription\": null\n        }\n      ],\n      \"144\": [\n        {\n          \"classId\": 29,\n          \"className\": \"1 B : School Bank Champs Junior\",\n          \"shortDescription\": null\n        }\n      ],\n      \"145\": [\n        {\n          \"classId\": 30,\n          \"className\": \"2 A : School Bank Champs Senior\",\n          \"shortDescription\": null\n        }\n      ],\n      \"146\": [\n        {\n          \"classId\": 31,\n          \"className\": \"3 A : School Bank Champs Senior\",\n          \"shortDescription\": null\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/group/:groupId/subgroup/people",
    "title": "List of all people in all subgroups (array type)",
    "name": "GetSubGroupsAllPeopleList",
    "group": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "groupId",
            "description": "<p>group id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "groupName",
            "description": "<p>Name of the Group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>Short description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "people",
            "description": "<p>array of people object in each gorup</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleId",
            "description": "<p>Role Id of the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleName",
            "description": "<p>Role Name of the user in the group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [\n        {\n            \"groupId\": 143,\n            \"groupName\": \"1 A\",\n            \"shortDescription\": null,\n            \"people\": [\n                {\n                    \"userName\": \"P M Mandke\",\n                    \"userId\": 57,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                },\n                {\n                    \"userName\": \"Abhyudaya Admin\",\n                    \"userId\": 58,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                },\n                {\n                    \"userName\": \"JYOLSNA NAIR\",\n                    \"userId\": 61,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                },\n                {\n                    \"userName\": \"ujjwal\",\n                    \"userId\": 63,\n                    \"roleId\": 8,\n                    \"roleName\": \"Student\"\n                }\n            ]\n        },\n        {\n            \"groupId\": 144,\n            \"groupName\": \"1 B\",\n            \"shortDescription\": null,\n            \"people\": [\n                {\n                    \"userName\": \"P M Mandke\",\n                    \"userId\": 57,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                },\n                {\n                    \"userName\": \"JYOLSNA NAIR\",\n                    \"userId\": 61,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                }\n            ]\n        },\n        {\n            \"groupId\": 145,\n            \"groupName\": \"2 A\",\n            \"shortDescription\": null,\n            \"people\": [\n                {\n                    \"userName\": \"JYOLSNA NAIR\",\n                    \"userId\": 61,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                },\n                {\n                    \"userName\": \"Utkarsh shukla\",\n                    \"userId\": 62,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                }\n            ]\n        },\n        {\n            \"groupId\": 146,\n            \"groupName\": \"3 A\",\n            \"shortDescription\": null,\n            \"people\": [\n                {\n                    \"userName\": \"BHAGWAT BHOSALE\",\n                    \"userId\": 60,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                },\n                {\n                    \"userName\": \"JYOLSNA NAIR\",\n                    \"userId\": 61,\n                    \"roleId\": 5,\n                    \"roleName\": \"Admin\"\n                }\n            ]\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/GroupController.php",
    "groupTitle": "Groups"
  },
  {
    "type": "post",
    "url": "/me/class/:classId/people",
    "title": "add existing user in a class",
    "name": "AddExistingUsertoClass",
    "group": "Me_Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "peopleUserId",
            "description": "<p>user id of the person to be added.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleId",
            "description": "<p>[Required] Role of the user in the class.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"name\":\"Abhyudaya Admin\",\n     \"username\":\"abhyudayaadmin\",\n     \"roleName\":\"Admin\",\n     \"userId\":58\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 422": [
          {
            "group": "Error422",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "UNPROCESSABLE-ENTITY",
            "description": "<p>The <code>user</code> is present in the group/class. The repeatation of the data, breaking db constraint gives this error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Unprocessable-Entity-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n        \"error\": \"User exists in the group\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/class/:classId/session",
    "title": "Add Session Data in Class",
    "name": "AddSessionInClass",
    "group": "Me_Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "topic",
            "description": "<p>Topic for the session</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>yyyy-mm-dd format.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "duration_min",
            "description": "<p>Duration of class in minutes.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number[]</p> ",
            "optional": false,
            "field": "attendanceUserId",
            "description": "<p>Array of the userId, present in the class.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n     \"success\": \"true\",\n     \"sessionId\": 12\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/class",
    "title": "Create a new class",
    "name": "CreateClass",
    "group": "Me_Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "hash_name",
            "description": "<p>Unique hash if user needs a hash to specify his class.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "className",
            "description": "<p>[Required] Name of the class.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleId",
            "description": "<p>[Required] Role of the user in the class.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number[]</p> ",
            "optional": false,
            "field": "courses",
            "description": "<p>array of Id of the courses.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number[]</p> ",
            "optional": false,
            "field": "groups",
            "description": "<p>array of Id of the parent groups.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_description",
            "description": "<p>Short Description of the class.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_description",
            "description": "<p>Long Description of the class.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>img_url.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon_url.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"success\": true,\n            \"class\": {\n              \"classId\": 28,\n              \"className\": \"1 A : School Bank Champs Junior\",\n              \"groups\": [\n                {\n                  \"groupId\": 143,\n                  \"groupName\": \"1 A\"\n                }\n              ],\n              \"courses\": [\n                {\n                  \"courseId\": 1,\n                  \"courseName\": \"School Bank Champs Junior\"\n                }\n              ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 422": [
          {
            "group": "Error422",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "UNPROCESSABLE-ENTITY",
            "description": "<p>The <code>user</code> is present in the group/class. The repeatation of the data, breaking db constraint gives this error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Unprocessable-Entity-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n        \"error\": \"User exists in the group\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/class/:classId/course/plan",
    "title": "whole plan for a class",
    "name": "GetClassCoursePlan",
    "group": "Me_Classes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"courseId\": \"1\",\n  \"courseName\": \"School Bank Champs Junior\",\n  \"shortDescription\": \"Social and Financial Education for Children Ages 10-14\",\n  \"longDescription\": \"A Class Course for Social and Financial Education for Children\",\n  \"courseImg_url\": \"http://www.schoolbankchamps.com/assets/img/slide/3.png\",\n  \"list\": [\n    {\n      \"courseContentType\": \"lesson\",\n      \"courseContentStep\": \"1\",\n      \"courseContentId\": \"1\",\n      \"content\": {\n        \"courseGroupId\": \"1\",\n        \"courseGroupTitle\": \"Introduction to School Bank Champs\",\n        \"courseGroupObjective\": \"<p>By the end of the lesson, the students will be able to:</p>\\n\\n<ol>\\n\\t<li>Recognize SchoolBank Champs and its Motto</li>\\n\\t<li>Be excited about becoming a School Bank Champ and applying the School Bank Champs motto.</li>\\n\\t<li>Be inspired to follow the steps to become a School Bank Champs and hence be interested in active learning of the content.</li>\\n\\t<li>&nbsp;Get introduced to the land of School Bank Champs and their friends.</li>\\n</ol>\",\n        \"categories\": [\n          {\n            \"courseGroupCategoryId\": \"2\",\n            \"courseGroupCategoryTitle\": \"Activities\",\n            \"resources\": [\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"1\",\n                \"courseGroupResourceId\": \"1\",\n                \"content\": {\n                  \"resourceId\": \"1\",\n                  \"resourceName\": \"SchoolBank Champs and their friends Story\",\n                  \"resourceValue\": \"<p>Hi!! We are School Bank Champs. My name is Krish and this is Seema, and we are your friends. We were normal students like you all who did not understood anything related to finance or banks. Then one day while going back from school, we met our friends from FinanceLand. They said that they belong to a far off mysterious world of finance, and are here to be friends with us. They will help us to become champs and will help us to bring happiness to the world.</p>\\n\\n<p>Our friends helped us to understand the complex world of finance and also help us to understand our rights and also create a community of other champs. We now as a community of champs, are working together to change the world.</p>\\n\",\n                  \"resourceHashId\": \"11111\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/1\"\n              },\n              {\n                \"resourceType\": \"pdf\",\n                \"resourceId\": \"1\",\n                \"courseGroupResourceId\": \"2\",\n                \"content\": {\n                  \"resourceId\": \"1\",\n                  \"resourceName\": \"Sample Pdf\",\n                  \"resourceValue\": \"https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB0QFjAAahUKEwjp4aG3qs_IAhVBkY4KHUmzAcA&url=http%3A%2F%2Fwww.cbu.edu.zm%2Fdownloads%2Fpdf-sample.pdf&usg=AFQjCNEOd544zjLddJqDnX8cWFvE2EAkJA&sig2=k9gailtNNdTIJes0HZ-U7g\",\n                  \"resourceHashId\": \"46545646\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/pdf/id/1\"\n              },\n              {\n                \"resourceType\": \"link\",\n                \"resourceId\": \"1\",\n                \"courseGroupResourceId\": \"3\",\n                \"content\": {\n                  \"resourceId\": \"1\",\n                  \"resourceName\": \"JanDhan Shiksha\",\n                  \"resourceValue\": \"http://jandhanshiksha.com\",\n                  \"resourceHashId\": \"4564654\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/link/id/1\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"4\",\n                \"courseGroupResourceId\": \"4\",\n                \"content\": {\n                  \"resourceId\": \"4\",\n                  \"resourceName\": \"Make a SMART plan for how they might save up to purchase the item\",\n                  \"resourceValue\": \"<p>The students should&nbsp;form pairs and select one of the items listed on the board or another item to make a plan for how they might save up to purchase it.</p>\\n\\n<p>Remember&nbsp;that when the students&nbsp;make plans, they should to make them <strong><em>SMART</em></strong>. That means that the plan is:</p>\\n\\n<ul>\\n\\t<li>Specific: should be clear to anyone what you mean, and it should not be broad (e.g. it should be something like &lsquo;improve my average score in Maths&rsquo;, not &lsquo;to do better in school&rsquo;).</li>\\n\\t<li>Measurable: you can decide if it was successful by a simple &lsquo;yes&rsquo;, &lsquo;no&rsquo;, or some other measurement, such as a grade in a class.</li>\\n\\t<li>Action oriented: it is clear what you (or other people) need to do.</li>\\n\\t<li>Realistic: it can be done given your time and resources.</li>\\n\\t<li>Time-bound: you have a schedule for when to do each activity.</li>\\n</ul>\\n\\n<p>Each pair should then create a plan for how they will reach the goal.&nbsp;Students should then present their plans to the rest of the class. They can also be uploaded here.</p>\\n\",\n                  \"resourceHashId\": \"11114\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/4\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"7\",\n                \"courseGroupResourceId\": \"5\",\n                \"content\": {\n                  \"resourceId\": \"7\",\n                  \"resourceName\": \"KWL of Savings and Borrowing\",\n                  \"resourceValue\": \"<ol>\\n\\t<li>Next, draw the KWL Chart (below) on the board:\\n\\t<table border=\\\"1\\\" cellpadding=\\\"0\\\" cellspacing=\\\"0\\\">\\n\\t\\t<tbody>\\n\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td style=\\\"height:90px; width:155px\\\">\\n\\t\\t\\t\\t<p>About</p>\\n\\n\\t\\t\\t\\t<p>Financial Institutions for:</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"height:90px; width:155px\\\">\\n\\t\\t\\t\\t<p><strong>Know</strong></p>\\n\\n\\t\\t\\t\\t<p><em>What do we already know</em></p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"height:90px; width:155px\\\">\\n\\t\\t\\t\\t<p><strong>Want</strong></p>\\n\\n\\t\\t\\t\\t<p><em>What do we want to learn</em></p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"height:90px; width:155px\\\">\\n\\t\\t\\t\\t<p><strong>Learn</strong></p>\\n\\n\\t\\t\\t\\t<p><em>What did we learn today</em></p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t</tr>\\n\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>Saving</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t</tr>\\n\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>Borrowing</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t</tr>\\n\\t\\t</tbody>\\n\\t</table>\\n\\t</li>\\n\\t<li>Ask students to share what they already know about financial institutions and have a new volunteer write the answers in the <em>Know</em> column in the relevant row</li>\\n\\t<li>Then ask students to do the same with what they want to learn about financial institutions in the <em>Want</em> column in the relevant row. Remind the students that they will come back to this chart and fill in the final column at the end of the activity.</li>\\n\\t<li>In their groups ask the students to discuss the following questions. After they finish discussing ask one person from each group to share their thoughts with the rest of the class.\\n\\t<ul>\\n\\t\\t<li>From what types of financial institutions can you save and borrow money? Include both formal and informal institutions or locations for borrowing.</li>\\n\\t\\t<li>What are the different types of financial institutions commonly found/available?</li>\\n\\t\\t<li>Are there any financial institutions in your community? What are they?</li>\\n\\t\\t<li>How do you borrow money from a financial institution?</li>\\n\\t\\t<li>What is a loan?</li>\\n\\t\\t<li>How can you create a connection/relationship with a person from the financial institution, or make him/her an offer of some kind? Is this corruption?</li>\\n\\t\\t<li>What is corruption?</li>\\n\\t\\t<li>What is the difference between corruption and assistance?</li>\\n\\t</ul>\\n\\t</li>\\n\\t<li>Finally, have the groups fill in the final column of their KWL Charts with what they learnt in the discussion.</li>\\n</ol>\\n\",\n                  \"resourceHashId\": \"11117\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/7\"\n              }\n            ]\n          },\n          {\n            \"courseGroupCategoryId\": \"3\",\n            \"courseGroupCategoryTitle\": \"Materials\",\n            \"resources\": [\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"1\",\n                \"courseGroupResourceId\": \"6\",\n                \"content\": {\n                  \"resourceId\": \"1\",\n                  \"resourceName\": \"SchoolBank Champs and their friends Story\",\n                  \"resourceValue\": \"<p>Hi!! We are School Bank Champs. My name is Krish and this is Seema, and we are your friends. We were normal students like you all who did not understood anything related to finance or banks. Then one day while going back from school, we met our friends from FinanceLand. They said that they belong to a far off mysterious world of finance, and are here to be friends with us. They will help us to become champs and will help us to bring happiness to the world.</p>\\n\\n<p>Our friends helped us to understand the complex world of finance and also help us to understand our rights and also create a community of other champs. We now as a community of champs, are working together to change the world.</p>\\n\",\n                  \"resourceHashId\": \"11111\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/1\"\n              }\n            ]\n          }\n        ],\n        \"resourceUrl\": \"http://api.edflock.com/resource/lesson/id/1\"\n      }\n    },\n    {\n      \"courseContentType\": \"text\",\n      \"courseContentStep\": \"2\",\n      \"courseContentId\": \"1\",\n      \"content\": {\n        \"resourceId\": \"1\",\n        \"resourceName\": \"SchoolBank Champs and their friends Story\",\n        \"resourceValue\": \"<p>Hi!! We are School Bank Champs. My name is Krish and this is Seema, and we are your friends. We were normal students like you all who did not understood anything related to finance or banks. Then one day while going back from school, we met our friends from FinanceLand. They said that they belong to a far off mysterious world of finance, and are here to be friends with us. They will help us to become champs and will help us to bring happiness to the world.</p>\\n\\n<p>Our friends helped us to understand the complex world of finance and also help us to understand our rights and also create a community of other champs. We now as a community of champs, are working together to change the world.</p>\\n\",\n        \"resourceHashId\": \"11111\",\n        \"resourceUrl\": \"http://api.edflock.com/resource/text/id/1\"\n      }\n    },\n    {\n      \"courseContentType\": \"pdf\",\n      \"courseContentStep\": \"3\",\n      \"courseContentId\": \"1\",\n      \"content\": {\n        \"resourceId\": \"1\",\n        \"resourceName\": \"Sample Pdf\",\n        \"resourceValue\": \"https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB0QFjAAahUKEwjp4aG3qs_IAhVBkY4KHUmzAcA&url=http%3A%2F%2Fwww.cbu.edu.zm%2Fdownloads%2Fpdf-sample.pdf&usg=AFQjCNEOd544zjLddJqDnX8cWFvE2EAkJA&sig2=k9gailtNNdTIJes0HZ-U7g\",\n        \"resourceHashId\": \"46545646\",\n        \"resourceUrl\": \"http://api.edflock.com/resource/pdf/id/1\"\n      }\n    },\n    {\n      \"courseContentType\": \"lesson\",\n      \"courseContentStep\": \"4\",\n      \"courseContentId\": \"2\",\n      \"content\": {\n        \"courseGroupId\": \"2\",\n        \"courseGroupTitle\": \"Needs and Wants\",\n        \"courseGroupObjective\": \"<p>By the end of the lesson, the students will be able to:</p>\\n\\n<ol>\\n\\t<li>Understand the difference between needs and wants</li>\\n\\t<li>Identify savings goals based on needs and wants&nbsp;</li>\\n</ol>\\n\",\n        \"categories\": [\n          {\n            \"courseGroupCategoryId\": \"2\",\n            \"courseGroupCategoryTitle\": \"Activities\",\n            \"resources\": [\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"2\",\n                \"courseGroupResourceId\": \"7\",\n                \"content\": {\n                  \"resourceId\": \"2\",\n                  \"resourceName\": \"Difference Between Need and Want\",\n                  \"resourceValue\": \"<p>Out of the list of Items listed below if it is a &lsquo;<em>need&rsquo;</em> the students should stand up or if they think it is a <em>&lsquo;want&rsquo; </em>they should sit down. Also they should explain their reasons</p>\\n\\n<ul>\\n\\t<li>Snacks and drinks for school recess</li>\\n\\t<li>Potato chips</li>\\n\\t<li>Bottled water</li>\\n\\t<li>School notebook</li>\\n\\t<li>Pens or pencils</li>\\n\\t<li>Fancy multi-coloured pen</li><li>New bike to ride to school</li>\\n</ul>\",\n                  \"resourceHashId\": \"11112\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/2\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"3\",\n                \"courseGroupResourceId\": \"8\",\n                \"content\": {\n                  \"resourceId\": \"3\",\n                  \"resourceName\": \"List of Items to Save For\",\n                  \"resourceValue\": \"As a class, make a list on the board of all the items that students would like to save up for. Items could include both needs and wants.\",\n                  \"resourceHashId\": \"11113\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/3\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"4\",\n                \"courseGroupResourceId\": \"9\",\n                \"content\": {\n                  \"resourceId\": \"4\",\n                  \"resourceName\": \"Make a SMART plan for how they might save up to purchase the item\",\n                  \"resourceValue\": \"<p>The students should&nbsp;form pairs and select one of the items listed on the board or another item to make a plan for how they might save up to purchase it.</p>\\n\\n<p>Remember&nbsp;that when the students&nbsp;make plans, they should to make them <strong><em>SMART</em></strong>. That means that the plan is:</p>\\n\\n<ul>\\n\\t<li>Specific: should be clear to anyone what you mean, and it should not be broad (e.g. it should be something like &lsquo;improve my average score in Maths&rsquo;, not &lsquo;to do better in school&rsquo;).</li>\\n\\t<li>Measurable: you can decide if it was successful by a simple &lsquo;yes&rsquo;, &lsquo;no&rsquo;, or some other measurement, such as a grade in a class.</li>\\n\\t<li>Action oriented: it is clear what you (or other people) need to do.</li>\\n\\t<li>Realistic: it can be done given your time and resources.</li>\\n\\t<li>Time-bound: you have a schedule for when to do each activity.</li>\\n</ul>\\n\\n<p>Each pair should then create a plan for how they will reach the goal.&nbsp;Students should then present their plans to the rest of the class. They can also be uploaded here.</p>\\n\",\n                  \"resourceHashId\": \"11114\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/4\"\n              }\n            ]\n          }\n        ],\n        \"resourceUrl\": \"http://api.edflock.com/resource/lesson/id/2\"\n      }\n    },\n    {\n      \"courseContentType\": \"lesson\",\n      \"courseContentStep\": \"5\",\n      \"courseContentId\": \"3\",\n      \"content\": {\n        \"courseGroupId\": \"3\",\n        \"courseGroupTitle\": \"Saving Money\",\n        \"courseGroupObjective\": \"<p>By the end of the lesson, the students will be able to:</p>\\n\\n<ol>\\n\\t<li>Identify various financial institutions in their community</li>\\n\\t<li>Understand how to save using available financial institutions</li>\\n</ol>\\n\",\n        \"categories\": [\n          {\n            \"courseGroupCategoryId\": \"2\",\n            \"courseGroupCategoryTitle\": \"Activities\",\n            \"resources\": [\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"5\",\n                \"courseGroupResourceId\": \"10\",\n                \"content\": {\n                  \"resourceId\": \"5\",\n                  \"resourceName\": \"Where people keep Money?\",\n                  \"resourceValue\": \"Students could share as many places as possible where people keep money and ask for a volunteer to write the ideas on the board. Also a photo can be taken and uploaded here.\",\n                  \"resourceHashId\": \"11115\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/5\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"6\",\n                \"courseGroupResourceId\": \"11\",\n                \"content\": {\n                  \"resourceId\": \"6\",\n                  \"resourceName\": \"Where to save?\",\n                  \"resourceValue\": \"<li>Divide the students into groups of five to seven and ask them to discuss the following questions in their groups.\\n\\t<ul style=\\\"list-style-type:circle\\\">\\n\\t\\t<li>Where do people in your community save most often?</li>\\n\\t\\t<li>Where would you prefer to save?</li>\\n\\t</ul>\\n</li>\",\n                  \"resourceHashId\": \"11116\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/6\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"7\",\n                \"courseGroupResourceId\": \"12\",\n                \"content\": {\n                  \"resourceId\": \"7\",\n                  \"resourceName\": \"KWL of Savings and Borrowing\",\n                  \"resourceValue\": \"<ol>\\n\\t<li>Next, draw the KWL Chart (below) on the board:\\n\\t<table border=\\\"1\\\" cellpadding=\\\"0\\\" cellspacing=\\\"0\\\">\\n\\t\\t<tbody>\\n\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td style=\\\"height:90px; width:155px\\\">\\n\\t\\t\\t\\t<p>About</p>\\n\\n\\t\\t\\t\\t<p>Financial Institutions for:</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"height:90px; width:155px\\\">\\n\\t\\t\\t\\t<p><strong>Know</strong></p>\\n\\n\\t\\t\\t\\t<p><em>What do we already know</em></p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"height:90px; width:155px\\\">\\n\\t\\t\\t\\t<p><strong>Want</strong></p>\\n\\n\\t\\t\\t\\t<p><em>What do we want to learn</em></p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"height:90px; width:155px\\\">\\n\\t\\t\\t\\t<p><strong>Learn</strong></p>\\n\\n\\t\\t\\t\\t<p><em>What did we learn today</em></p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t</tr>\\n\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>Saving</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t</tr>\\n\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>Borrowing</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t<td style=\\\"width:155px\\\">\\n\\t\\t\\t\\t<p>&nbsp;</p>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t</tr>\\n\\t\\t</tbody>\\n\\t</table>\\n\\t</li>\\n\\t<li>Ask students to share what they already know about financial institutions and have a new volunteer write the answers in the <em>Know</em> column in the relevant row</li>\\n\\t<li>Then ask students to do the same with what they want to learn about financial institutions in the <em>Want</em> column in the relevant row. Remind the students that they will come back to this chart and fill in the final column at the end of the activity.</li>\\n\\t<li>In their groups ask the students to discuss the following questions. After they finish discussing ask one person from each group to share their thoughts with the rest of the class.\\n\\t<ul>\\n\\t\\t<li>From what types of financial institutions can you save and borrow money? Include both formal and informal institutions or locations for borrowing.</li>\\n\\t\\t<li>What are the different types of financial institutions commonly found/available?</li>\\n\\t\\t<li>Are there any financial institutions in your community? What are they?</li>\\n\\t\\t<li>How do you borrow money from a financial institution?</li>\\n\\t\\t<li>What is a loan?</li>\\n\\t\\t<li>How can you create a connection/relationship with a person from the financial institution, or make him/her an offer of some kind? Is this corruption?</li>\\n\\t\\t<li>What is corruption?</li>\\n\\t\\t<li>What is the difference between corruption and assistance?</li>\\n\\t</ul>\\n\\t</li>\\n\\t<li>Finally, have the groups fill in the final column of their KWL Charts with what they learnt in the discussion.</li>\\n</ol>\\n\",\n                  \"resourceHashId\": \"11117\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/7\"\n              }\n            ]\n          },\n          {\n            \"courseGroupCategoryId\": \"3\",\n            \"courseGroupCategoryTitle\": \"Materials\",\n            \"resources\": [\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"8\",\n                \"courseGroupResourceId\": \"13\",\n                \"content\": {\n                  \"resourceId\": \"8\",\n                  \"resourceName\": \"Types of Account\",\n                  \"resourceValue\": \"<p><strong>Types of Accounts</strong></p>\\n\\n<p><strong>Current Accounts</strong>: Some people have businesses, shops. They have to deposit or withdraw money often. Such accounts are called Current Accounts. The money in these accounts does not accrue any interest. But the account holders can deposit or withdraw money from their accounts several times in a day.</p>\\n\\n<p><strong>Savings Accounts</strong>: Majority of the people however, deposit or withdraw money only a few times. The money saved by them accrues interest. Such accounts are called Savings Accounts. Money can be deposited in these accounts for any number of times, but there are rules about the number of times that money can be withdrawn from the account in one week.</p>\\n\\n<p><strong>Fixed Deposit Accounts:</strong> Some people deposit money for a particular duration, like 1 year or 2 years, etc. This is called Fixed Deposit Account. The account holder cannot use the money for the duration for which it has been deposited. If there is a severe need, then the fixed deposit can be broken and the money can be used but the interest accrued is reduced. If the money is taken after completing the duration, the interest accrued is more.</p>\\n\\n<p><strong>Recurring Deposit Accounts</strong>: Some people decide that they will save a fixed amount every month regularly for a period of 2 years or 3 years without withdrawing it. For e.g. saving Rs.500/- per month for a period of 3 years. The account holder cannot use this money for the duration that he decides to save. If there is a severe need, then the fixed deposit can be broken and the money can be used but the interest accrued is reduced. If the money is taken after completing the duration, the interest accrued is more.&nbsp; Such an account is known as Recurring Deposit account.&nbsp;</p>\\n\",\n                  \"resourceHashId\": \"11118\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/8\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"9\",\n                \"courseGroupResourceId\": \"14\",\n                \"content\": {\n                  \"resourceId\": \"9\",\n                  \"resourceName\": \"Advantage of Opening and Using an Account\",\n                  \"resourceValue\": \"<p><strong>Advantages of Opening and Using an Account</strong></p>\\n\\n<p><strong>Safety</strong>: Money kept at home in a box, under the mattresses or even in purses can be stolen. It can also be lost during natural calamities like floods, etc. while in the bank money is safer. Since the banks insure our bank accounts and also gets help from the Reserve Bank of India, our money is well-protected.</p>\\n\\n<p><strong>Growth</strong>: We accrue interest on the money kept in the bank account, this helps our money to grow. Money kept at home cannot grow. Similarly money invested in other trades or businesses cannot be guaranteed to grow.</p>\\n\\n<p><strong>Loans</strong>: On the basis of our savings, fixed deposits or recurring deposits, bank can give us loans for our needs like buying a house or for education. Other financial institutions also provide loans on the basis of the savings in your bank account.&nbsp;</p>\",\n                  \"resourceHashId\": \"11119\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/9\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"10\",\n                \"courseGroupResourceId\": \"15\",\n                \"content\": {\n                  \"resourceId\": \"10\",\n                  \"resourceName\": \"Important Banking Terms\",\n                  \"resourceValue\": \"<p><strong>Important Banking Terms</strong></p>\\n\\n<p><strong>Withdrawal: </strong>This is the money that you take out of your account to pay for something. It is also called a &lsquo;debit&rsquo;.</p>\\n\\n<p><strong>Deposit: </strong>This is the money that you add to your account. It is also called a &lsquo;credit&rsquo;.</p>\\n\\n<p><strong>Balance: </strong>This is the amount of money that you currently have in your account. When you calculate your balance it is the total of all deposits minus the total amount of withdrawal.</p>\\n\\n<p><strong>Interest: </strong>Interest is a percentage that determines the growth of the amount of money you have or owe, such as 4% per year. This means that for every Rs. 1000 deposited in the account they will get 40 Rs more by the bank, i.e. 1040 Rs.</p>\\n\",\n                  \"resourceHashId\": \"11120\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/10\"\n              },\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"11\",\n                \"courseGroupResourceId\": \"16\",\n                \"content\": {\n                  \"resourceId\": \"11\",\n                  \"resourceName\": \"How to Open Bank Account\",\n                  \"resourceValue\": \"<p>The Reserve Bank of India and the Indian Banking Association are aiming to help young people throughout India open accounts.&nbsp; Your school will be paired with a branch and they will help your students gain access to their account. The account features are as follow:</p>\\n\\n<ul>\\n\\t<li>Any person of ten years of age can open this account individually. Account can be opened in the name of minor with natural guardian.</li>\\n\\t<li>An account can be opened with Zero balance.</li>\\n\\t<li>No service charges for non maintenance of the minimum balance.</li>\\n\\t<li>50 (Fifty) withdrawals per year free of charge.</li>\\n\\t<li>One cheque book per year free of charge.</li>\\n\\t<li>Total balance in the account should not exceed Rs.2,00,000/- lac.</li>\\n\\t<li>For introduction simplified KYC procedure is applicable. Bank&#39;s existing client who has fulfilled full KYC norms can introduce the customer&#39;s identity and certify the address.</li>\\n\\t<li>Interest at Saving Bank rate i.e. @ 4% is allowed.</li>\\n\\t<li>Account can be opened in any Branch of any Bank</li>\\n</ul>\\n\",\n                  \"resourceHashId\": \"11121\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/11\"\n              }\n            ]\n          }\n        ],\n        \"resourceUrl\": \"http://api.edflock.com/resource/lesson/id/3\"\n      }\n    },\n    {\n      \"courseContentType\": \"lesson\",\n      \"courseContentStep\": \"6\",\n      \"courseContentId\": \"4\",\n      \"content\": {\n        \"courseGroupId\": \"4\",\n        \"courseGroupTitle\": \"My Account\",\n        \"courseGroupObjective\": \"<p>By the end of the lesson, the students will be able to:</p>\\n\\n<ol>\\n\\t<li>Open their own bank account.</li>\\n</ol>\\n\",\n        \"categories\": [\n          {\n            \"courseGroupCategoryId\": \"2\",\n            \"courseGroupCategoryTitle\": \"Activities\",\n            \"resources\": [\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"13\",\n                \"courseGroupResourceId\": \"18\",\n                \"content\": {\n                  \"resourceId\": \"13\",\n                  \"resourceName\": \"Opening Account Exercise\",\n                  \"resourceValue\": \"<ol>\\n\\t<li>The class is divided into seven groups and they will sit together. All the children in group one will be given a copy of Slip One from the materials below. All those in group two will be given&nbsp;a copy of Slip Two. All those in group three get a copy of Slip Three etc.</li>\\n\\t<li>Each group that now have five minutes to read and understand the information on their slip. If they have any questions, they should ask someone in their group. The group must work together. Their job is to help each other understand the information in the slip that they all share.</li>\\n\\t<li>After five minutes, re-arrange the groups into new teams. Each team should have a person who has Slip One, someone with Slip Two, someone with Slip Three, someone with Slip Four, a person with Slip Five, someone with Slip Six and someone with Slip Seven. Now give each team a name such as Red Team, Blue Team etc.</li>\\n\\t<li>The children now have fifteen minutes to work as a team. Taking it in turns, each person should explain to the others in the team all the information that is on her slip. So the person with Slip One starts. She shares all the information that is on her slip. The other six children in each team listen and learn. They can take notes if they like.&nbsp; Then the person with Slip Two teachers&nbsp; the rest of the team what is on his slip. And so on. Finally at the end of the exercise teacher will collect all the slips and give each team a test. So team members need to work together.</li>\\n\\t<li>After fifteen minutes, collect all the slips.</li>\\n\\t<li>Tell the children that they now have ten minutes to study their notes and prepare for the test.</li>\\n\\t<li>After ten minutes, ask the children to put away the notes and give them the test. Explain that you want to see which team gets the highest mark.</li>\\n</ol>\\n\",\n                  \"resourceHashId\": \"11123\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/13\"\n              }\n            ]\n          },\n          {\n            \"courseGroupCategoryId\": \"3\",\n            \"courseGroupCategoryTitle\": \"Materials\",\n            \"resources\": [\n              {\n                \"resourceType\": \"text\",\n                \"resourceId\": \"12\",\n                \"courseGroupResourceId\": \"17\",\n                \"content\": {\n                  \"resourceId\": \"12\",\n                  \"resourceName\": \"Steps to Opening an Account\",\n                  \"resourceValue\": \"<h3>Steps to Opening an Account (Slips 1 &ndash; 7)</h3>\\n\\n<ol>\\n\\t<li><strong>Think about what you want to do with your money. </strong>If you are 10 years old or over you can open a bank account. An account is a safe place in the bank where they keep your money for you.. There are different types of accounts. Some are for when you want to put money in and leave it there for a long time to help you save up for something. Can you think of something you&rsquo;d like to save for? Others are just for when you want a safe place to keep your money but also want to be able to take some out as often as you like. Which would you like?</li>\\n\\n\\t<li><strong>Visit the bank and talk to someone who works there. </strong>A bank Official will come to your school and if he does Once you know what sort of account you want you should visit a nearby bank with your mum or dad or with the person who looks after you. Talk to the people at the bank officer and explain that you want to open an account. Don&rsquo;t be shy &ndash; they are there to help you. The bank officer will give you a form to write in. Some banks also visit schools to make things easier!</li>\\n\\n\\t<li><strong>Fill in the form. </strong>You have to fill in all of the form. They will ask your name and address. You will also need to sign your name. The bank will also ask you to give them copies of your photograph. Remember to smile for the camera!</li>\\n\\n\\t<li><strong>Give the form back to the bank. </strong>Once you have answered all the questions in the form give it back to the bank. They will read your answers.&nbsp; Banks are very careful about who they work with! Sometimes a letter from the school principal explaining that he or she knows you can help. Do you think you can get one? Ask nicely!</li>\\n\\n\\t<li><strong>Someone at the bank will read your answers. </strong>Someone at the bank reads your answers to make sure they are all correct. Don&rsquo;t worry &ndash; it isn&rsquo;t a test! The bank just wants to know who you are! If you were making a new friend you would want to know who they were, wouldn&rsquo;t you? Then the bank will open your account for you. The bank might give you a pass book and a cheque book. Are you excited!</li>\\n\\n\\t<li><strong>Put in some money. </strong>As soon as the account is open the bank you can start depositing money. Now it&rsquo;s time to start saving! Good luck.</li>\\n</ol>\\n\",\n                  \"resourceHashId\": \"11122\"\n                },\n                \"resourceUrl\": \"http://api.edflock.com/resource/text/id/12\"\n              }\n            ]\n          }\n        ],\n        \"resourceUrl\": \"http://api.edflock.com/resource/lesson/id/4\"\n      }\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes"
  },
  {
    "type": "get",
    "url": "/me/class",
    "title": "List of user class",
    "name": "GetMyClassPaginatedList",
    "group": "Me_Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "group",
            "description": "<p>Group Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>class id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>shortDescription of the Class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleName",
            "description": "<p>role name of the user in the class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the class (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>1 for closed class and 0 for open class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon url associated with the class (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_text",
            "description": "<p>Abbreviation to the class name to be used as the image in the case either the img_url or icon_url is not present</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"data\": [\n        {\n          \"id\": 50,\n          \"name\": \"new class 2\",\n          \"shortDescription\": null,\n          \"img_url\": null,\n          \"icon_url\": null,\n          \"icon_text\": \"NC\",\n          \"closed\": 0,\n          \"roleName\": \"Student\",\n          \"groupName\": null,\n          \"groupId\": null,\n          \"courseName\": \"School Bank Champs Junior\",\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"School Bank Champ Admin\",\n          \"belongs_to_type\": \"user\",\n          \"belongs_to_id\": 308\n        },\n        {\n          \"id\": 53,\n          \"name\": \"class 1\",\n          \"shortDescription\": null,\n          \"img_url\": null,\n          \"icon_url\": null,\n          \"icon_text\": \"C1\",\n          \"closed\": 0,\n          \"roleName\": \"Principal\",\n          \"groupName\": \"random group\",\n          \"groupId\": 1392,\n          \"courseName\": \"School Bank Champs Senior\",\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"random group\",\n          \"belongs_to_type\": \"group\",\n          \"belongs_to_id\": 1392\n        },\n        {\n          \"id\": 54,\n          \"name\": \"class 1\",\n          \"shortDescription\": null,\n          \"img_url\": null,\n          \"icon_url\": null,\n          \"icon_text\": \"C1\",\n          \"closed\": 0,\n          \"roleName\": \"Principal\",\n          \"groupName\": \"random group\",\n          \"groupId\": 1392,\n          \"courseName\": \"School Bank Champs Senior\",\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"random group\",\n          \"belongs_to_type\": \"group\",\n          \"belongs_to_id\": 1392\n        },\n        {\n          \"id\": 52,\n          \"name\": \"hello\",\n          \"shortDescription\": null,\n          \"img_url\": null,\n          \"icon_url\": null,\n          \"icon_text\": \"H\",\n          \"closed\": 0,\n          \"roleName\": \"Admin\",\n          \"groupName\": \"Abhyudaya Co-op. Bank Ltd.\",\n          \"groupId\": 664,\n          \"courseName\": \"School Bank Champs Senior\",\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"Abhyudaya Co-op. Bank Ltd.\",\n          \"belongs_to_type\": \"group\",\n          \"belongs_to_id\": 664\n        },\n        {\n          \"id\": 49,\n          \"name\": \"RANDOM CLASS\",\n          \"shortDescription\": null,\n          \"img_url\": null,\n          \"icon_url\": null,\n          \"icon_text\": \"RC\",\n          \"closed\": 0,\n          \"roleName\": \"Principal\",\n          \"groupName\": \"Abhyudaya Co-op. Bank Ltd.\",\n          \"groupId\": 664,\n          \"courseName\": \"School Bank Champs Junior\",\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"Abhyudaya Co-op. Bank Ltd.\",\n          \"belongs_to_type\": \"group\",\n          \"belongs_to_id\": 664\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/class/:classId/short",
    "title": "Short Description of class",
    "name": "GetShortClassDescription",
    "group": "Me_Classes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n      \"classId\": 28,\n      \"className\": \"1 A : School Bank Champs Junior\",\n      \"groups\": [\n        {\n          \"groupId\": 143,\n          \"groupName\": \"1 A\"\n        }\n      ],\n      \"courses\": [\n        {\n          \"courseId\": 1,\n          \"courseName\": \"School Bank Champs Junior\"\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 403": [
          {
            "group": "Error403",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The <code>user</code> does not has access to perform this action, The access level for the operation is higher than what person has in this class/group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n      \"error\": {\n        \"code\": \"GEN-FORBIDDEN\",\n        \"http_code\": 403,\n        \"message\": \"Forbidden\"\n      }\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/class/:classId/leave",
    "title": "Leave a class",
    "name": "LeaveLoggedInUserFromClass",
    "group": "Me_Classes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"success\": \"true\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 422": [
          {
            "group": "Error422",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "UNPROCESSABLE-ENTITY",
            "description": "<p>The <code>user</code> is present in the group/class. The repeatation of the data, breaking db constraint gives this error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Unprocessable-Entity-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n        \"error\": \"User exists in the group\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/class/:classId/session",
    "title": "Paginated Sessions Record of Class",
    "name": "SessionRecordOfClass",
    "group": "Me_Classes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"per_page\": 10,\n    \"current_page\": 1,\n    \"next_page_url\": \"http://localhost:8000/me/class/1/session/?page=2\",\n    \"prev_page_url\": null,\n    \"from\": 1,\n    \"to\": 10,\n    \"data\": [\n        {\n            \"sessionId\": 10,\n            \"sessionTopic\": \"asdasd\",\n            \"sessionDate\": \"2015-12-31\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 21,\n            \"present\": 0\n        },\n        {\n            \"sessionId\": 12,\n            \"sessionTopic\": \"sdfafsgdsgd\",\n            \"sessionDate\": \"2015-12-31\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 23,\n            \"present\": 1\n        },\n        {\n            \"sessionId\": 13,\n            \"sessionTopic\": \"asda\",\n            \"sessionDate\": \"2015-12-31\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 34,\n            \"present\": 1\n        },\n        {\n            \"sessionId\": 9,\n            \"sessionTopic\": \"random\",\n            \"sessionDate\": \"2015-08-12\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 20,\n            \"present\": 0\n        },\n        {\n            \"sessionId\": 1,\n            \"sessionTopic\": null,\n            \"sessionDate\": \"2015-07-30\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 40,\n            \"present\": 0\n        },\n        {\n            \"sessionId\": 2,\n            \"sessionTopic\": null,\n            \"sessionDate\": \"2015-07-30\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 30,\n            \"present\": 0\n        },\n        {\n            \"sessionId\": 3,\n            \"sessionTopic\": null,\n            \"sessionDate\": \"2015-07-30\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 35,\n            \"present\": 0\n        },\n        {\n            \"sessionId\": 11,\n            \"sessionTopic\": \"asndasdnjn\",\n            \"sessionDate\": \"2015-01-31\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 24,\n            \"present\": 0\n        },\n        {\n            \"sessionId\": 8,\n            \"sessionTopic\": null,\n            \"sessionDate\": \"2001-12-31\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 0,\n            \"present\": 4\n        },\n        {\n            \"sessionId\": 7,\n            \"sessionTopic\": null,\n            \"sessionDate\": \"2001-12-30\",\n            \"createdById\": 24,\n            \"createdByName\": \"Subodh IBA\",\n            \"durationMin\": 0,\n            \"present\": 3\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 403": [
          {
            "group": "Error403",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The <code>user</code> does not has access to perform this action, The access level for the operation is higher than what person has in this class/group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n      \"error\": {\n        \"code\": \"GEN-FORBIDDEN\",\n        \"http_code\": 403,\n        \"message\": \"Forbidden\"\n      }\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/session/:sessionId/attendance",
    "title": "Attendance Record of session in class",
    "name": "attendanceRecordInSession",
    "group": "Me_Classes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"userId\": 3,\n        \"name\": null\n    },\n    {\n        \"userId\": 4,\n        \"name\": null\n    },\n    {\n        \"userId\": 1,\n        \"name\": \"test\"\n    },\n    {\n        \"userId\": 2,\n        \"name\": \"utk\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 403": [
          {
            "group": "Error403",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The <code>user</code> does not has access to perform this action, The access level for the operation is higher than what person has in this class/group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n      \"error\": {\n        \"code\": \"GEN-FORBIDDEN\",\n        \"http_code\": 403,\n        \"message\": \"Forbidden\"\n      }\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/class/:classId/student",
    "title": "Short students of class",
    "name": "getStudentsOfClass",
    "group": "Me_Classes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"userName\": \"test\",\n        \"userId\": 1\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 403": [
          {
            "group": "Error403",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The <code>user</code> does not has access to perform this action, The access level for the operation is higher than what person has in this class/group</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n      \"error\": {\n        \"code\": \"GEN-FORBIDDEN\",\n        \"http_code\": 403,\n        \"message\": \"Forbidden\"\n      }\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/community",
    "title": "List of user community",
    "name": "GetMyCommunityPaginatedList",
    "group": "Me_Community",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>class id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>shortDescription of the Class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleName",
            "description": "<p>role name of the user in the class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the class (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>1 for closed class and 0 for open class</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon url associated with the class (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_text",
            "description": "<p>Abbreviation to the class name to be used as the image in the case either the img_url or icon_url is not present</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"data\": [\n        {\n          \"id\": 50,\n          \"name\": \"new class 2\",\n          \"shortDescription\": null,\n          \"img_url\": null,\n          \"icon_url\": null,\n          \"icon_text\": \"NC\",\n          \"closed\": 0,\n          \"roleName\": \"Student\",\n          \"groupName\": null,\n          \"groupId\": null,\n          \"courseName\": \"School Bank Champs Junior\",\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"School Bank Champ Admin\",\n          \"belongs_to_type\": \"user\",\n          \"belongs_to_id\": 308\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserCommunityController.php",
    "groupTitle": "Me_Community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/course/short",
    "title": "short detail list with course joined/Bought",
    "name": "GetCourseListShortWithJoined",
    "group": "Me_Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "List",
            "description": "<p>Paginated List of the courses</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"courseId\": 1,\n        \"courseName\": \"School Bank Champs Junior\",\n        \"shortDescription\": \"Social and Financial Education for Children Ages 10-14\"\n      },\n      {\n        \"courseId\": 2,\n        \"courseName\": \"School Bank Champs Senior\",\n        \"shortDescription\": \"Social and Financial Education for Young People Ages 15 and above\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserCourseController.php",
    "groupTitle": "Me_Courses",
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/course",
    "title": "paginated detail list with course joined/Bought",
    "name": "GetCourseListWithJoined",
    "group": "Me_Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the list.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "List",
            "description": "<p>Paginated List of the courses</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n            \"per_page\": 10,\n            \"current_page\": 1,\n            \"next_page_url\": null,\n            \"prev_page_url\": null,\n            \"from\": 1,\n            \"to\": 2,\n            \"data\": [\n                {\n                    \"id\": 1,\n                    \"name\": \"School Bank Champs Junior\",\n                    \"shortDescription\": \"Social and Financial Education for Children Ages 10-14\",\n                    \"img_url\": null,\n                    \"joined\": null\n                },\n                {\n                    \"id\": 2,\n                    \"name\": \"School Bank Champs Senior\",\n                    \"shortDescription\": \"Social and Financial Education for Young People Ages 15 and above\",\n                    \"img_url\": null,\n                    \"joined\": null\n                }\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserCourseController.php",
    "groupTitle": "Me_Courses",
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/course/:courseId/detail",
    "title": "Detail for a User Joined/Bought Course",
    "name": "GetMyCourseDetail",
    "group": "Me_Courses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>course id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the course</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shortDescription",
            "description": "<p>Short description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "longDescription",
            "description": "<p>Long Description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the course (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "joined",
            "description": "<p>1 if the user has been associated to the course or has bought it(can be null)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"name\": \"School Bank Champs Junior\",\n    \"shortDescription\": \"Social and Financial Education for Children Ages 10-14\",\n    \"longDescription\": \"A Class Course for Social and Financial Education for Children\",\n    \"img_url\": null,\n    \"joined\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserCourseController.php",
    "groupTitle": "Me_Courses",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/me/forum/post/{postId}/like",
    "title": "Like a post",
    "name": "LikePostInForum",
    "group": "Me_Forum",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\"success\":true}\n    {\"success\":true,\"message\":\"User already liked the post\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserForumController.php",
    "groupTitle": "Me_Forum",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/me/forum/thread/{threadId}/post",
    "title": "add a post in athread",
    "name": "add_post_in_a_thread",
    "group": "Me_Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>[required].</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserForumController.php",
    "groupTitle": "Me_Forum",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/me/forum/category/{categoryId}/thread",
    "title": "add a thread in a category",
    "name": "add_thread_in_category",
    "group": "Me_Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>[required].</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserForumController.php",
    "groupTitle": "Me_Forum",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/class/{classId}/forum/categories",
    "title": "Create a new category in class",
    "name": "createClassForumCategory",
    "group": "Me_Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>[required].</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "subtitle",
            "description": "<p>subtitle.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserClassController.php",
    "groupTitle": "Me_Forum",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/community/{communityId}/forum/categories",
    "title": "Create a new category in community",
    "name": "createCommunityForumCategory",
    "group": "Me_Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>[required].</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "subtitle",
            "description": "<p>subtitle.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserCommunityController.php",
    "groupTitle": "Me_Forum",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/me/group/{groupId}/forum/categories",
    "title": "Create a new category in group",
    "name": "createGroupForumCategory",
    "group": "Me_Forum",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>[required].</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "subtitle",
            "description": "<p>subtitle.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Forum",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/group/:groupId/people",
    "title": "Add existing people in group",
    "name": "AddExistingPeopleInGroup",
    "group": "Me_Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "peopleUserId",
            "description": "<p>[Required] id of the usert to be added.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleId",
            "description": "<p>[Required] Id of the role he has to be allotted in the group.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"name\": \"JYOLSNA NAIR\",\n        \"username\": \"jyolsna\",\n        \"roleName\": \"Admin\",\n        \"userId\": 61\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 422": [
          {
            "group": "Error422",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "UNPROCESSABLE-ENTITY",
            "description": "<p>The <code>user</code> is present in the group/class. The repeatation of the data, breaking db constraint gives this error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Unprocessable-Entity-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n        \"error\": \"User exists in the group\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/group/:groupId/type",
    "title": "add type detail",
    "description": "<p>The input fields have condition on the value of group_type</p> ",
    "name": "AddGroupTypeDetail",
    "group": "Me_Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"bank\"",
              "\"school\"",
              "\"organization\""
            ],
            "optional": false,
            "field": "group_type",
            "description": "<p>the type of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>when group_type=school</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>when group_type=school</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "state",
            "description": "<p>when group_type=school</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>when group_type=school</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "phone_no",
            "description": "<p>when group_type=school</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>when group_type=school</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle",
            "description": "<p>when group_type=bank</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "zone",
            "description": "<p>when group_type=bank</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "region",
            "description": "<p>when group_type=bank</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "iifc_code",
            "description": "<p>when group_type=bank</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"urban\"",
              "\"rural\""
            ],
            "optional": false,
            "field": "branch_category",
            "description": "<p>when group_type=bank</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "website",
            "description": "<p>when group_type=organization</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"success\": \"true\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/group",
    "title": "Create a new group",
    "name": "CreateGroup",
    "group": "Me_Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "hash_name",
            "description": "<p>Unique hash if user needs a hash to specify his group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>[Required] Name of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Id of the part if this group is a subgroup.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_description",
            "description": "<p>Short Description of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_description",
            "description": "<p>Long Description of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"bank\"",
              "\"school\""
            ],
            "optional": false,
            "field": "group_type",
            "description": "<p>the type of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "1",
              "0"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>if the group is closed.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>img_url.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon_url.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"success\": \"true\",\n            \"data\": {\n                \"id\": 134,\n                \"group_type\": \"bank\"\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 422": [
          {
            "group": "Error422",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "UNPROCESSABLE-ENTITY",
            "description": "<p>The <code>user</code> is present in the group/class. The repeatation of the data, breaking db constraint gives this error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Unprocessable-Entity-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n        \"error\": \"User exists in the group\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/group/:groupId/subgroup",
    "title": "Create subgroup inside a group and add admin",
    "name": "CreateSubgroupAddAdmin",
    "group": "Me_Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "hash_name",
            "description": "<p>Unique hash if user needs a hash to specify his group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>[Required] Name of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Id of the part if this group is a subgroup.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_description",
            "description": "<p>Short Description of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_description",
            "description": "<p>Long Description of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"bank\"",
              "\"school\""
            ],
            "optional": false,
            "field": "group_type",
            "description": "<p>the type of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "1",
              "0"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>if the group is closed.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>img_url.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon_url.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "addUserId",
            "description": "<p>userId of the person who is added as admin of the subgroup.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"success\": \"true\",\n      \"user\": {\n        \"name\": \"JYOLSNA NAIR\",\n        \"username\": \"jyolsna\",\n        \"roleName\": \"Admin\",\n        \"userId\": 61\n      },\n      \"group\": {\n        \"name\": \"abcns\",\n        \"short_description\": \"asdasd\"\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ],
        "Error 422": [
          {
            "group": "Error422",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "UNPROCESSABLE-ENTITY",
            "description": "<p>The <code>user</code> is present in the group/class. The repeatation of the data, breaking db constraint gives this error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        },
        {
          "title": "Unprocessable-Entity-Example",
          "content": "HTTP/1.1 422 Unprocessable Entity\n    {\n        \"error\": \"User exists in the group\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/me/group/:groupId",
    "title": "Delete a group using groupId",
    "name": "DeleteGroup",
    "group": "Me_Groups",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n        \"success\": \"true\"\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/group/:groupId/people",
    "title": "Paginated list of people in a group",
    "name": "GetGroupsPeopleList",
    "group": "Me_Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the list.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>group id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "roleId",
            "description": "<p>Role id of the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "level",
            "description": "<p>Access level of the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleName",
            "description": "<p>role name given to the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of the user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"next_page_url\": null,\n      \"prev_page_url\": null,\n      \"from\": 1,\n      \"to\": 4,\n      \"data\": [\n        {\n          \"userId\": 59,\n          \"roleId\": 5,\n          \"level\": 20,\n          \"userName\": \"SS High School Admin\",\n          \"roleName\": \"Admin\",\n          \"roleCategory\": \"group\"\n        },\n        {\n          \"userId\": 60,\n          \"roleId\": 7,\n          \"level\": 10,\n          \"userName\": \"BHAGWAT BHOSALE\",\n          \"roleName\": \"Teacher\",\n          \"roleCategory\": \"group\"\n        },\n        {\n          \"userId\": 61,\n          \"roleId\": 6,\n          \"level\": 15,\n          \"userName\": \"JYOLSNA NAIR\",\n          \"roleName\": \"Principal\",\n          \"roleCategory\": \"group\"\n        },\n        {\n          \"userId\": 62,\n          \"roleId\": 7,\n          \"level\": 10,\n          \"userName\": \"Utkarsh shukla\",\n          \"roleName\": \"Teacher\",\n          \"roleCategory\": \"group\"\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/group",
    "title": "List of paginated user groups",
    "name": "GetMyGroupPaginatedList",
    "group": "Me_Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "page",
            "description": "<p>Page number of the list.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "groupId",
            "description": "<p>group id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "groupName",
            "description": "<p>Name of the Group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "roleId",
            "description": "<p>Role id of the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "level",
            "description": "<p>Access level of the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "roleName",
            "description": "<p>role name of the user in the group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>image url associated with the group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "closed",
            "description": "<p>1 for closed group and 0 for open group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Url</p> ",
            "optional": false,
            "field": "icon_url",
            "description": "<p>icon url associated with the group (can be null)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "icon_text",
            "description": "<p>Abbreviation to the group name to be used as the image in the case either the img_url or icon_url is not present</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "tags",
            "description": "<p>object key=&gt;value pair of the tags example {circle: &quot;circle1&quot;}</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"per_page\": 10,\n      \"current_page\": 1,\n      \"next_page_url\": null,\n      \"prev_page_url\": null,\n      \"from\": 1,\n      \"to\": 3,\n      \"data\": [\n        {\n          \"groupId\": 139,\n          \"roleId\": 1,\n          \"level\": 20,\n          \"roleName\": \"Admin\",\n          \"groupName\": \"Abhyudaya Co-op. Bank Ltd.\",\n          \"groupShortDescription\": \"Abhyudaya Bank\",\n          \"img_url\": null,\n          \"closed\": 0,\n          \"icon_url\": null,\n          \"icon_text\": \"AC\",\n          \"tags\": []\n        },\n        {\n          \"groupId\": 140,\n          \"roleId\": 1,\n          \"level\": 20,\n          \"roleName\": \"Admin\",\n          \"groupName\": \"Seawood\",\n          \"groupShortDescription\": \"Seawood Branch\",\n          \"img_url\": null,\n          \"closed\": 0,\n          \"icon_url\": null,\n          \"icon_text\": \"S\",\n          \"tags\": []\n        },\n        {\n          \"groupId\": 143,\n          \"roleId\": 5,\n          \"level\": 20,\n          \"roleName\": \"Admin\",\n          \"groupName\": \"1 A\",\n          \"groupShortDescription\": null,\n          \"img_url\": null,\n          \"closed\": 0,\n          \"icon_url\": null,\n          \"icon_text\": \"1A\",\n          \"tags\": []\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/group/:groupId/user/search",
    "title": "search amongst the user in a group",
    "name": "searchGroupMembers",
    "group": "Me_Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "qname",
            "description": "<p>query sent for searching.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://{server}/group/142/user/search?qname=a",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 59,\n    \"name\": \"SS High School Admin\",\n    \"username\": \"sshighadmin\",\n    \"email\": null,\n    \"phone\": null\n  },\n  {\n    \"id\": 60,\n    \"name\": \"BHAGWAT BHOSALE\",\n    \"username\": \"bhagwatst\",\n    \"email\": null,\n    \"phone\": null\n  },\n  {\n    \"id\": 61,\n    \"name\": \"JYOLSNA NAIR\",\n    \"username\": \"jyolsna\",\n    \"email\": null,\n    \"phone\": null\n  },\n  {\n    \"id\": 62,\n    \"name\": \"Utkarsh shukla\",\n    \"username\": null,\n    \"email\": \"utk.shukla@gmail.com\",\n    \"phone\": null\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/group/search",
    "title": "search amongst groups with name",
    "name": "searchGroups",
    "group": "Me_Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "qname",
            "description": "<p>query sent for searching.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://{server}/group/search?qname=a",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"id\": 139,\n        \"name\": \"Abhyudaya Co-op. Bank Ltd.\",\n        \"short_description\": \"Abhyudaya Bank\"\n      },\n      {\n        \"id\": 140,\n        \"name\": \"Seawood\",\n        \"short_description\": \"Seawood Branch\"\n      },\n      {\n        \"id\": 143,\n        \"name\": \"1 A\",\n        \"short_description\": null\n      },\n      {\n        \"id\": 145,\n        \"name\": \"2 A\",\n        \"short_description\": null\n      },\n      {\n        \"id\": 146,\n        \"name\": \"3 A\",\n        \"short_description\": null\n      },\n      {\n        \"id\": 148,\n        \"name\": \"abcns\",\n        \"short_description\": \"asdasd\"\n      },\n      {\n        \"id\": 149,\n        \"name\": \"abcns\",\n        \"short_description\": \"asdasd\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/group/short",
    "title": "Short List of the users Group",
    "name": "shortGroups",
    "group": "Me_Groups",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"groupId\": 664,\n    \"groupName\": \"Abhyudaya Co-op. Bank Ltd.\",\n    \"shortDescription\": null\n  },\n  {\n    \"groupId\": 665,\n    \"groupName\": \"Seawood\",\n    \"shortDescription\": null\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserGroupController.php",
    "groupTitle": "Me_Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/quest/:questId/challenge",
    "title": "List of challenges in the quest with the record of completion for the user",
    "name": "GetMyQuestChallengens",
    "group": "Me_Quests",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"achievementId\": 1,\n        \"achievementName\": \"SchoolBank Champ Beginner\",\n        \"achievementShortDescription\": \"Understands what is a SchoolBank Champ and knows about Paise Bachao Sapne Sajao\",\n        \"achievementStep\": 1,\n        \"achievementImgUrl\": \"https://playfoursquare.s3.amazonaws.com/badge/57/jetsetter.png\",\n        \"challenge_completed\": null,\n        \"challenges\": [\n          {\n            \"challengeId\": 1,\n            \"challengeName\": \"Who is a SchoolBank Champ?\",\n            \"challengeShortDescription\": \"Understand how a normal child can become SchoolBank Champ and how can I become a Champ.\",\n            \"challengeStep\": 1,\n            \"questionCount\": 2,\n            \"question_completed\": null\n          },\n          {\n            \"challengeId\": 2,\n            \"challengeName\": \"What is Paise Bachao Sapne Sajao?\",\n            \"challengeShortDescription\": \"What is Paise Bachao Sapne Sajao and how can I build my dreams by saving\",\n            \"challengeStep\": 2,\n            \"questionCount\": 3,\n            \"question_completed\": null\n          }\n        ]\n      },\n      {\n        \"achievementId\": 2,\n        \"achievementName\": \"SMART Saver\",\n        \"achievementShortDescription\": \"Understands the difference between Needs and Wants, and can create a SMART plan to achieve them\",\n        \"achievementStep\": 2,\n        \"achievementImgUrl\": \"https://playfoursquare.s3.amazonaws.com/badge/57/bravo_real_housewife.png\",\n        \"challenge_completed\": null,\n        \"challenges\": [\n          {\n            \"challengeId\": 3,\n            \"challengeName\": \"What is difference between Need and Want?\",\n            \"challengeShortDescription\": \"Try to understand the difference between needs and wants\",\n            \"challengeStep\": 1,\n            \"questionCount\": 2,\n            \"question_completed\": null\n          },\n          {\n            \"challengeId\": 4,\n            \"challengeName\": \"SMART planning to purchase the items\",\n            \"challengeShortDescription\": \"Make up a SMART plan to achieve your needs and wants by saving money\",\n            \"challengeStep\": 2,\n            \"questionCount\": 1,\n            \"question_completed\": null\n          }\n        ]\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserQuestController.php",
    "groupTitle": "Me_Quests",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/me/quest",
    "title": "List of user quests",
    "name": "GetMyQuestPaginatedList",
    "group": "Me_Quests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "group",
            "description": "<p>Group Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "sbc",
              "jandhan"
            ],
            "optional": false,
            "field": "app_type",
            "description": "<p>Type of app.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>quest Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>quest name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_description",
            "description": "<p>quest Short Description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>quest Image Url</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "quest_type_name",
            "description": "<p>quest type, it is for now always learning</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "achievementCount",
            "description": "<p>Number of achievements in the quest</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "achievementCompleted",
            "description": "<p>Number of achievement completed</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "score",
            "description": "<p>Score achieved by the user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"data\": [\n        {\n          \"name\": \"School Bank Champs\",\n          \"shortDescription\": \"Healthy Friendships, Social and Financial Collaboration, Personal and Financial Safety\",\n          \"id\": 1,\n          \"status\": \"inprogress\",\n          \"score\": 200,\n          \"img_url\": \"http://www.schoolbankchamps.com/assets/img/slide/3.png\",\n          \"quest_type_name\": \"learning\",\n          \"achievementCompleted\": 0,\n          \"groupId\": null,\n          \"groupName\": null,\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"achievementCount\": 2,\n          \"belongs_to\": \"School Bank Champ Admin\",\n          \"belongs_to_type\": \"user\",\n          \"belongs_to_id\": 308\n        },\n        {\n          \"name\": \"Financial Literacy\",\n          \"shortDescription\": \"A short course for imparting financial literacy to the student\",\n          \"id\": 2,\n          \"status\": \"completed\",\n          \"score\": 50,\n          \"img_url\": \"/assets/images/mainbg.jpg\",\n          \"quest_type_name\": \"learning\",\n          \"achievementCompleted\": 1,\n          \"groupId\": 666,\n          \"groupName\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"achievementCount\": 1,\n          \"belongs_to\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n          \"belongs_to_type\": \"group\",\n          \"belongs_to_id\": 666\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserQuestController.php",
    "groupTitle": "Me_Quests",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/quest/:questId/about",
    "title": "about of the quest",
    "name": "GetAboutForQuest",
    "group": "Quests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_description",
            "description": "<p>quest Short Description</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"long_description\": null\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/QuestController.php",
    "groupTitle": "Quests"
  },
  {
    "type": "get",
    "url": "/quest/:questId",
    "title": "Combined API for a quest",
    "name": "GetAllDataOfQuest",
    "group": "Quests",
    "description": "<p>It is a combined api containing all fields for the tabs in quest. <code>Use only if required</code>, since it will be huge api to consume</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"info\": {\n    \"id\": 1,\n    \"name\": \"School Bank Champs\",\n    \"img_url\": \"http://www.schoolbankchamps.com/assets/img/slide/3.png\",\n    \"short_description\": \"Healthy Friendships, Social and Financial Collaboration, Personal and Financial Safety\"\n  },\n  \"about\": {\n    \"long_description\": null\n  },\n  \"achievement\": [\n    {\n      \"achievementId\": 1,\n      \"achievementName\": \"SchoolBank Champ Beginner\",\n      \"achievementStep\": 1,\n      \"achievementShortDescription\": \"Understands what is a SchoolBank Champ and knows about Paise Bachao Sapne Sajao\",\n      \"achievementImgUrl\": \"https://playfoursquare.s3.amazonaws.com/badge/57/jetsetter.png\",\n      \"challenges\": [\n        {\n          \"challengeId\": 1,\n          \"challengeName\": \"Who is a SchoolBank Champ?\",\n          \"challengeShortDescription\": \"Understand how a normal child can become SchoolBank Champ and how can I become a Champ.\",\n          \"challengeStep\": 1,\n          \"questionCount\": 2\n        },\n        {\n          \"challengeId\": 2,\n          \"challengeName\": \"What is Paise Bachao Sapne Sajao?\",\n          \"challengeShortDescription\": \"What is Paise Bachao Sapne Sajao and how can I build my dreams by saving\",\n          \"challengeStep\": 2,\n          \"questionCount\": 3\n        }\n      ]\n    },\n    {\n      \"achievementId\": 2,\n      \"achievementName\": \"SMART Saver\",\n      \"achievementStep\": 2,\n      \"achievementShortDescription\": \"Understands the difference between Needs and Wants, and can create a SMART plan to achieve them\",\n      \"achievementImgUrl\": \"https://playfoursquare.s3.amazonaws.com/badge/57/bravo_real_housewife.png\",\n      \"challenges\": [\n        {\n          \"challengeId\": 3,\n          \"challengeName\": \"What is difference between Need and Want?\",\n          \"challengeShortDescription\": \"Try to understand the difference between needs and wants\",\n          \"challengeStep\": 1,\n          \"questionCount\": 2\n        },\n        {\n          \"challengeId\": 4,\n          \"challengeName\": \"SMART planning to purchase the items\",\n          \"challengeShortDescription\": \"Make up a SMART plan to achieve your needs and wants by saving money\",\n          \"challengeStep\": 2,\n          \"questionCount\": 1\n        }\n      ]\n    }\n  ],\n  \"resource\": {\n    \"Admin\": [\n      {\n        \"typeId\": 1,\n        \"type\": \"challenges\",\n        \"name\": \"Who is a SchoolBank Champ?\",\n        \"resourceId\": 9,\n        \"resourceName\": \"acb\",\n        \"resource_type\": \"text\",\n        \"url\": \"asdawqw\"\n      },\n      {\n        \"typeId\": 2,\n        \"type\": \"challenges\",\n        \"name\": \"What is Paise Bachao Sapne Sajao?\",\n        \"resourceId\": 8,\n        \"resourceName\": \"acb\",\n        \"resource_type\": \"text\",\n        \"url\": \"asjda\"\n      },\n      {\n        \"typeId\": 2,\n        \"type\": \"achievements\",\n        \"name\": \"SMART Saver\",\n        \"resourceId\": 7,\n        \"resourceName\": \"Resource 3\",\n        \"resource_type\": \"video\",\n        \"url\": \"random random random\"\n      },\n      {\n        \"typeId\": 1,\n        \"type\": \"quests\",\n        \"name\": \"School Bank Champs\",\n        \"resourceId\": 1,\n        \"resourceName\": \"Resource 1\",\n        \"resource_type\": \"video\",\n        \"url\": \"random\"\n      }\n    ],\n    \"Nodal Officer\": [\n      {\n        \"typeId\": 1,\n        \"type\": \"challenges\",\n        \"name\": \"Who is a SchoolBank Champ?\",\n        \"resourceId\": 10,\n        \"resourceName\": \"sadqweq\",\n        \"resource_type\": \"video\",\n        \"url\": \"asdawqw\"\n      },\n      {\n        \"typeId\": 1,\n        \"type\": \"quests\",\n        \"name\": \"School Bank Champs\",\n        \"resourceId\": 2,\n        \"resourceName\": \"Resource 2\",\n        \"resource_type\": \"text\",\n        \"url\": \"random random\"\n      }\n    ]\n  },\n  \"discussion\": [\n    {\n      \"typeId\": 1,\n      \"type\": \"quests\",\n      \"name\": \"School Bank Champs\",\n      \"discussionId\": 1,\n      \"discussionSubject\": \"skdjadhas\",\n      \"discussionText\": \"ahsdjahdkjasdnkjashdasjkla salksaj askjd\",\n      \"repliesCount\": 2,\n      \"creatorId\": null,\n      \"creatorName\": null\n    },\n    {\n      \"typeId\": 1,\n      \"type\": \"quests\",\n      \"name\": \"School Bank Champs\",\n      \"discussionId\": 2,\n      \"discussionSubject\": \"random question\",\n      \"discussionText\": \"ahsdjahdkjasdnkjashdasjkla salksaj askjd\",\n      \"repliesCount\": 0,\n      \"creatorId\": null,\n      \"creatorName\": null\n    },\n    {\n      \"typeId\": 1,\n      \"type\": \"challenges\",\n      \"name\": \"Who is a SchoolBank Champ?\",\n      \"discussionId\": 3,\n      \"discussionSubject\": \"heellll\",\n      \"discussionText\": \"challenge 1\",\n      \"repliesCount\": 0,\n      \"creatorId\": null,\n      \"creatorName\": null\n    },\n    {\n      \"typeId\": 2,\n      \"type\": \"challenges\",\n      \"name\": \"What is Paise Bachao Sapne Sajao?\",\n      \"discussionId\": 4,\n      \"discussionSubject\": \"helll\",\n      \"discussionText\": \"challenge2\",\n      \"repliesCount\": 0,\n      \"creatorId\": null,\n      \"creatorName\": null\n    },\n    {\n      \"typeId\": 2,\n      \"type\": \"challenges\",\n      \"name\": \"What is Paise Bachao Sapne Sajao?\",\n      \"discussionId\": 5,\n      \"discussionSubject\": \"yo\",\n      \"discussionText\": \"challenge2 -d2\",\n      \"repliesCount\": 0,\n      \"creatorId\": null,\n      \"creatorName\": null\n    }\n  ],\n  \"leaderBoard\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/QuestController.php",
    "groupTitle": "Quests"
  },
  {
    "type": "get",
    "url": "/quest/:questId/challenge",
    "title": "list of achievement->challenges for a quest",
    "name": "GetChallengesOfQuest",
    "group": "Quests",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"achievementId\": 1,\n        \"achievementName\": \"SchoolBank Champ Beginner\",\n        \"achievementStep\": 1,\n        \"achievementShortDescription\": \"Understands what is a SchoolBank Champ and knows about Paise Bachao Sapne Sajao\",\n        \"achievementImgUrl\": \"https://playfoursquare.s3.amazonaws.com/badge/57/jetsetter.png\",\n        \"challenges\": [\n          {\n            \"challengeId\": 1,\n            \"challengeName\": \"Who is a SchoolBank Champ?\",\n            \"challengeShortDescription\": \"Understand how a normal child can become SchoolBank Champ and how can I become a Champ.\",\n            \"challengeStep\": 1,\n            \"questionCount\": 2\n          },\n          {\n            \"challengeId\": 2,\n            \"challengeName\": \"What is Paise Bachao Sapne Sajao?\",\n            \"challengeShortDescription\": \"What is Paise Bachao Sapne Sajao and how can I build my dreams by saving\",\n            \"challengeStep\": 2,\n            \"questionCount\": 3\n          }\n        ]\n      },\n      {\n        \"achievementId\": 2,\n        \"achievementName\": \"SMART Saver\",\n        \"achievementStep\": 2,\n        \"achievementShortDescription\": \"Understands the difference between Needs and Wants, and can create a SMART plan to achieve them\",\n        \"achievementImgUrl\": \"https://playfoursquare.s3.amazonaws.com/badge/57/bravo_real_housewife.png\",\n        \"challenges\": [\n          {\n            \"challengeId\": 3,\n            \"challengeName\": \"What is difference between Need and Want?\",\n            \"challengeShortDescription\": \"Try to understand the difference between needs and wants\",\n            \"challengeStep\": 1,\n            \"questionCount\": 2\n          },\n          {\n            \"challengeId\": 4,\n            \"challengeName\": \"SMART planning to purchase the items\",\n            \"challengeShortDescription\": \"Make up a SMART plan to achieve your needs and wants by saving money\",\n            \"challengeStep\": 2,\n            \"questionCount\": 1\n          }\n        ]\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/QuestController.php",
    "groupTitle": "Quests"
  },
  {
    "type": "get",
    "url": "/quest/:questId/discussion",
    "title": "list of discussion for a quest",
    "name": "GetDiscussionOfQuest",
    "group": "Quests",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"typeId\": 1,\n    \"type\": \"quests\",\n    \"name\": \"School Bank Champs\",\n    \"discussionId\": 1,\n    \"discussionSubject\": \"skdjadhas\",\n    \"discussionText\": \"ahsdjahdkjasdnkjashdasjkla salksaj askjd\",\n    \"repliesCount\": 2,\n    \"creatorId\": null,\n    \"creatorName\": null\n  },\n  {\n    \"typeId\": 1,\n    \"type\": \"quests\",\n    \"name\": \"School Bank Champs\",\n    \"discussionId\": 2,\n    \"discussionSubject\": \"random question\",\n    \"discussionText\": \"ahsdjahdkjasdnkjashdasjkla salksaj askjd\",\n    \"repliesCount\": 0,\n    \"creatorId\": null,\n    \"creatorName\": null\n  },\n  {\n    \"typeId\": 1,\n    \"type\": \"challenges\",\n    \"name\": \"Who is a SchoolBank Champ?\",\n    \"discussionId\": 3,\n    \"discussionSubject\": \"heellll\",\n    \"discussionText\": \"challenge 1\",\n    \"repliesCount\": 0,\n    \"creatorId\": null,\n    \"creatorName\": null\n  },\n  {\n    \"typeId\": 2,\n    \"type\": \"challenges\",\n    \"name\": \"What is Paise Bachao Sapne Sajao?\",\n    \"discussionId\": 4,\n    \"discussionSubject\": \"helll\",\n    \"discussionText\": \"challenge2\",\n    \"repliesCount\": 0,\n    \"creatorId\": null,\n    \"creatorName\": null\n  },\n  {\n    \"typeId\": 2,\n    \"type\": \"challenges\",\n    \"name\": \"What is Paise Bachao Sapne Sajao?\",\n    \"discussionId\": 5,\n    \"discussionSubject\": \"yo\",\n    \"discussionText\": \"challenge2 -d2\",\n    \"repliesCount\": 0,\n    \"creatorId\": null,\n    \"creatorName\": null\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/QuestController.php",
    "groupTitle": "Quests"
  },
  {
    "type": "get",
    "url": "/quest/:questId/info",
    "title": "Info for a quest",
    "name": "GetInfoOfQuest",
    "group": "Quests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>quest Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>quest name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_description",
            "description": "<p>quest Short Description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>quest Image Url</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "allowedValues": [
              "'true'",
              "'false'"
            ],
            "optional": false,
            "field": "partOf",
            "description": "<p>A global variable that is 'true' for logged in user, if he has joined the quest, for not logged in user and not joined users it is 'false'</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": 1,\n      \"name\": \"School Bank Champs\",\n      \"img_url\": \"http://www.schoolbankchamps.com/assets/img/slide/3.png\",\n      \"short_description\": \"Healthy Friendships, Social and Financial Collaboration, Personal and Financial Safety\",\n      \"partOf\": \"false\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/QuestController.php",
    "groupTitle": "Quests"
  },
  {
    "type": "get",
    "url": "/quest/:questId/leaderboard",
    "title": "list of leaderBoard for a quest",
    "name": "GetLeaderBoardOfQuest",
    "group": "Quests",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/QuestController.php",
    "groupTitle": "Quests"
  },
  {
    "type": "get",
    "url": "/quest",
    "title": "detail list of Quest",
    "name": "GetPaginatedQuestList",
    "group": "Quests",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>quest Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>quest name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_description",
            "description": "<p>quest Short Description</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "img_url",
            "description": "<p>quest Image Url</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "quest_type_name",
            "description": "<p>quest type, it is for now always learning</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "achievementCount",
            "description": "<p>Number of achievements in the quest</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"data\": [\n        {\n          \"id\": 1,\n          \"name\": \"School Bank Champs\",\n          \"short_description\": \"Healthy Friendships, Social and Financial Collaboration, Personal and Financial Safety\",\n          \"img_url\": \"http://www.schoolbankchamps.com/assets/img/slide/3.png\",\n          \"quest_type_name\": \"learning\",\n          \"achievementCount\": 2,\n          \"groupId\": null,\n          \"groupName\": null,\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"School Bank Champ Admin\",\n          \"belongs_to_type\": \"user\",\n          \"belongs_to_id\": 308\n        },\n        {\n          \"id\": 2,\n          \"name\": \"Financial Literacy\",\n          \"short_description\": \"A short course for imparting financial literacy to the student\",\n          \"img_url\": \"/assets/images/mainbg.jpg\",\n          \"quest_type_name\": \"learning\",\n          \"achievementCount\": 1,\n          \"groupId\": 666,\n          \"groupName\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n          \"createdByUserId\": 308,\n          \"createdByUser\": \"School Bank Champ Admin\",\n          \"belongs_to\": \"S S HIGH SCHOOL & JUNIOR COLLEGE\",\n          \"belongs_to_type\": \"group\",\n          \"belongs_to_id\": 666\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "group",
            "description": "<p>[optional] group id of the group.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "sbc",
              "jandhan"
            ],
            "optional": false,
            "field": "app_type",
            "description": "<p>Type of app.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/QuestController.php",
    "groupTitle": "Quests"
  },
  {
    "type": "get",
    "url": "/quest/:questId/resource",
    "title": "list of Resources for a quest",
    "description": "<p><code>Need To Be Revised</code></p> ",
    "name": "GetResourcesOfQuest",
    "group": "Quests",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Admin\": [\n        {\n          \"typeId\": 1,\n          \"type\": \"challenges\",\n          \"name\": \"Who is a SchoolBank Champ?\",\n          \"resourceId\": 9,\n          \"resourceName\": \"acb\",\n          \"resource_type\": \"text\",\n          \"url\": \"asdawqw\"\n        },\n        {\n          \"typeId\": 2,\n          \"type\": \"challenges\",\n          \"name\": \"What is Paise Bachao Sapne Sajao?\",\n          \"resourceId\": 8,\n          \"resourceName\": \"acb\",\n          \"resource_type\": \"text\",\n          \"url\": \"asjda\"\n        },\n        {\n          \"typeId\": 2,\n          \"type\": \"achievements\",\n          \"name\": \"SMART Saver\",\n          \"resourceId\": 7,\n          \"resourceName\": \"Resource 3\",\n          \"resource_type\": \"video\",\n          \"url\": \"random random random\"\n        },\n        {\n          \"typeId\": 1,\n          \"type\": \"quests\",\n          \"name\": \"School Bank Champs\",\n          \"resourceId\": 1,\n          \"resourceName\": \"Resource 1\",\n          \"resource_type\": \"video\",\n          \"url\": \"random\"\n        }\n      ],\n      \"Nodal Officer\": [\n        {\n          \"typeId\": 1,\n          \"type\": \"challenges\",\n          \"name\": \"Who is a SchoolBank Champ?\",\n          \"resourceId\": 10,\n          \"resourceName\": \"sadqweq\",\n          \"resource_type\": \"video\",\n          \"url\": \"asdawqw\"\n        },\n        {\n          \"typeId\": 1,\n          \"type\": \"quests\",\n          \"name\": \"School Bank Champs\",\n          \"resourceId\": 2,\n          \"resourceName\": \"Resource 2\",\n          \"resource_type\": \"text\",\n          \"url\": \"random random\"\n        }\n      ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/QuestController.php",
    "groupTitle": "Quests"
  },
  {
    "type": "get",
    "url": "/role/list/class",
    "title": "Gives List of all roles in class",
    "name": "GetAllRolesInClass",
    "group": "Roles",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"id\": 9,\n        \"role_name\": \"Admin\",\n        \"role_category\": \"class\"\n      },\n      {\n        \"id\": 10,\n        \"role_name\": \"Principal\",\n        \"role_category\": \"class\"\n      },\n      {\n        \"id\": 11,\n        \"role_name\": \"Teacher\",\n        \"role_category\": \"class\"\n      },\n      {\n        \"id\": 12,\n        \"role_name\": \"Student\",\n        \"role_category\": \"class\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/RoleController.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/role/list/group",
    "title": "Gives List of all roles in group",
    "name": "GetAllRolesInGroups",
    "group": "Roles",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"role_name\": \"Admin\",\n    \"role_category\": \"group\",\n    \"role_category_type\": \"bank\"\n  },\n  {\n    \"id\": 2,\n    \"role_name\": \"Nodal Officer\",\n    \"role_category\": \"group\",\n    \"role_category_type\": \"bank\"\n  },\n  {\n    \"id\": 3,\n    \"role_name\": \"Bank Manager\",\n    \"role_category\": \"group\",\n    \"role_category_type\": \"bank\"\n  },\n  {\n    \"id\": 4,\n    \"role_name\": \"User\",\n    \"role_category\": \"group\",\n    \"role_category_type\": \"bank\"\n  },\n  {\n    \"id\": 5,\n    \"role_name\": \"Admin\",\n    \"role_category\": \"group\",\n    \"role_category_type\": \"school\"\n  },\n  {\n    \"id\": 6,\n    \"role_name\": \"Principal\",\n    \"role_category\": \"group\",\n    \"role_category_type\": \"school\"\n  },\n  {\n    \"id\": 7,\n    \"role_name\": \"Teacher\",\n    \"role_category\": \"group\",\n    \"role_category_type\": \"school\"\n  },\n  {\n    \"id\": 8,\n    \"role_name\": \"Student\",\n    \"role_category\": \"group\",\n    \"role_category_type\": \"school\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/RoleController.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/role/group/type/:typeName",
    "title": "Gives List of roles in group of particular Type",
    "description": "<p>Possible values of <code>typename</code> could be <code>school</code>, <code>bank</code> or <code>organization</code></p> ",
    "name": "GetRolesListGroupParticularType",
    "group": "Roles",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"id\": 5,\n        \"role_name\": \"Admin\",\n        \"role_category\": \"group\",\n        \"level\": 20,\n        \"role_category_type\": \"school\"\n      },\n      {\n        \"id\": 6,\n        \"role_name\": \"Principal\",\n        \"role_category\": \"group\",\n        \"level\": 15,\n        \"role_category_type\": \"school\"\n      },\n      {\n        \"id\": 7,\n        \"role_name\": \"Teacher\",\n        \"role_category\": \"group\",\n        \"level\": 10,\n        \"role_category_type\": \"school\"\n      },\n      {\n        \"id\": 8,\n        \"role_name\": \"Student\",\n        \"role_category\": \"group\",\n        \"level\": 5,\n        \"role_category_type\": \"school\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/RoleController.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "/user/credential",
    "title": "Give user data using email, username, phone number",
    "name": "GetUserDataUsingCredentials",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "credential",
            "description": "<p>Can be username, email or phone number.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://{server}/user/credential?credential=ujjwal",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"id\": 63,\n        \"name\": \"ujjwal\",\n        \"username\": \"ujjwal\",\n        \"email\": null,\n        \"phone\": null\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/me/people/create",
    "title": "Create new people",
    "name": "addPeople",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "newName",
            "description": "<p>Name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "newEmail",
            "description": "<p>Email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "newPhone",
            "description": "<p>9-12 digit phone number, prefer mobile so 10</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n      {\n        \"id\": 1917,\n        \"name\": \"ujjwal\",\n        \"username\": \"ujjwal11587\",\n        \"email\": null,\n        \"email_2\": null,\n        \"phone\": null,\n        \"phone_2\": null,\n        \"img_url\": null,\n        \"sbc_admin\": 0,\n        \"parent\": 0,\n        \"verified\": 0,\n        \"verified_by_us\": 0,\n        \"created_at\": \"2015-09-23 17:07:43\",\n        \"updated_at\": \"2015-09-23 17:07:43\"\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/people/create/object",
    "title": "Create new people and add it to the group/class at the same time",
    "name": "addPeopleInGroup",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "newName",
            "description": "<p>Name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "roleId",
            "description": "<p>(optional) role Id of the person for the group/class to be added</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"group\"",
              "\"class\""
            ],
            "optional": false,
            "field": "object",
            "description": "<p>(optional) object either a group or class where the user is to be added</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "objectId",
            "description": "<p>(optional) id of the group/class</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "newEmail",
            "description": "<p>Email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "newPhone",
            "description": "<p>9-12 digit phone number, prefer mobile so 10</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [\n      {\n        \"name\": \"ujjwal\",\n        \"username\": \"ujjwal23975\",\n        \"roleName\": \"Admin\",\n        \"userId\": 1913\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/me/people/create/minor",
    "title": "Create new people Minor",
    "name": "addPeopleMinor",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "studentName",
            "description": "<p>Name of the minor student</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "parentName",
            "description": "<p>Name of the parent*</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "parentEmail",
            "description": "<p>Email of the parent</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "parentPhone",
            "description": "<p>9-12 digit phone number, prefer mobile so 10</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/id/:userId",
    "title": "Give user data using the userId",
    "name": "getUserDataUsingId",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n          {\n            \"id\": 1,\n            \"name\": \"test\",\n            \"username\": \"test\",\n            \"email\": \"user@test.com\",\n            \"phone\": null\n          }\n        ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/user/search",
    "title": "search amongst users with name",
    "name": "searchUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "qname",
            "description": "<p>query sent for searching.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i http://{server}/user/search?qname=a",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    [\n      {\n        \"id\": 1,\n        \"name\": \"test\",\n        \"username\": \"test\",\n        \"email\": \"user@test.com\",\n        \"phone\": null,\n        \"created_at\": \"-0001-11-30 00:00:00\",\n        \"updated_at\": \"-0001-11-30 00:00:00\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 24,\n        \"name\": \"Subodh IBA\",\n        \"username\": \"subodh\",\n        \"email\": \"subodh@sample.com\",\n        \"phone\": null,\n        \"created_at\": \"2015-07-28 11:12:24\",\n        \"updated_at\": \"2015-08-12 08:02:51\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 45,\n        \"name\": \"Ujjwal Shukla\",\n        \"username\": \"VdDnuLFp\",\n        \"email\": null,\n        \"phone\": null,\n        \"created_at\": \"2015-07-30 07:56:01\",\n        \"updated_at\": \"2015-07-30 07:56:01\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 53,\n        \"name\": \"ujjwal shukla\",\n        \"username\": null,\n        \"email\": \"ujjwal.shukla.mec09@itbhu.ac.in\",\n        \"phone\": null,\n        \"created_at\": \"2015-08-05 13:14:18\",\n        \"updated_at\": \"2015-08-05 13:14:18\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 56,\n        \"name\": \"random user1\",\n        \"username\": \"utkarshx\",\n        \"email\": null,\n        \"phone\": null,\n        \"created_at\": \"2015-08-08 09:06:26\",\n        \"updated_at\": \"2015-08-08 09:06:26\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 59,\n        \"name\": \"SS High School Admin\",\n        \"username\": \"sshighadmin\",\n        \"email\": null,\n        \"phone\": null,\n        \"created_at\": \"2015-08-10 12:50:56\",\n        \"updated_at\": \"2015-08-10 13:04:37\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 60,\n        \"name\": \"BHAGWAT BHOSALE\",\n        \"username\": \"bhagwatst\",\n        \"email\": null,\n        \"phone\": null,\n        \"created_at\": \"2015-08-10 12:59:56\",\n        \"updated_at\": \"2015-08-10 13:02:06\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 61,\n        \"name\": \"JYOLSNA NAIR\",\n        \"username\": \"jyolsna\",\n        \"email\": null,\n        \"phone\": null,\n        \"created_at\": \"2015-08-10 14:03:41\",\n        \"updated_at\": \"2015-08-10 14:03:41\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 62,\n        \"name\": \"Utkarsh shukla\",\n        \"username\": null,\n        \"email\": \"utk.shukla@gmail.com\",\n        \"phone\": null,\n        \"created_at\": \"2015-08-10 14:09:17\",\n        \"updated_at\": \"2015-08-10 14:09:17\",\n        \"verified\": 0\n      },\n      {\n        \"id\": 64,\n        \"name\": \"abcns\",\n        \"username\": \"subodh123\",\n        \"email\": null,\n        \"phone\": null,\n        \"created_at\": \"2015-08-12 08:45:09\",\n        \"updated_at\": \"2015-08-12 08:45:09\",\n        \"verified\": 0\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-Authorization",
            "description": "<p>send the api key present in the client</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example",
          "content": "{\n    \"x-Authorization\": \"f553d226d1fcddba52d2c531ae99df2fb171ebde\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "GEN-UNAUTHORIZED",
            "description": "<p>The <code>user</code> is not logged in or the Authorization key is not passed in the headers.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Error-Example",
          "content": "HTTP/1.1 401 Unauthorized\n {\n      \"error\": {\n        \"code\": \"GEN-UNAUTHORIZED\",\n        \"http_code\": 401,\n        \"message\": \"Unauthorized\"\n      }\n }",
          "type": "json"
        }
      ]
    }
  }
] });