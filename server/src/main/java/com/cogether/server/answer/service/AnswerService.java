package com.cogether.server.answer.service;

import com.cogether.server.answer.entity.Answer;
import com.cogether.server.answer.repostitory.AnswerRepository;
import com.cogether.server.exception.BusinessLogicException;
import com.cogether.server.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    // 답변 등록
    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    // 답변 수정
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        return answerRepository.save(findAnswer);
    }

    // 답변 삭제
    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer answer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.Answer_NOT_FOUND));
        return answer;
    }
}
