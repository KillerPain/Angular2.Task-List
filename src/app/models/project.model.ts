import {ITask} from './task.model';

export interface IProject {
    ID: string;
    Title: string;
    Description: string;
    AdministratorId: String;
    Tasks: ITask[];
}