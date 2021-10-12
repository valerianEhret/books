import {Main} from "../components/Main";
import {Authors} from "../pages/Authors";
import {Books} from "../pages/Books";
import {AddAuthor} from "../pages/AddAuthor";
import React from "react";
import {AddBook} from "../pages/AddBook";
import {AboutAuthor} from "../pages/AboutAuthor";
import {AboutBook} from "../pages/AboutBook";
import {EditAuthor} from "../pages/EditAuthor";
import {EditBook} from "../pages/EditBook";

export enum RouterNames {
    BOOKS = '/books',
    AUTHORS = '/authors',
    MAIN = '/',
    AUTHOR_CREATE = '/author/create',
    BOOK_CREATE = '/book/create',
    ABOUT_AUTHOR = '/author/:id',
    ABOUT_BOOK = '/book/:id',
    EDIT_AUTHOR = '/author/edit/:id',
    EDIT_BOOK = '/book/edit/:id',
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
    {
        path: RouterNames.ABOUT_AUTHOR,
        exact: true,
        component: AboutAuthor
    },
    {
        path: RouterNames.ABOUT_BOOK,
        exact: true,
        component: AboutBook
    },
    {
        path: RouterNames.EDIT_AUTHOR,
        exact: true,
        component: EditAuthor
    },
    {
        path: RouterNames.EDIT_BOOK,
        exact: true,
        component: EditBook
    },
]