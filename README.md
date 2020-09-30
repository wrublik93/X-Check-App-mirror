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
