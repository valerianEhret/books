import {Main} from "../components/Main";
import {Authors} from "../components/Authors";
import {Books} from "../components/Books";
import {AddAuthor} from "../components/AddAuthor";

export enum RouterNames {
    BOOKS = '/books',
    AUTHORS = '/authors',
    MAIN = '/',
    AUTHOR_CREATE = '/author/create',
}

interface IRoute {
    path: string
    component: React.ComponentType
    exact: boolean
}


export const routes: IRoute[] = [
    {
        path: RouterNames.BOOKS,
        exact: true,
        component: Books
    },
    {
        path: RouterNames.AUTHORS,
        exact: true,
        component: Authors
    },
    {
        path: RouterNames.MAIN,
        exact: true,
        component: Main
    },
    {
        path: RouterNames.AUTHOR_CREATE,
        exact: true,
        component: AddAuthor
    },
]