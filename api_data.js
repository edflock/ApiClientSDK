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
          "content": "HTTP/1.1 200 OK\n{\n    \"courseId\": 1,\n    \"courseName\": \"School Bank Champs Junior\",\n    \"shortDescription\": \"Social and Financial Education for Children Ages 10-14\",\n    \"longDescription\": \"A Class Course for Social and Financial Education for Children\",\n    \"courseImg_url\": null,\n    \"groups\": [\n    {\n        \"courseGroupId\": 1,\n        \"courseGroupTitle\": \"Introduction to School Bank Champs\",\n        \"courseGroupStep\": 1,\n        \"courseGroupObjective\": \"<p>By the end of the lesson, the students will be able to:</p>\\n\\n<ol>\\n\\t<li>Recognize SchoolBank Champs and its Motto</li>\\n\\t<li>Be excited about becoming a School Bank Champ and applying the School Bank Champs motto.</li>\\n\\t<li>Be inspired to follow the steps to become a School Bank Champs and hence be interested in active learning of the content.</li>\\n\\t<li>&nbsp;Get introduced to the land of School Bank Champs and their friends.</li>\\n</ol>\",\n        \"categories\": [\n            {\n                \"courseGroupCategoryId\": 2,\n                \"courseGroupCategoryTitle\": \"Activities\",\n                \"resources\": [\n                    {\n                        \"resourceTitle\": \"Qualities of a Superhero\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 1002,\n                        \"courseGroupResourceId\": 1\n                    },\n                    {\n                        \"resourceTitle\": \"Normal Children can become SchoolBank Champs \",\n                        \"resourceType\": \"link\",\n                        \"resourceId\": 2001,\n                        \"courseGroupResourceId\": 2\n                    },\n                    {\n                        \"resourceTitle\": \"Friends of SchoolBank Champs\",\n                        \"resourceType\": \"link\",\n                        \"resourceId\": 2002,\n                        \"courseGroupResourceId\": 3\n                    },\n                    {\n                        \"resourceTitle\": \"Understand Paise Bachao Sapne Sajao\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 5001,\n                        \"courseGroupResourceId\": 4\n                    },\n                    {\n                        \"resourceTitle\": \"Opening of Students Account at www.schoolbankchamps.com\",\n                        \"resourceType\": \"upload\",\n                        \"resourceId\": 7888,\n                        \"courseGroupResourceId\": 5\n                    }\n                ]\n            },\n            {\n                \"courseGroupCategoryId\": 3,\n                \"courseGroupCategoryTitle\": \"Materials\",\n                \"resources\": [\n                    {\n                        \"resourceTitle\": \"SchoolBank Champs and their friends Story\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 11111,\n                        \"courseGroupResourceId\": 6\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        \"courseGroupId\": 2,\n        \"courseGroupTitle\": \"Needs and Wants\",\n        \"courseGroupStep\": 2,\n        \"courseGroupObjective\": \"<p>By the end of the lesson, the students will be able to:</p>\\n\\n<ol>\\n\\t<li>Understand the difference between needs and wants</li>\\n\\t<li>Identify savings goals based on needs and wants&nbsp;</li>\\n</ol>\\n\",\n        \"categories\": [\n            {\n                \"courseGroupCategoryId\": 2,\n                \"courseGroupCategoryTitle\": \"Activities\",\n                \"resources\": [\n                    {\n                        \"resourceTitle\": \"Difference Between Need and Want\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 11112,\n                        \"courseGroupResourceId\": 7\n                    },\n                    {\n                        \"resourceTitle\": \"List of Items to Save for\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 11113,\n                        \"courseGroupResourceId\": 8\n                    },\n                    {\n                        \"resourceTitle\": \"Make a SMART plan for how they might save up to purchase the item\",\n                        \"resourceType\": \"text\",\n                        \"resourceId\": 11114,\n                        \"courseGroupResourceId\": 9\n                    }\n                ]\n            }\n        ]\n    }\n}",
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