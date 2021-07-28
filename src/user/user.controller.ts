import { Request, Response } from 'express';

import { User } from './user.model';
import { addRole, deleteUser, getUserById, getUsers, newUser, pathUser } from './user.services';

export const getAll = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUsers();
    res.send(users);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user: User | null = await getUserById(req);
    if (!user) {
      return res.sendStatus(404);
    }
    res.send(user);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = await newUser(req);
    res.status(201);
    res.send(user.uuid);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    await pathUser(req);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    await deleteUser(req);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};
export const addUsersRole = async (req: Request, res: Response) => {
  try {
    await addRole(req);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};