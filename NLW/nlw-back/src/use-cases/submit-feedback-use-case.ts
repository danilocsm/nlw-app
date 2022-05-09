import { MailAdapter } from "../adapters/mail.adapter";
import { FeedbacksRepository } from "../repositories/feedbacks.repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;
    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    if (!type) {
      throw new Error('Type is required.');
    }

    if (!comment) {
      throw new Error('Comment is required.');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="fontfamily: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}/>` : null,
        `</div>`,
      ].join("\n"),
    });
  }
}
