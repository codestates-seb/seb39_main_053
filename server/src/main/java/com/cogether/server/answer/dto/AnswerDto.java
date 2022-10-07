package com.cogether.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @Positive
        private Long questionId;

        @NotBlank(message = "작성자를 입력해주세요.")
        private String writerId;

        @NotBlank(message = "답변 내용을 입력해주세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        @Positive
        private Long answerId;

        @NotBlank(message = "답변 내용을 입력해주세요.")
        private String content;
    }


    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long answerId;
        private String writerId;
        private String content;
        private LocalDateTime createdAt;
    }
}
