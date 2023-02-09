import {Application, json, urlencoded, Request, Response, NextFunction, application } from 'express';

export class chattyServer {
    private app:Application

    constructor(app:Application) {
        this.app = app;
    }

}