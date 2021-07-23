import { Request, Response } from 'express';
import { User } from './user.model';
import { UserI } from './user.interface';
import { addRole, deleteUser, getUserById, getUsers, newUser, pathUser } from './user.services';

export const getAll = async (req: Request, res: Response) => {
  getUsers()
    .then((users: User[]) => {
      console.log()
      res.send(users);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};

export const getUser = async (req: Request, res: Response) => {
  getUserById(req)
    .then((user: User | null) => {
      res.send(user);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};

export const createUser = async (req: Request, res: Response) => {
  newUser(req)
    .then((user: User) => {
      res.status(201);
      res.send(user.uuid);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};

export const updateUser = async (req: Request, res: Response) => {
  pathUser(req)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};

export const deleteUserById = async (req: Request, res: Response) => {
  deleteUser(req)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};

export const addUsersRole = async (req: Request, res: Response) => {
  addRole(req)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};