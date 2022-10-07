package com.cogether.server.question.service;

import com.cogether.server.exception.BusinessLogicException;
import com.cogether.server.exception.ExceptionCode;
import com.cogether.server.question.entity.Question;
import com.cogether.server.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    // 질문 목록 조회
    public Page<Question> findQuestions(int page) {
        return questionRepository.findAll(
                PageRequest.of(page, 10, Sort.by("questionId").descending()
                ));
    }

    // 질문 등록
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    // 질문 조회
    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

    // 질문 수정
    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        Optional.ofNullable(question.getWriterId())
                .ifPresent(writerId -> findQuestion.setWriterId(writerId));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));
        return questionRepository.save(findQuestion);
    }

    // 질문 삭제
    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.Question_NOT_FOUND));
        return question;
    }
}
