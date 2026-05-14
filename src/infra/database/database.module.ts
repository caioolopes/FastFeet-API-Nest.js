import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaAnswerAttachmentsRepository } from "./prisma/repositories/prisma-answer-attachments-repository";
import { PrismaQuestionAttachmentsRepository } from "./prisma/repositories/prisma-question-attachments-repository";
import { PrismAnswerCommentsRepository } from "./prisma/repositories/prisma-answer-comments-repository";
import { PrismaQuestionCommentsRepository } from "./prisma/repositories/prisma-question-comments-repository";
import { PrismaQuestionsRepository } from "./prisma/repositories/prisma-questions-repository";
import { PrismaAnswersRepository } from "./prisma/repositories/prisma-answers-repository";

@Module({
    providers:[PrismaService, PrismaAnswerAttachmentsRepository, PrismaQuestionAttachmentsRepository, PrismAnswerCommentsRepository, PrismaQuestionCommentsRepository, PrismaQuestionsRepository, PrismaAnswersRepository],
    exports:[PrismaService]
})
export class DatabaseModule {}