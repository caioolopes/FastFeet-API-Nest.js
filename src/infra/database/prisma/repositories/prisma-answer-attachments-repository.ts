import { AnswerAttachmentsRepository } from "@/domain/forum/application/repositories/answer-attachments-repository";
import { AnswerAttachment } from "@/domain/forum/enterprise/entities/answer-attachment";
import { Injectable } from "@nestjs/common";

export @Injectable()
class PrismaAnswerAttachmentsRepository implements AnswerAttachmentsRepository {
    findManyByAnswerId(_answerId: string): Promise<AnswerAttachment[]> {
        throw new Error("Method not implemented.");
    }
    deleteManyByAnswerId(_answerId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}