package com.cogether.server.answer.controller;

import com.cogether.server.answer.dto.AnswerDto;
import com.cogether.server.answer.entity.Answer;
import com.cogether.server.answer.mapper.AnswerMapper;
import com.cogether.server.answer.service.AnswerService;
import com.cogether.server.dto.SingleResponseDto;
import com.cogether.server.question.entity.Question;
import com.cogether.server.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answers")
@Validated
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final QuestionService questionService;
    private final AnswerMapper mapper;

    // 답변 등록
    @PostMapping
    public ResponseEntity postAnswer(@RequestBody @Valid AnswerDto.Post answerDto) {
        Answer answer = mapper.answerPostDtoToAnswer(answerDto);

        Question question = questionService.findQuestion(answerDto.getQuestionId());
        answer.addQuestion(question);

        Answer postAnswer = answerService.createAnswer(answer);
        AnswerDto.Response response = mapper.answerToAnswerResponseDto(postAnswer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    // 답변 수정
    @PutMapping("/{answer-id}")
    public ResponseEntity updateAnswer(@PathVariable("answer-id") @Positive long answerId,
                                       @Valid @RequestBody AnswerDto.Patch answerDto) {
        answerDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer))
                , HttpStatus.OK);
    }


    // 답변 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity("답변 삭제 완료", HttpStatus.NO_CONTENT);
    }
}
