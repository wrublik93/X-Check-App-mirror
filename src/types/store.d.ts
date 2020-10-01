import {
  User, Course, Role, Session, Task, Review,
} from '@/types/entities';

export interface GlobalStore {
  users: User[];
  courses: Course[];
  roles: Role[];
  sessions: Session[];
  tasks: Task[];
  reviews: Review[];
}
