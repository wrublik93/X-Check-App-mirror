# X Check App / RS Assessment Tool

## Links

Link to Heroku: https://x-check-app-server-team25.herokuapp.com/
Link to task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/xcheck/xcheck.md
Link to demo: https://x-check-app-team25.netlify.app/

## RACI
Здесь вставим матрицу

## Organization our work

We use Trello, Discord and telegram.

![Imgur](https://i.imgur.com/rP2vvi1.png)

## Tools

We use:
- __antd__ - React UI Library (UI библиотека)
- __eslint__ - Pluggable JavaScript linter (линтинг кода)
- __prettier__ - Opinionated Code Formatter (форматтер кода)
- __lint-staged__ - запуск скриптов только для коммитов со статусом staged
- __husky__ - использование хуков гита для коммитов
- __react__ - JavaScript-библиотека для создания пользовательских интерфейсов
- __typescript__ - TypeScript extends JavaScript by adding types (типизация)
- __react-router__ - маршрутизация приложения
- __react-cookie__ - куки
- __classnames__ - для использования множественных классов
- __node-sass__ - для использования Sass
- __svgo__ - для оптимизации svg
- __npm-run-all__ - для запуска множественных скриптов

## Roles

In our app we use next roles:
1. admin;
2. trainer;
3. mentor;
4. activist;
5. student.

## Logins and Passwords

    [
      {
        "id": 0,
        "firstName": "Ivan",
        "lastName": "Ivanov",
        "email": "admin@gmail.com",
        "password": "admin",
        "roleIds": [
          0
        ],
        "token": "YWRtaW5AZ21haWwuY29tSXZhbkl2YW5vdg=="
      },
      {
        "id": 1,
        "firstName": "Petr",
        "lastName": "Petrov",
        "email": "trainer@gmail.com",
        "password": "trainer",
        "roleIds": [
          1
        ],
        "token": "dHJhaW5lckBnbWFpbC5jb21QZXRyUGV0cm92"
      },
      {
        "id": 2,
        "firstName": "Oleg",
        "lastName": "Sidorov",
        "email": "mentor@gmail.com",
        "password": "mentor",
        "roleIds": [
          2
        ],
        "token": "bWVudG9yQGdtYWlsLmNvbU9sZWdTaWRvcm92"
      },
      {
        "id": 3,
        "firstName": "Ilya",
        "lastName": "Makarov",
        "email": "activist@gmail.com",
        "password": "activist",
        "roleIds": [
          3
        ],
        "token": "YWN0aXZpc3RAZ21haWwuY29tSWx5YU1ha2Fyb3Y="
      },
      {
        "id": 4,
        "firstName": "Kostya",
        "lastName": "Leonov",
        "email": "student@gmail.com",
        "password": "student",
        "roleIds": [
          4
        ],
        "token": "c3R1ZGVudEBnbWFpbC5jb21Lb3N0eWFMZW9ub3Y="
      }
    ]

## Entity Relationship Diagram (ERD)

![Imgur](https://i.imgur.com/QktNVWC.png)

## Entities

### Interface User
| name             | type       |
|------------------|------------|
| id               | number     |
| token            | string     |
| firstName        | string     |
| lastName         | string     |
| email            | string     |
| password         | string     |
| githubId         | string     |
| githubToken      | string     |
| currentCourseIds | number\[\] |
| roleIds          | number\[\] |

### Interface Course
| name        | type    |
|-------------|---------|
| id          | number  |
| name        | string  |
| fullName    | string  |
| description | string  |
| startDate   | Date    |
| endDate     | Date    |
| completed   | boolean |

### Interface Role
| name      | type      |
|-----------|-----------|
| id        | number    |
| name      | string    |
| rightsIds | Right\[\] |

### Interface Right
| name    | type    |
|---------|---------|
| id      | number  |
| name    | string  |
| allowed | boolean |

### Interface Session
| name                   | type       |
|------------------------|------------|
| id                     | number     |
| statusId               | number     |
| taskId                 | number     |
| coefficient            | number     |
| discardMinScore        | boolean    |
| discardMaxScore        | boolean    |
| minReviewAmount        | number     |
| desiredReviewersAmount | number     |
| reviewPairsIds         | number\[\] |
| startDate              | Date       |
| endDate                | Date       |

### Interface Review Pairs
| name      | type      |
|-----------|-----------|
| id        | number    |
| sessionId | number    |
| pairsIds  | Pairs\[\] |

### Interface Pairs
| name            | type       |
|-----------------|------------|
| id              | number     |
| userReviewerId  | number     |
| userInReviewIds | number\[\] |

### Interface Task
| name                      | type       |
|---------------------------|------------|
| id                        | number     |
| name                      | string     |
| description               | string     |
| descriptionURL            | string     |
| crearedDate               | Date       |
| updatedDate               | Date       |
| authorId                  | number     |
| taskStatusId              | number     |
| taskCategoryId            | number     |
| criterionsCategoriesOrder | number\[\] |
| criterionsIds             | number\[\] |

### Interface Criterion
| name                | type    |
|---------------------|---------|
| id                  | number  |
| minScore            | number  |
| maxScore            | number  |
| categoryCriterionId | number  |
| title               | string  |
| description         | string  |
| onlyForMentor       | boolean |

### Interface Review Request
| name      | type      |
|-----------|-----------|
| id        | number    |
| sessionId | number    |
| userId    | number    |
| taskId    | number    |
| statusId  | number    |
| selfGrade | Score\[\] |

### Interface Score
| name        | type   |
|-------------|--------|
| id          | number |
| criterionId | number |
| score       | number |
| comment?    | string |

### Interface Review
| name                 | type      |
|----------------------|-----------|
| id                   | number    |
| reviewRequestId      | number    |
| userId               | number    |
| reviewStatusId       | number    |
| grade                | Score\[\] |
| isVisibleContactInfo | boolean   |

### Interface Dispute
| name                | type   |
|---------------------|--------|
| id                  | number |
| disputeStatusId     | number |
| reviewId            | number |
| categoryCriterionId | number |
| comment             | string |
| suggestedScore      | number |

### Interface Task Category
| name                | type   |
|---------------------|--------|
| id                  | number |
| name                | string |

### Interface Criterion Category
| name                | type   |
|---------------------|--------|
| id                  | number |
| name                | string |

### Interface Session Status
| name                | type   |
|---------------------|--------|
| id                  | number |
| name                | string |

### Interface Task Status
| name                | type   |
|---------------------|--------|
| id                  | number |
| name                | string |

### Interface Review Request Status
| name                | type   |
|---------------------|--------|
| id                  | number |
| name                | string |

### Interface Review Status
| name                | type   |
|---------------------|--------|
| id                  | number |
| name                | string |

### Interface Dispute Status
| name                | type   |
|---------------------|--------|
| id                  | number |
| name                | string |


## Thank You! :)
