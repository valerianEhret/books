import {Main} from "../components/Main";
import {Authors} from "../components/Authors";
import {Books} from "../components/Books";
import {AddAuthor} from "../components/AddAuthor";
import React from "react";
import {AddBook} from "../pages/AddBook";

export enum RouterNames {
    BOOKS = '/books',
    AUTHORS = '/authors',
    MAIN = '/',
    AUTHOR_CREATE = '/author/create',
    BOOK_CREATE = '/book/create',
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
    {
        path: RouterNames.BOOK_CREATE,
        exact: true,
        component: AddBook
    },
]