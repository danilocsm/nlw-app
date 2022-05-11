import { prisma } from "../../prisma";

export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
  getAll: () => Promise<prisma.feedback.Feedback[]>;
}
