import express from "express";
import { NodemailerMailAdadpter } from "./adapters/nodemailer/nodemailer.mail.adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma.feedbacks.repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const router = express.Router();

router.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const nodemailer = new NodemailerMailAdadpter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailer
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).json();
});
