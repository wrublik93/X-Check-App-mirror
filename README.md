# X Check App / RS Assessment Tool

Link to task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/xcheck/xcheck.md

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

### Interface ReviewPairs
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


