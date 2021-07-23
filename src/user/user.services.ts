import { Request } from 'express';
import { User } from './user.model';

export const getUsers = async() => {
  return await User.findAll();
};

export const getUserById = async (req: Request) => {
  return await User.findByPk(req.params.id);
};

export const newUser = async (req: Request) => {
  return await User.create(
    {
      ...req.body
    });
};

export const pathUser = async (req: Request) => {
  return await User.update(
    {
      ...req.body
    },
    {
      where: {
        uuid: req.params.id
      }
    });
};

export const deleteUser = async (req: Request) => {
  return await User.destroy({
    where: {
      uuid: req.params.id
    }
  });
};

export const addRole = async (req: Request) => {
  return await User.update(
    {
      roleId: req.body.roleId
    },
    {
      where: {
        uuid: req.params.id
      }
    }
  );
};
