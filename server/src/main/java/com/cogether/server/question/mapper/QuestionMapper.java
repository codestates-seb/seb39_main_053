package com.cogether.server.question.mapper;

import com.cogether.server.question.dto.QuestionDto;
import com.cogether.server.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post questionDto);
    Question questionPatchDtoToQuestion(QuestionDto.Patch questionDto);
    QuestionDto.Response questionToQuestionResponseDto(Question question);
    List<QuestionDto.ResponseList> questionsToQuestionResponseList(List<Question> questions);
}
