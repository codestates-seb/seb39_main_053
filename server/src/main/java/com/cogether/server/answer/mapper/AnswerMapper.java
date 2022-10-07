package com.cogether.server.answer.mapper;

import com.cogether.server.answer.dto.AnswerDto;
import com.cogether.server.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.Post answerDto);
    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerDto);
    AnswerDto.Response answerToAnswerResponseDto(Answer answer);
    List<AnswerDto.Response> answerToAnswerResponseDtos(List<Answer> answers);
}
