/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Student as PrismaStudent,
  Abscence as PrismaAbscence,
  Marks as PrismaMarks,
  Remarks as PrismaRemarks,
  Major as PrismaMajor,
} from "@prisma/client";

import { SignUpInput } from "../SignUpInput";
import { SignUpOutput } from "../SignUpOutput";

export class StudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StudentCountArgs, "select">): Promise<number> {
    return this.prisma.student.count(args);
  }

  async students<T extends Prisma.StudentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindManyArgs>
  ): Promise<PrismaStudent[]> {
    return this.prisma.student.findMany<Prisma.StudentFindManyArgs>(args);
  }
  async student<T extends Prisma.StudentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentFindUniqueArgs>
  ): Promise<PrismaStudent | null> {
    return this.prisma.student.findUnique(args);
  }
  async createStudent<T extends Prisma.StudentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentCreateArgs>
  ): Promise<PrismaStudent> {
    return this.prisma.student.create<T>(args);
  }
  async updateStudent<T extends Prisma.StudentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentUpdateArgs>
  ): Promise<PrismaStudent> {
    return this.prisma.student.update<T>(args);
  }
  async deleteStudent<T extends Prisma.StudentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDeleteArgs>
  ): Promise<PrismaStudent> {
    return this.prisma.student.delete(args);
  }

  async findAbscences(
    parentId: string,
    args: Prisma.AbscenceFindManyArgs
  ): Promise<PrismaAbscence[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .abscences(args);
  }

  async findMarksItems(
    parentId: string,
    args: Prisma.MarksFindManyArgs
  ): Promise<PrismaMarks[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .marksItems(args);
  }

  async findRemarksItems(
    parentId: string,
    args: Prisma.RemarksFindManyArgs
  ): Promise<PrismaRemarks[]> {
    return this.prisma.student
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .remarksItems(args);
  }

  async getMajor(parentId: string): Promise<PrismaMajor | null> {
    return this.prisma.student
      .findUnique({
        where: { id: parentId },
      })
      .major();
  }
  async SignUp(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async StudentSignUp(args: SignUpInput): Promise<SignUpOutput> {
    throw new Error("Not implemented");
  }
}
