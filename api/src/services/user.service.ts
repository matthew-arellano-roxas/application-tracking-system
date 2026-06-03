import type {
  UserResponse,
  UserService,
  CreateUserRequest,
  UpdateUserRequest,
} from '@/types';
import type { UserModel } from '@root/generated/prisma/models/User';
import { UserRole } from '@root/generated/prisma/enums';
import { prisma } from '@root/lib';
import { AppError } from '@/errors';

function toUserResponse(user: UserModel): UserResponse {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
}

function normalizeUserRole(role: string): UserRole {
  const normalizedRole = role.toUpperCase();

  if (normalizedRole === UserRole.CANDIDATE) {
    return UserRole.CANDIDATE;
  }

  if (normalizedRole === UserRole.RECRUITER) {
    return UserRole.RECRUITER;
  }

  throw new Error(`Invalid user role: ${role}`);
}

async function findUserOrThrow(id: string): Promise<UserModel> {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    throw AppError.notFound(`User not found: ${id}`);
  }

  return user;
}

export async function createUserService(): Promise<UserService> {
  return {
    async createUser(userInput: CreateUserRequest): Promise<UserResponse> {
      const user = await prisma.user.create({
        data: {
          email: userInput.email,
          name: userInput.name,
          password: userInput.password,
          role: normalizeUserRole(userInput.role),
        },
      });

      return toUserResponse(user);
    },

    async findUser(id: string): Promise<UserResponse> {
      const user = await findUserOrThrow(id);

      return toUserResponse(user);
    },

    async findAllUsers(): Promise<UserResponse[]> {
      const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
      });

      return users.map(toUserResponse);
    },

    async updateUser(
      id: string,
      userInput: UpdateUserRequest,
    ): Promise<UserResponse> {
      await findUserOrThrow(id);

      const user = await prisma.user.update({
        where: { id },
        data: {
          ...(userInput.name ? { name: userInput.name } : {}),
          ...(userInput.password ? { password: userInput.password } : {}),
          ...(userInput.role
            ? { role: normalizeUserRole(userInput.role) }
            : {}),
        },
      });

      return toUserResponse(user);
    },

    async deleteUser(id: string): Promise<UserResponse> {
      await findUserOrThrow(id);

      const user = await prisma.user.delete({ where: { id } });

      return toUserResponse(user);
    },

    async findUserByEmail(email: string): Promise<UserResponse> {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        throw new Error(`User not found with email: ${email}`);
      }

      return toUserResponse(user);
    },

    async findUserCredentials(
      email: string,
      password: string,
    ): Promise<UserResponse> {
      const user = await prisma.user.findFirst({
        where: {
          email,
          password,
        },
      });

      if (!user) {
        throw new Error('Invalid user credentials');
      }

      return toUserResponse(user);
    },
  };
}
