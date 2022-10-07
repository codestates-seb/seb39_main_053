package com.cogether.server.question.controller;

import com.cogether.server.dto.MultiResponseDto;
import com.cogether.server.dto.SingleResponseDto;
import com.cogether.server.question.dto.QuestionDto;
import com.cogether.server.question.entity.Question;
import com.cogether.server.question.mapper.QuestionMapper;
import com.cogether.server.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    // 질문 목록 조회
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam(defaultValue = "1") int page) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseList(questions), pageQuestions)
                , HttpStatus.OK);
    }

    // 질문 등록
    @PostMapping("/ask")
    public ResponseEntity postQuestion(@RequestBody @Valid QuestionDto.Post questionDto) {
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.CREATED);
    }

    // 질문 상세
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question))
                , HttpStatus.OK);
    }

    // 질문 수정
    @PatchMapping("/{question-id}")
    public ResponseEntity updateQuestion(@PathVariable("question-id") @Positive long questionId,
                                         @Valid @RequestBody QuestionDto.Patch questionDto) {
        questionDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question))
                , HttpStatus.OK);
    }

    // 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
