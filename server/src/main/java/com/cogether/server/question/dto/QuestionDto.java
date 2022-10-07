package com.cogether.server.question.dto;

import com.cogether.server.answer.dto.AnswerDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank(message = "작성자를 입력해주세요.")
        private String writerId;

        @NotBlank(message = "질문 제목을 입력해주세요.")
        private String title;

        @NotBlank(message = "질문 내용을 입력해주세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        @Positive
        private Long questionId;

        private String writerId;

        @NotBlank(message = "질문 내용을 입력해주세요.")
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long questionId;
        private String writerId;
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private List<AnswerDto.Response> answers;
    }

    @Getter
    @AllArgsConstructor
    public static class ResponseList {
        private Long questionId;
        private String writerId;
        private String title;
        private LocalDateTime createdAt;
    }
}
